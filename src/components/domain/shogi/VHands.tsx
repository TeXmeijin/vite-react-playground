import { Piece } from 'shogi.js';
import classNames from 'classnames';
import { VPiece } from '~/components/domain/shogi/VPiece';
import { handsStyle } from '~/components/domain/shogi/VHands.css';

export const VHands = ({ hands, className }: { hands: Piece[]; className?: string }) => {
  return (
    <div className={classNames(handsStyle.hands, className)}>
      {hands.length > 0 &&
        hands.map((hand, index) => {
          return <VPiece key={index} piece={hand} />;
        })}
    </div>
  );
};
