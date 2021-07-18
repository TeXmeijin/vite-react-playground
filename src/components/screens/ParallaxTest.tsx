import { Background, Parallax } from 'react-parallax';
import { styles } from '~/components/screens/ParallaxTest.css';

export const ParallaxTest = () => {
  return (
    <div>
      <h1>Parallax Test</h1>
      <Parallax strength={300}>
        <Background className={styles.parallax}>
          <img src="http://www.fillmurray.com/500/320" alt="fill murray" />
        </Background>
      </Parallax>
    </div>
  );
};
