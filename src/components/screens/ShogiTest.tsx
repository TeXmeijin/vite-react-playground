import { Provider } from 'jotai';
import { VBoard } from '~/components/domain/shogi/VBoard';

export const ShogiTest = () => {
  return (
    <div>
      <Provider>
        <VBoard />
      </Provider>
    </div>
  );
};
