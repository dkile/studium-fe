import Link from "next/link";

import styles from "@/styles/pages/Study.module.sass";

type StudyTagListProps = {
  tags: { id: number; name: string }[];
};

function StudyTagList({ tags }: StudyTagListProps) {
  return (
    <ul className={styles.studyTagList}>
      {tags.map(tag => (
        <li key={tag.id} className={styles.studyTag}>
          <Link href={`/tag/${tag.id}`}>{tag.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default StudyTagList;
