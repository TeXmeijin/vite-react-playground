import { atom, selector } from 'recoil';
import { IMove, Shogi } from 'shogi.js';
import { Point } from '~/domain/shogi/types/types';

const shogiState = atom<Shogi>({
  key: 'shogiRoot',
  default: new Shogi({
    preset: 'HIRATE',
  }),
});

const selectedPieceState = atom<Point | null>({
  key: 'selectedPiece',
  default: null,
});

const moveableMassState = selector<IMove[]>({
  key: 'moveableMassState',
  get: ({ get }) => {
    const selectedPiece = get(selectedPieceState);
    if (!selectedPiece) return [];

    const shogi = get(shogiState);
    return shogi.getMovesFrom(selectedPiece.x, selectedPiece.y);
  },
});

export { selectedPieceState, shogiState };
