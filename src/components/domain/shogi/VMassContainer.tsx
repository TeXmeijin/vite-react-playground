import { Point } from '~/domain/shogi/types/types';
import {
  boardState,
  handsState,
  movableMassState,
  selectedHandState,
  selectedPieceState,
  shogiState,
} from '~/domain/shogi/state/atoms';
import { useAtom } from 'jotai';
import { useMemo } from 'react';
import { VMass } from '~/components/domain/shogi/VMass';

type Props = {
  point: Point;
  onMoveOrDrop(point: Point): void;
};

export const VMassContainer = ({ point, onMoveOrDrop }: Props) => {
  const [selectedPiece, setSelectedPiece] = useAtom(selectedPieceState);
  const [selectedHand, setSelectedHand] = useAtom(selectedHandState);

  const [board, setBoard] = useAtom(boardState);
  const [, setHands] = useAtom(handsState);
  const piece = board[point.x - 1][point.y - 1];
  const [moveableMass] = useAtom(movableMassState);
  const [shogi] = useAtom(shogiState);
  const teban = shogi.turn;

  // const moveOrDrop = () => {
  //   if (!selectedPiece) {
  //     if (!selectedHand) return;
  //
  //     shogi.drop(point.x, point.y, selectedHand);
  //     setSelectedHand(null);
  //   } else {
  //     move(selectedPiece);
  //   }
  //
  //   setBoard(shogi.board);
  //   setHands({ hands: shogi.hands });
  // };
  //
  // const move = (selectedPiece: Point, promote = false) => {
  //   // TODO: 成れるかどうかの確認
  //   shogi.move(selectedPiece.x, selectedPiece.y, point.x, point.y, promote);
  //   setSelectedPiece(null);
  // };

  const selected = useMemo(() => {
    return (
      moveableMass.filter((mass) => {
        return mass.to.x === point.x && mass.to.y === point.y;
      }).length > 0
    );
  }, [moveableMass]);

  const onEmptyMassClick = () => {
    if (selected) {
      onMoveOrDrop(point);
      return;
    }
    setSelectedPiece(null);
  };

  if (!piece) return <VMass onClick={onEmptyMassClick} selected={selected} />;

  const onPieceClick = () => {
    if (selected) {
      onMoveOrDrop(point);
      return;
    }
    piece.color === teban ? setSelectedPiece({ point, piece }) : setSelectedPiece(null);
  };

  return <VMass piece={piece} onClick={onPieceClick} selected={selected} />;
};
