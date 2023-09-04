import Link from "next/link";
import styles from "@/styles/components/StudyOverviewCard.module.sass";
import Card from "@/components/common/Card";
import { Tag } from "@/types/study";

type Props = {
  id: number;
  title: string;
  description: string;
  remainTime: string;
  tags: Tag[];
};

function StudyOverviewCard({
  id,
  title,
  description,
  remainTime,
  tags,
}: Props) {
  return (
    <Card className={styles.overviewContainer}>
      <Card.Addon>
        <small className={styles.overviewRemainTime}>{remainTime}</small>
      </Card.Addon>
      <Link href={`/study/${id}`}>
        <Card.HeadLine headingText={title} className={styles.overviewTitle} />
        <Card.SupportingText
          supportingText={description}
          className={styles.overviewDescription}
        />
      </Link>
      <Card.Addon>
        <ul className={styles.overviewTags}>
          {tags.map((tag, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={i} className={styles.overviewTag}>
              {tag.name}
            </li>
          ))}
        </ul>
      </Card.Addon>
    </Card>
  );
}

export default StudyOverviewCard;
