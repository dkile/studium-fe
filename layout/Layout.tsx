import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/layout/Layout.module.sass";

import { WithChildren } from "@/utils/util-types";
import { notoSansKr, sourceSansPro } from "@/utils/fonts";
import GlobalHeader from "@/components/layout/GlobalHeader";

type LayoutProps = WithChildren<object>;

function Layout({ children }: LayoutProps) {
  return (
    <div
      className={`${styles.rootContainer} ${notoSansKr.variable} ${sourceSansPro.variable}`}
    >
      <GlobalHeader />
      <main className={styles.contentsContainer}>
        <button
          type="button"
          tabIndex={-1}
          aria-label="Creating new study group buttom"
          className={styles.newStudyBtn}
        >
          <Link href="/study/new">
            <Image
              src="https://studium-fe.s3.ap-northeast-2.amazonaws.com/public/icon/newstudy.svg"
              alt="Create new study"
              width={32}
              height={32}
              aria-hidden
            />
          </Link>
        </button>
        {children}
      </main>
    </div>
  );
}

export default Layout;
