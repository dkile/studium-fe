import Link from "next/link";

import styles from "@/styles/pages/Study.module.sass";

type ApplyBtnProps = {
  studyId: number;
};

function ApplyBtn({ studyId }: ApplyBtnProps) {
  return (
    <button type="button" className={styles.applyBtn}>
      <Link href={`/study/${studyId}/apply`}>지원하기</Link>
    </button>
  );
}

export default ApplyBtn;
