import styles from "@/styles/pages/Study.module.sass";
import StudyInfoPanel from "./StudyInfoPanel";

type StudyProgressInfoProps = {
  progress: string;
};

function StudyProgressInfo({ progress }: StudyProgressInfoProps) {
  return (
    <StudyInfoPanel title="진행 방식">
      <p className={styles.studyDetailDescription}>{progress}</p>
    </StudyInfoPanel>
  );
}

export default StudyProgressInfo;
