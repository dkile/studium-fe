import styles from "@/styles/components/RecruitItem.module.sass";
import Link from "next/link";

type RecruitItemDescriptionProps = {
  id: number;
  description: string;
};

function RecruitItemDescription({
  id,
  description,
}: RecruitItemDescriptionProps) {
  return (
    <Link href={`/study/${id}`}>
      <p className={styles.studyItemDescription}>{description}</p>
    </Link>
  );
}

export default RecruitItemDescription;
