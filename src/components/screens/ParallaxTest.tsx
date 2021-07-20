import { Parallax } from 'react-parallax';
import { styles } from '~/components/screens/ParallaxTest.css';

export const ParallaxTest = () => {
  return (
    <div>
      <h1>Parallax Test</h1>
      <Parallax
        bgImage={
          'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg'
        }
        strength={300}
      >
        <div className={styles.parallax}>
          <span className={styles.text}>パララックス</span>
        </div>
      </Parallax>
      <Parallax
        bgImage={
          'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg'
        }
        strength={500}
        renderLayer={(percentage) => (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '2rem',
              width: '500vw',
              height: '600px',
              // position: 'absolute',
              background: `rgba(255, 125, 0)`,
              transform: `translateX(${(percentage - 1) * 100 - 80}vw)`,
              // left: '50%',
              // top: '50%',
              // borderRadius: '50%',
              // transform: 'translate(-50%,-50%)',
              // width: percentage * 500,
              // height: percentage * 500,
            }}
          >
            <span>
              aqwscxczvdfertgjbngkhyoaqwscxczvdfertgjbngkhyoaqwscxczvdfertgjbngkhyoaqwscxczvdfertgjbngkhyoaqwscxczvdfertgjbngkhyoaqwscxczvdfertgjbngkhyoaqwscxczvdfertgjbngkhyoaqwscxczvdfertgjbngkhyoaqwscxczvdfertgjbngkhyo
            </span>
          </div>
        )}
      >
        <div className={styles.parallax}>
          <span className={styles.text}>パララックス</span>
        </div>
      </Parallax>
      <Parallax
        bgImage={
          'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg'
        }
        strength={100}
      >
        <div className={styles.parallax}>
          <span className={styles.text}>パララックス</span>
        </div>
      </Parallax>
    </div>
  );
};
