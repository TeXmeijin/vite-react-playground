import { VMassContainer } from '~/components/domain/shogi/VMassContainer';
import { boardState, handsState, shogiState } from '~/domain/shogi/state/atoms';
import { useAtom } from 'jotai';
import { theBoardStyles } from '~/components/domain/shogi/VBoard.css';
import { VHands } from '~/components/domain/shogi/VHands';
import { Color } from 'shogi.js';
import { enemyStyle } from '~/components/domain/shogi/VMass.css';

export const VBoard = () => {
  // FIX: 更新が走らない
  const [shogi] = useAtom(shogiState);

  // 更新を走らせるための工夫
  const [board, setBoard] = useAtom(boardState);
  const [hands, setHands] = useAtom(handsState);
  shogiState.onMount = () => {
    setBoard(shogi.board);
    setHands({ hands: shogi.hands });
  };

  // TODO 自分の手番を初期化

  return (
    <div className={theBoardStyles.container}>
      {hands.hands && <VHands className={enemyStyle} hands={hands.hands[Color.White]} />}
      <div className={theBoardStyles.board}>
        {board.map((line, xIndex) => {
          return (
            <div key={xIndex}>
              {line.map((mass, yIndex) => {
                return <VMassContainer point={{ x: xIndex + 1, y: yIndex + 1 }} key={yIndex} />;
              })}
            </div>
          );
        })}
      </div>
      {hands.hands && <VHands hands={hands.hands[Color.Black]} />}
    </div>
  );
};
