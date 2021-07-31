import { Piece } from 'shogi.js';
import { getPieceLabel } from '~/domain/shogi/presentation/piece';

type Props = {
  piece: Piece;
};

export const ThePiece = ({ piece }: Props) => {
  return <span>{getPieceLabel(piece)}</span>;
};
