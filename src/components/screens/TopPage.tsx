import {styles} from "~/components/screens/TopPage.css";
import {SharedLayout} from "~/components/layouts/SharedLayout";
import {Head} from "~/components/layouts/common/Head";

export const TopPage = () => {
  return (
    <>
      <Head title={'Top Page'} description={'This is top page.'}/>
      <SharedLayout>
        <div className={styles.root}>
          Top Page
        </div>
      </SharedLayout>
    </>
  )
}
