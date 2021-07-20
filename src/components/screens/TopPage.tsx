import { styles } from '~/components/screens/TopPage.css';
import { SharedLayout } from '~/components/layouts/SharedLayout';
import { Head } from '~/components/layouts/common/Head';
import { Link } from 'rocon/react';
import { topLevelRoutes } from '~/components/routes/Routes';

export const TopPage = () => {
  return (
    <>
      <Head title={'Top Page'} description={'This is top page.'} />
      <SharedLayout>
        <div className={styles.root}>Top Page</div>
        <ul className={styles.links}>
          <li>
            <Link route={topLevelRoutes._.parallax}>Parallax Test</Link>
          </li>
        </ul>
      </SharedLayout>
    </>
  );
};
