import { ThePiece } from '~/components/domain/shogi/ThePiece';
import { boardStyle } from '~/components/domain/shogi/TheBoard.css';
import { useRecoilState } from 'recoil';
import { selectedPieceState, shogiState } from '~/domain/shogi/state/atoms';
import { Point } from '~/domain/shogi/types/types';

export const TheBoard = () => {
  const [shogi] = useRecoilState(shogiState);
  const [, setSelectedPiece] = useRecoilState(selectedPieceState);
  const board = shogi.board;

  const onPieceClick = (point: Point) => {
    setSelectedPiece(point);
  };

  return (
    <div className={boardStyle}>
      {board.map((line, lineIndex) => {
        return (
          <div key={lineIndex}>
            {line.map((mass, index) => {
              return (
                <ThePiece
                  movable={false}
                  onPieceClick={() => onPieceClick({ x: lineIndex, y: index })}
                  key={index}
                  piece={mass}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
