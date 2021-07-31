import { enemyStyle, massStyle, myTurnMassStyle, selectedMassStyle } from '~/components/domain/shogi/VMass.css';
import classNames from 'classnames';
import { Piece } from 'shogi.js';
import { VPiece } from '~/components/domain/shogi/VPiece';
import { myTebanState } from '~/domain/shogi/state/atoms';
import { useAtom } from 'jotai';

type Props = {
  piece?: Piece;
  onClick?: () => void;
  selected: boolean;
};

export const VMass = ({ piece, onClick, selected }: Props) => {
  const [initialTeban] = useAtom(myTebanState);

  if (!piece) {
    return <div onClick={onClick} className={classNames(massStyle, selected ? selectedMassStyle : '')} />;
  }

  return (
    <div
      className={classNames(
        massStyle,
        selected ? selectedMassStyle : '',
        piece.color !== initialTeban ? enemyStyle : myTurnMassStyle
      )}
      onClick={onClick}
    >
      <VPiece piece={piece} />
    </div>
  );
};
