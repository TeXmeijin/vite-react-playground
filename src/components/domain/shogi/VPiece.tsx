import { Piece } from 'shogi.js';
import { getPieceLabel } from '~/domain/shogi/presentation/piece';
import { pieceStyle } from '~/components/domain/shogi/VPiece.css';

type Props = {
  piece: Piece;
};

export const VPiece = ({ piece }: Props) => {
  return <div className={pieceStyle.piece}>{getPieceLabel(piece)}</div>;
};
