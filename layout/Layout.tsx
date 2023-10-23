import Link from "next/link";
import styles from "@/styles/layout/Layout.module.sass";

import { WithChildren } from "@/utils/util-types";
import { notoSansKr, sourceSansPro } from "@/utils/fonts";
import GlobalHeader from "@/components/layout/GlobalHeader";
import Icon from "@/components/common/Icon";
import GlobalModal from "./GlobalModals";

type LayoutProps = WithChildren<object>;

function Layout({ children }: LayoutProps) {
  return (
    <div
      className={`${styles.rootContainer} ${notoSansKr.variable} ${sourceSansPro.variable}`}
    >
      <GlobalHeader />
      <GlobalModal />
      <main className={styles.contentsContainer}>
        <Link href="/study/new">
          <button
            type="button"
            tabIndex={-1}
            aria-label="Creating new study group buttom"
            className={styles.newStudyBtn}
          >
            <Icon name="new-study" className={styles.newStudyIcon} />
          </button>
        </Link>
        {children}
      </main>
    </div>
  );
}

export default Layout;
