import styles from "@/styles/pages/Study.module.sass";
import StudyInfoPanel from "./StudyInfoPanel";

type StudyProgressInfoProps = {
  progress: string[];
};

function StudyProgressInfo({ progress }: StudyProgressInfoProps) {
  return (
    <StudyInfoPanel title="진행 방식">
      {progress.map((pgs, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <p key={i} className={styles.studyDetailDescription}>
          {pgs}
        </p>
      ))}
    </StudyInfoPanel>
  );
}

export default StudyProgressInfo;
