import { Piece } from 'shogi.js';
import { getPieceLabel } from '~/domain/shogi/presentation/piece';
import { myTebanState } from '~/domain/shogi/state/atoms';
import { useAtom } from 'jotai';
import { enemyStyle, myTurnMassStyle } from '~/components/domain/shogi/VMass.css';

type Props = {
  piece: Piece;
};

export const VPiece = ({ piece }: Props) => {
  return <div>{getPieceLabel(piece)}</div>;
};
