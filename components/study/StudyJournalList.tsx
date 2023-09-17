import styles from "@/styles/pages/Study.module.sass";

export type StudyJournalListProps = {
  studyId: number;
};

function StudyJournalList({ studyId }: StudyJournalListProps) {
  const studyJournalList = [
    {
      id: studyId,
      updatedAt: "string",
      title: "string",
      content: "string",
      author: "string",
    },
  ];
  return (
    <ul className={styles.studyJournalList}>
      {studyJournalList.map(journal => (
        <li className={styles.studyJournalItem}>
          <header>
            <h3>{journal.title}</h3>
            <small className={styles.studyJournalItemAuthor}>
              {journal.author}
            </small>
            <small className={styles.studyJournalItemDate}>
              {journal.updatedAt}
            </small>
          </header>
          <div>
            <p>{journal.content}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default StudyJournalList;
