import Link from "next/link";

import styles from "@/styles/components/RecruitItem.module.sass";

type RecruitItemHeaderProps = {
  id: number;
  title: string;
};

function RecruitItemHeader({ id, title }: RecruitItemHeaderProps) {
  return (
    <div className={styles.studyItemHeader}>
      <Link href={`/study/${id}`}>
        <h3>{title}</h3>
      </Link>
    </div>
  );
}

export default RecruitItemHeader;
