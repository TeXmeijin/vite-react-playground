import {Header} from "~/components/layouts/common/Header";
import {ReactNode} from "react";

export const SharedLayout = ({children}: {children: ReactNode}) => {
  return (
    <main>
      <Header></Header>
      <article>
        {children}
      </article>
    </main>
  )
}
