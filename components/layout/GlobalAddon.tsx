import styles from "@/styles/layout/Layout.module.sass";
import ProfileButton from "@/components/profile/ProfileButton";
import { useRouter } from "next/router";

function GlobalAddon() {
  const loggedIn = false;
  const router = useRouter();

  const handleClickLoginButton = () => {
    router.push("/login");
  };

  const handleClickJoinButton = () => {
    router.push("/join");
  };

  return (
    <div className={styles.mainAddons}>
      {loggedIn === false ? (
        <>
          <button
            type="button"
            onClick={handleClickLoginButton}
            className={styles.loginBtn}
          >
            로그인
          </button>
          <button
            type="button"
            onClick={handleClickJoinButton}
            className={styles.joinBtn}
          >
            회원가입
          </button>
        </>
      ) : (
        <ProfileButton />
      )}
    </div>
  );
}

export default GlobalAddon;
