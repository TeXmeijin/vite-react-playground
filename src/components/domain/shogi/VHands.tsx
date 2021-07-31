import { Piece } from 'shogi.js';
import classNames from 'classnames';
import { VPiece } from '~/components/domain/shogi/VPiece';
import { handsStyle } from '~/components/domain/shogi/VHands.css';
import { useAtom } from 'jotai';
import { selectedHandState } from '~/domain/shogi/state/atoms';

export const VHands = ({ hands, className }: { hands: Piece[]; className?: string }) => {
  return (
    <div className={classNames(handsStyle.hands, className)}>
      {hands.length > 0 &&
        hands.map((hand, index) => {
          return <VHand key={index} hand={hand} />;
        })}
    </div>
  );
};

const VHand = ({ hand }: { hand: Piece }) => {
  const [, setSelectedHand] = useAtom(selectedHandState);
  const onClick = () => setSelectedHand(hand.kind);

  return (
    <div onClick={onClick} className={handsStyle.hand}>
      <VPiece piece={hand} />
    </div>
  );
};
