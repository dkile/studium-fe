import Link from "next/link";
import Image from "next/image";

import styles from "@/styles/components/MainHeader.module.sass";
import {
  HOME_PATH,
  STUDIES_PATH,
  TEMPLATES_PATH,
  BOOKMARKS_PATH,
} from "@/utils/routes";
import ProfileBtn from "./ProfileBtn";

function MainHeader() {
  return (
    <header className={styles.main_header}>
      <div className={styles.logo_container}>
        <Link href={HOME_PATH}>
          <Image
            src={`https://studium-fe.s3.ap-northeast-2.amazonaws.com/public/studium-logo.png`}
            alt={"Studium logo"}
            width={60}
            height={56}
            aria-hidden
            className={styles.logo_img}
          />
          <Image
            src={`https://studium-fe.s3.ap-northeast-2.amazonaws.com/public/studium-title.svg`}
            alt={"Studium title"}
            width={120}
            height={40}
            aria-hidden
            priority
            className={styles.logo_title}
          />
        </Link>
      </div>
      <nav aria-label="primary-nav" className={styles.gnb}>
        <Link href={STUDIES_PATH}>스터디</Link>
        <Link href={TEMPLATES_PATH}>템플릿</Link>
        <Link href={BOOKMARKS_PATH}>책갈피</Link>
      </nav>
      <ProfileBtn />
      <div className={styles.dropdown}>
        <ul>
          <li>
            <button>회원가입/로그인</button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default MainHeader;
