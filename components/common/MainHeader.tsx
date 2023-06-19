import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import styles from "@/styles/components/MainHeader.module.sass";
import {
  HOME_PATH,
  STUDIES_PATH,
  TEMPLATES_PATH,
  BOOKMARKS_PATH,
} from "@/utils/routes";
import ProfileBtn from "./ProfileBtn";
import ProfileSubmenu from "./ProfileSubmenu";

function MainHeader() {
  const [profileSubmenuVisibility, setProfileSubmenuVisibility] =
    useState(false);
  const handleProfileBtnClick = () => {
    setProfileSubmenuVisibility(prev => !prev);
  };

  return (
    <header className={styles.mainHeader}>
      <div className={styles.logoContainer}>
        <Link href={HOME_PATH}>
          <Image
            src="https://studium-fe.s3.ap-northeast-2.amazonaws.com/public/studium-logo.png"
            alt="Studium logo"
            width={45}
            height={42}
            aria-hidden
            className={styles.logoImg}
          />
          <Image
            src="https://studium-fe.s3.ap-northeast-2.amazonaws.com/public/studium-title.svg"
            alt="Studium title"
            width={120}
            height={40}
            aria-hidden
            priority
            className={styles.logoTitle}
          />
        </Link>
      </div>
      <nav aria-label="primary-nav" className={styles.gnb}>
        <Link href={STUDIES_PATH}>스터디</Link>
        <Link href={TEMPLATES_PATH}>템플릿</Link>
        <Link href={BOOKMARKS_PATH}>책갈피</Link>
      </nav>
      <ProfileBtn handleClick={handleProfileBtnClick} />
      {profileSubmenuVisibility ? <ProfileSubmenu /> : null}
    </header>
  );
}

export default MainHeader;
