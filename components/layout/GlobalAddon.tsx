import styles from "@/styles/layout/Layout.module.sass";
import { useState } from "react";
import ProfileButton from "@/components/profile/ProfileButton";
import ProfileSubmenu from "@/components/profile/ProfileSubmenu";

function GlobalAddon() {
  const [popped, setPopped] = useState(false);

  const onClickProfileButton = () => {
    setPopped(prev => !prev);
  };

  return (
    <div className={styles.mainAddons}>
      <ProfileButton onClick={onClickProfileButton} />
      {popped ? <ProfileSubmenu /> : null}
    </div>
  );
}

export default GlobalAddon;
