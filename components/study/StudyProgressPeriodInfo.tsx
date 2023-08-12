import styles from "@/styles/pages/Study.module.sass";
import StudyInfoPanel from "./StudyInfoPanel";

type StudyProgressPeriodInfoProps = {
  progressPeriod: string;
};

function StudyProgressPeriodInfo({
  progressPeriod,
}: StudyProgressPeriodInfoProps) {
  return (
    <StudyInfoPanel title="스터디 진행 기간">
      <p className={styles.studyDetailDescription}>{progressPeriod}</p>
    </StudyInfoPanel>
  );
}

export default StudyProgressPeriodInfo;
