import Image from "next/image";

import styles from "@/styles/components/ProfileBtn.module.sass";

type ProfileBtnProps = {
  handleClick: () => void;
};

function ProfileBtn({ handleClick }: ProfileBtnProps) {
  return (
    <div className={styles.profileContainer}>
      <button
        type="button"
        onClick={handleClick}
        aria-label="profile dropdown button"
        className={styles.profileBtn}
      >
        <Image
          src="https://studium-fe.s3.ap-northeast-2.amazonaws.com/public/icon/avatar.svg"
          alt="profile_icon"
          width={36}
          height={36}
          aria-hidden
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z"
          />
        </svg>
      </button>
    </div>
  );
}

export default ProfileBtn;
