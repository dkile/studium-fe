import styles from "@/styles/components/ProfileSubmenu.module.sass";

function ProfileSubmenu() {
  return (
    <div
      className={`${styles.submenuContainer} ${styles.profileSubmenuContainer}`}
    >
      <div className={styles.submenuContent}>
        <div className={styles.authBtnsContainer}>
          <button
            type="button"
            className={`${styles.signupBtn} ${styles.submenuBtn}`}
          >
            회원가입
          </button>
          <button
            type="button"
            className={`${styles.signinBtn} ${styles.submenuBtn}`}
          >
            로그인
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileSubmenu;
