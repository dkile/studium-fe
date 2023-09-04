import Link from "next/link";

import styles from "@/styles/pages/Study.module.sass";
import { Tag } from "@/types/study";

type StudyTagListProps = {
  tags: Tag[];
};

function StudyTagList({ tags }: StudyTagListProps) {
  return (
    <ul className={styles.studyTagList}>
      {tags.map((tag, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={i} className={styles.studyTag}>
          <Link href={`/search?tag=${tag.name}`}>{tag.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default StudyTagList;
