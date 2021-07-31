import { Color, IMove, Piece, Shogi } from 'shogi.js';
import { Point } from '~/domain/shogi/types/types';
import { atom } from 'jotai';

const shogiState = atom<Shogi>(
  new Shogi({
    preset: 'HIRATE',
  })
);

const boardState = atom<Piece[][]>([]);
const handsState = atom<{ hands: Piece[][] }>({ hands: [[], []] });

const myTebanState = atom<Color>(Color.Black);

const selectedPieceState = atom<Point | null>(null);

const movableMassState = atom<IMove[]>((get) => {
  const selectedPiece = get(selectedPieceState);
  if (!selectedPiece) return [];

  const shogi = get(shogiState);
  return shogi.getMovesFrom(selectedPiece.x, selectedPiece.y);
});

export { selectedPieceState, shogiState, movableMassState, myTebanState, boardState, handsState };
