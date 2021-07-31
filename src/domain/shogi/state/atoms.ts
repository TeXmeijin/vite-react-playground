import { Color, IMove, Piece, Shogi } from 'shogi.js';
import { Point } from '~/domain/shogi/types/types';
import { atom } from 'jotai';

type Kind = string;

const shogiState = atom<Shogi>(
  new Shogi({
    preset: 'HIRATE',
  })
);

const boardState = atom<Piece[][]>([]);

// 配列をそのまま突っ込むと更新の検知が走らないっぽい
const handsState = atom<{ hands: Piece[][] }>({ hands: [[], []] });

const myTebanState = atom<Color>(Color.Black);

const selectedPieceState = atom<{
  point: Point;
  piece: Piece;
} | null>(null);
const selectedHandState = atom<Kind | null>(null);

const movableMassState = atom<IMove[]>((get) => {
  const selectedPiece = get(selectedPieceState);
  const selectedHand = get(selectedHandState);
  const shogi = get(shogiState);

  if (!selectedPiece) {
    if (!selectedHand) return [];

    return shogi.getDropsBy(shogi.turn).filter((iMove) => iMove.kind === selectedHand);
  }

  return shogi.getMovesFrom(selectedPiece.point.x, selectedPiece.point.y);
});

export { selectedPieceState, shogiState, movableMassState, myTebanState, boardState, handsState, selectedHandState };
