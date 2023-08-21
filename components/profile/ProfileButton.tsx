import styles from "@/styles/components/ProfileBtn.module.sass";
import Button from "../common/Button";
import Icon from "../common/Icon";

type Props = {
  onClick: () => void;
};

function ProfileButton({ onClick }: Props) {
  return (
    <div className={styles.profileContainer}>
      <Button
        type="button"
        onClick={onClick}
        aria-label="profile dropdown button"
        className={styles.profileBtn}
      >
        <Icon name="avatar" className={styles.avatarIcon} />
        <Icon name="collapse-open" className={styles.collapseOpenIcon} />
      </Button>
    </div>
  );
}

export default ProfileButton;
