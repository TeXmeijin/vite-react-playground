import classNames from 'classnames';
import { enemyStyle, massStyle, myTurnMassStyle, selectedMassStyle } from '~/components/domain/shogi/VMass.css';
import { Point } from '~/domain/shogi/types/types';
import {
  boardState,
  handsState,
  movableMassState,
  myTebanState,
  selectedPieceState,
  shogiState,
} from '~/domain/shogi/state/atoms';
import { useAtom } from 'jotai';
import { useMemo } from 'react';
import { VPiece } from '~/components/domain/shogi/VPiece';
import { VMass } from '~/components/domain/shogi/VMass';

type Props = {
  point: Point;
};

export const VMassContainer = ({ point }: Props) => {
  const [selectedPiece, setSelectedPiece] = useAtom(selectedPieceState);
  const [board, setBoard] = useAtom(boardState);
  const [, setHands] = useAtom(handsState);
  const piece = board[point.x - 1][point.y - 1];
  const [moveableMass] = useAtom(movableMassState);
  const [initialTeban] = useAtom(myTebanState);
  const [shogi] = useAtom(shogiState);
  const teban = shogi.turn;

  const move = () => {
    if (!selectedPiece) return;
    // TODO: 成れるかどうかの確認
    shogi.move(selectedPiece.x, selectedPiece.y, point.x, point.y, false);
    setBoard(shogi.board);
    setHands({ hands: shogi.hands });
  };

  const selected = useMemo(() => {
    return (
      moveableMass.filter((mass) => {
        return mass.to.x === point.x && mass.to.y === point.y;
      }).length > 0
    );
  }, [moveableMass]);

  const onEmptyMassClick = () => {
    if (selected) {
      move();
    }
    setSelectedPiece(null);
  };

  if (!piece) return <VMass onClick={onEmptyMassClick} selected={selected} />;

  const onPieceClick = () => {
    if (selected) {
      move();
      setSelectedPiece(null);
      return;
    }
    piece.color === teban ? setSelectedPiece(point) : setSelectedPiece(null);
  };

  return <VMass piece={piece} onClick={onPieceClick} selected={selected} />;
};
