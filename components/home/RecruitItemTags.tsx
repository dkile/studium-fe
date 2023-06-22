import Link from "next/link";

import styles from "@/styles/components/RecruitItem.module.sass";
import { Tag } from "@/types/home";

type RecruitItemTagsProps = {
  tags: Tag[];
};

function RecruitItemTags({ tags }: RecruitItemTagsProps) {
  return (
    <div className={styles.studyItemTagList}>
      {tags.map(({ id, name }) => (
        <div key={id} className={styles.studyItemTag}>
          <Link href={`/tag/${id}`}>{name}</Link>
        </div>
      ))}
    </div>
  );
}

export default RecruitItemTags;
