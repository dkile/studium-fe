import styles from "@/styles/pages/Study.module.sass";
import StudyInfoPanel from "./StudyInfoPanel";

type StudyRecruitsNumberInfoProps = {
  recruitsNumber: string;
};

function StudyRecruitsNumberInfo({
  recruitsNumber,
}: StudyRecruitsNumberInfoProps) {
  return (
    <StudyInfoPanel title="스터디 모집 인원">
      <p className={styles.studyDetailDescription}>{recruitsNumber}</p>
    </StudyInfoPanel>
  );
}

export default StudyRecruitsNumberInfo;
