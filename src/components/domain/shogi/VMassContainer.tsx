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
};

export const VMassContainer = ({ point }: Props) => {
  const [selectedPiece, setSelectedPiece] = useAtom(selectedPieceState);
  const [selectedHand, setSelectedHand] = useAtom(selectedHandState);

  const [board, setBoard] = useAtom(boardState);
  const [, setHands] = useAtom(handsState);
  const piece = board[point.x - 1][point.y - 1];
  const [moveableMass] = useAtom(movableMassState);
  const [shogi] = useAtom(shogiState);
  const teban = shogi.turn;

  const moveOrDrop = () => {
    if (!selectedPiece) {
      if (!selectedHand) return;

      shogi.drop(point.x, point.y, selectedHand);
      setSelectedHand(null);
    } else {
      // TODO: 成れるかどうかの確認
      shogi.move(selectedPiece.x, selectedPiece.y, point.x, point.y, false);
      setSelectedPiece(null);
    }

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
      moveOrDrop();
      return;
    }
    setSelectedPiece(null);
  };

  if (!piece) return <VMass onClick={onEmptyMassClick} selected={selected} />;

  const onPieceClick = () => {
    if (selected) {
      moveOrDrop();
      return;
    }
    piece.color === teban ? setSelectedPiece(point) : setSelectedPiece(null);
  };

  return <VMass piece={piece} onClick={onPieceClick} selected={selected} />;
};
