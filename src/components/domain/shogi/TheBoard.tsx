import { TheMass } from '~/components/domain/shogi/TheMass';
import { boardStyle } from '~/components/domain/shogi/TheBoard.css';
import { shogiState } from '~/domain/shogi/state/atoms';
import { useAtom } from 'jotai';

export const TheBoard = () => {
  const [shogi] = useAtom(shogiState);
  const board = shogi.board;

  return (
    <div className={boardStyle}>
      {board.map((line, xIndex) => {
        return (
          <div key={xIndex}>
            {line.map((mass, yIndex) => {
              return <TheMass point={{ x: xIndex + 1, y: yIndex + 1 }} key={yIndex} piece={mass} />;
            })}
          </div>
        );
      })}
    </div>
  );
};
