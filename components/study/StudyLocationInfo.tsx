import styles from "@/styles/pages/Study.module.sass";
import StudyInfoPanel from "./StudyInfoPanel";

type StudyLocationInfoProps = {
  location: string;
};

function StudyLocationInfo({ location }: StudyLocationInfoProps) {
  return (
    <StudyInfoPanel title="스터디 장소">
      <p className={styles.studyDetailDescription}>{location}</p>
    </StudyInfoPanel>
  );
}

export default StudyLocationInfo;
