import styles from "@/styles/components/ProfileBtn.module.sass";
import { ButtonHTMLAttributes } from "react";
import Button from "../common/Button";
import Icon from "../common/Icon";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

function ProfileButton({ ...props }: Props) {
  return (
    <Button
      type="button"
      aria-label="profile dropdown button"
      className={styles.profileBtn}
      {...props}
    >
      <Icon name="avatar" className={styles.avatarIcon} />
      <Icon name="collapse-open" className={styles.collapseOpenIcon} />
    </Button>
  );
}

export default ProfileButton;
