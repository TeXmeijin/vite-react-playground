import { IMove, Shogi } from 'shogi.js';
import { Point } from '~/domain/shogi/types/types';
import { atom } from 'jotai';

const shogiState = atom<Shogi>(
  new Shogi({
    preset: 'HIRATE',
  })
);

const selectedPieceState = atom<Point | null>(null);

const movableMassState = atom<IMove[]>((get) => {
  const selectedPiece = get(selectedPieceState);
  if (!selectedPiece) return [];

  const shogi = get(shogiState);
  return shogi.getMovesFrom(selectedPiece.x, selectedPiece.y);
});

export { selectedPieceState, shogiState, movableMassState };
