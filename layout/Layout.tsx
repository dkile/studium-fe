import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/layout/Layout.module.sass";

import { WithChildren } from "@/utils/util-types";
import { noto_sans_kr, source_sans_pro } from "@/utils/fonts";
import MainHeader from "@/components/common/MainHeader";

type LayoutProps = WithChildren<{}>;

function Layout({ children }: LayoutProps) {
  return (
    <div
      className={`${styles.root_container} ${noto_sans_kr.variable} ${source_sans_pro.variable}`}
    >
      <MainHeader />
      <main className={styles.contents_container}>
        <button
          tabIndex={-1}
          aria-label="Creating new study group buttom"
          className={styles.new_study_btn}
        >
          <Link href={"/study/new"}>
            <Image
              src={`https://studium-fe.s3.ap-northeast-2.amazonaws.com/public/icon/newstudy.svg`}
              alt="Create new study"
              width={38}
              height={40}
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
