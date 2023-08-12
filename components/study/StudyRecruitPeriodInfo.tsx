import styles from "@/styles/pages/Study.module.sass";
import StudyInfoPanel from "./StudyInfoPanel";

type StudyRecruitPeriodInfoProps = {
  recruitPeriod: string;
};

function StudyRecruitPeriodInfo({
  recruitPeriod,
}: StudyRecruitPeriodInfoProps) {
  return (
    <StudyInfoPanel title="스터디 모집 기간">
      <p className={styles.studyDetailDescription}>{recruitPeriod}</p>
    </StudyInfoPanel>
  );
}

export default StudyRecruitPeriodInfo;
