import { Piece } from 'shogi.js';

export const getPieceLabel = (piece: Piece): string => {
  switch (piece.kind) {
    case 'FU':
      return '歩';
    case 'KY':
      return '香';
    case 'KE':
      return '桂';
    case 'GI':
      return '銀';
    case 'KI':
      return '金';
    case 'KA':
      return '角';
    case 'HI':
      return '飛';
    case 'OU':
      return '王';
    case 'UM':
      return '馬';
    case 'TO':
      return 'と';
    case 'RY':
      return '龍';
    case 'NG':
      return '成銀';
    case 'NK':
      return '成桂';
    case 'NY':
      return '成香';
    default:
      return piece.kind;
  }
};
