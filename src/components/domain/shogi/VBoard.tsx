import { VMassContainer } from '~/components/domain/shogi/VMassContainer';
import { boardState, handsState, selectedHandState, selectedPieceState, shogiState } from '~/domain/shogi/state/atoms';
import { useAtom } from 'jotai';
import { theBoardStyles } from '~/components/domain/shogi/VBoard.css';
import { VHands } from '~/components/domain/shogi/VHands';
import { Color, Piece } from 'shogi.js';
import { enemyStyle } from '~/components/domain/shogi/VMass.css';
import { Point } from '~/domain/shogi/types/types';
import { useState } from 'react';
import ReactModal from 'react-modal';

export const VBoard = () => {
  const [shogi] = useAtom(shogiState);
  const [board, setBoard] = useAtom(boardState);
  const [hands, setHands] = useAtom(handsState);
  shogiState.onMount = () => {
    setBoard(shogi.board);
    setHands({ hands: shogi.hands });
  };
  const [openPromoteModal, setOpenPromoteModal] = useState(false);
  const [cachedToPoint, setCachedToPoint] = useState<Point | null>(null);

  // コマを動かす処理は共通なのでここで持つ
  const [selectedPiece, setSelectedPiece] = useAtom(selectedPieceState);
  const [selectedHand, setSelectedHand] = useAtom(selectedHandState);
  const onMoveOrDrop = (point: Point) => {
    setCachedToPoint(point);

    if (!selectedPiece) {
      if (!selectedHand) return;

      shogi.drop(point.x, point.y, selectedHand);
      setSelectedHand(null);
    } else {
      if (Piece.canPromote(selectedPiece.piece.kind)) {
        // 桂馬、香車、歩の場合は必ず成らなければならないケースが有る
        if (selectedPiece.piece.kind === 'FU' || selectedPiece.piece.kind === 'KY') {
          if ((shogi.turn === Color.Black && point.y <= 1) || (shogi.turn === Color.White && point.y >= 9)) {
            onMove(point, true);
            return;
          }
        }
        if (selectedPiece.piece.kind === 'KE') {
          if ((shogi.turn === Color.Black && point.y <= 2) || (shogi.turn === Color.White && point.y >= 8)) {
            onMove(point, true);
            return;
          }
        }

        // 敵陣に入ったとき
        if ((shogi.turn === Color.Black && point.y <= 3) || (shogi.turn === Color.White && point.y >= 7)) {
          setOpenPromoteModal(true);
          return;
        }
        // 敵陣から出たとき
        if (
          (shogi.turn === Color.Black && selectedPiece.point.y <= 3) ||
          (shogi.turn === Color.White && selectedPiece.point.y >= 7)
        ) {
          setOpenPromoteModal(true);
          return;
        }
      }
      onMove(point);
    }

    setBoard(shogi.board);
    setHands({ hands: shogi.hands });
  };
  const onMove = (point: Point, promote = false) => {
    if (!selectedPiece) return;

    shogi.move(selectedPiece.point.x, selectedPiece.point.y, point.x, point.y, promote);
    setSelectedPiece(null);
    setSelectedHand(null);
  };

  // TODO 自分の手番を初期化(後手目線対応)

  return (
    <div className={theBoardStyles.container}>
      {hands.hands && <VHands className={enemyStyle} hands={hands.hands[Color.White]} />}
      <div className={theBoardStyles.board}>
        {board.map((line, xIndex) => {
          return (
            <div key={xIndex}>
              {line.map((mass, yIndex) => {
                return (
                  <VMassContainer onMoveOrDrop={onMoveOrDrop} point={{ x: xIndex + 1, y: yIndex + 1 }} key={yIndex} />
                );
              })}
            </div>
          );
        })}
      </div>
      {hands.hands && <VHands hands={hands.hands[Color.Black]} />}
      <ReactModal style={customModalStyles} ariaHideApp={false} isOpen={openPromoteModal}>
        <div>
          <p>成りますか？</p>
          <div>
            <button
              onClick={() => {
                setOpenPromoteModal(false);
                cachedToPoint && onMove(cachedToPoint);
              }}
            >
              成らない
            </button>
            <button
              onClick={() => {
                setOpenPromoteModal(false);
                cachedToPoint && onMove(cachedToPoint, true);
              }}
            >
              成る
            </button>
          </div>
        </div>
      </ReactModal>
    </div>
  );
};

const customModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
