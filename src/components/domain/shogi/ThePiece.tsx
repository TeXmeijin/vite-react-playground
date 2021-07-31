import { Color, Piece } from 'shogi.js';
import classNames from 'classnames';
import { enemyStyle, massStyle } from '~/components/domain/shogi/ThePiece.css';

type Props = {
  piece: Piece | null;
  onPieceClick: () => void;
  movable: boolean;
};

export const ThePiece = ({ piece, onPieceClick, movable }: Props) => {
  if (!piece) return <span className={massStyle} />;

  return (
    <span className={classNames(piece.color === Color.White ? enemyStyle : '', massStyle)}>
      <span onClick={onPieceClick}>{piece.kind}</span>
    </span>
  );
};
