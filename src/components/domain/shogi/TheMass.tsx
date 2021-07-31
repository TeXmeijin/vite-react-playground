import { Color, Piece } from 'shogi.js';
import classNames from 'classnames';
import { enemyStyle, massStyle, myTurnMassStyle, selectedMassStyle } from '~/components/domain/shogi/TheMass.css';
import { Point } from '~/domain/shogi/types/types';
import { movableMassState, myTebanState, selectedPieceState } from '~/domain/shogi/state/atoms';
import { useAtom } from 'jotai';
import { useMemo } from 'react';
import { ThePiece } from '~/components/domain/shogi/ThePiece';

type Props = {
  piece: Piece | null;
  point: Point;
};

export const TheMass = ({ piece, point }: Props) => {
  const [, setSelectedPiece] = useAtom(selectedPieceState);
  const [moveableMass] = useAtom(movableMassState);
  const [teban] = useAtom(myTebanState);

  const selected = useMemo(() => {
    return (
      moveableMass.filter((mass) => {
        return mass.to.x === point.x && mass.to.y === point.y;
      }).length > 0
    );
  }, [moveableMass]);

  const onEmptyPieceClick = () => {
    setSelectedPiece(null);
  };

  if (!piece)
    return <div onClick={onEmptyPieceClick} className={classNames(massStyle, selected ? selectedMassStyle : '')} />;

  const onPieceClick = () => {
    piece.color === teban ? setSelectedPiece(point) : setSelectedPiece(null);
  };

  return (
    <div
      className={classNames(
        piece.color !== teban ? enemyStyle : myTurnMassStyle,
        massStyle,
        selected ? selectedMassStyle : ''
      )}
      onClick={onPieceClick}
    >
      <div>
        <ThePiece piece={piece} />
      </div>
    </div>
  );
};
