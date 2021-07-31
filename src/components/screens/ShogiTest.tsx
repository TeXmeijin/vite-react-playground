import { TheBoard } from '~/components/domain/shogi/TheBoard';
import { RecoilRoot } from 'recoil';

export const ShogiTest = () => {
  return (
    <div>
      <RecoilRoot>
        <TheBoard />
      </RecoilRoot>
    </div>
  );
};
