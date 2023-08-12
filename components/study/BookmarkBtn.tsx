import Image from "next/image";

import styles from "@/styles/pages/Study.module.sass";

function BookmarkBtn() {
  return (
    <button type="button" className={styles.bookmarkBtn}>
      <Image
        width={27}
        height={24}
        src="https://studium-fe.s3.ap-northeast-2.amazonaws.com/public/icon/%F0%9F%A6%86+icon+_bookmark+book_.svg"
        alt="bookmark_icon"
      />
    </button>
  );
}

export default BookmarkBtn;
