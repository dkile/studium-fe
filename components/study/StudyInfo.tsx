import { StudyDetail } from "@/types/study";

import styles from "@/styles/pages/Study.module.sass";
import StudyTagList from "./StudyTagList";
import StudyLeaderInfo from "./StudyLeaderInfo";
import StudyProgressInfo from "./StudyProgressInfo";
import StudyRuleInfo from "./StudyRuleInfo";
import StudyProgressPeriodInfo from "./StudyProgressPeriodInfo";
import StudyRecruitPeriodInfo from "./StudyRecruitPeriodInfo";
import StudyRecruitsNumberInfo from "./StudyRecruitsNumberInfo";
import StudyLocationInfo from "./StudyLocationInfo";

type StudyInfoProps = {
  info: StudyDetail;
};

function StudyInfo({ info }: StudyInfoProps) {
  const {
    title,
    leader,
    tags,
    progress,
    rules,
    progressPeriod,
    recruitPeriod,
    recruitsNumber,
    location,
  } = info;
  return (
    <div className={styles.studyContainer}>
      <header className={styles.studyHeader}>
        <h1 className={styles.studyTitle}>{title}</h1>
        <div className={styles.studyOutline}>
          <StudyTagList tags={tags} />
        </div>
      </header>
      <div className={styles.studyContent}>
        <StudyLeaderInfo leader={leader} />
        <StudyProgressInfo progress={progress} />
        <StudyRuleInfo rules={rules} />
        <StudyProgressPeriodInfo progressPeriod={progressPeriod} />
        <StudyRecruitPeriodInfo recruitPeriod={recruitPeriod} />
        <StudyRecruitsNumberInfo recruitsNumber={recruitsNumber} />
        <StudyLocationInfo location={location} />
      </div>
    </div>
  );
}

export default StudyInfo;
