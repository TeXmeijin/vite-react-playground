import vite from '~/assets/img/icons/vite.svg';
import { styles } from '~/components/layouts/common/Header.css';

export const Header = () => (
  <header className={styles.headerContainer}>
    <img className={styles.logo} src={vite} alt="Vite" />
    <span className={styles.title}>Vite+React+TS Playground</span>
  </header>
);
