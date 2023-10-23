import styles from "@/styles/layout/Layout.module.sass";
import ProfileButton from "@/components/profile/ProfileButton";
import { useSelector, useDispatch } from "react-redux";
import { selectAuthInfo } from "@/modules/auth";
import { showModal } from "@/modules/modal";

function GlobalAddon() {
  const dispatch = useDispatch();
  const loginInfo = useSelector(selectAuthInfo);

  return (
    <div className={styles.mainAddons}>
      {loginInfo.islogin === false ? (
        <button
          type="button"
          onClick={() => dispatch(showModal("login"))}
          className={styles.loginBtn}
        >
          로그인
        </button>
      ) : (
        <ProfileButton />
      )}
    </div>
  );
}

export default GlobalAddon;
