import styles from "@/styles/components/ProfileSubmenu.module.sass";

function ProfileSubmenu() {
  return (
    <div
      className={`${styles.submenu_container} ${styles.profile_submenu_container}`}
    >
      <div className={styles.submenu_content}>
        <div className={styles.auth_btns_container}>
          <button className={`${styles.signup_btn} ${styles.submenu_btn}`}>
            회원가입
          </button>
          <button className={`${styles.signin_btn} ${styles.submenu_btn}`}>
            로그인
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileSubmenu;
