import styles from "@/styles/pages/Study.module.sass";
import { StudyApply } from "@/controllers/study/types";
import CollapseBoard from "../common/CollapseBoard";
import StudyTagInfo from "../study/StudyTagInfo";
import Icon from "../common/Icon";
import StudyTitleInfo from "../study/StudyTitleInfo";
import StudyLeaderInfo from "../study/StudyLeaderInfo";
import StudyProgressInfo from "../study/StudyProgressInfo";
import StudyRuleInfo from "../study/StudyRuleInfo";
import StudyProgressPeriodInfo from "../study/StudyProgressPeriodInfo";
import StudyRecruitPeriodInfo from "../study/StudyRecruitPeriodInfo";
import StudyRecruitsNumberInfo from "../study/StudyRecruitsNumberInfo";
import StudyLocationInfo from "../study/StudyLocationInfo";

type Props = {
  studyDetail: Omit<StudyApply, "questions">;
};

function StudyDetailCollapseBoard({ studyDetail }: Props) {
  return (
    <CollapseBoard>
      <CollapseBoard.Trigger
        as={
          <button type="button" className={styles.studyDetailCollapseBtn}>
            <div>
              <StudyTitleInfo title={studyDetail.title} />
              <Icon name="collapse-open" className={styles.collapseOpenIcon} />
            </div>
            <StudyTagInfo tags={studyDetail.tags} />
          </button>
        }
      />
      <CollapseBoard.Board>
        <div className={styles.studyContent}>
          <StudyLeaderInfo leader={studyDetail.leader} />
          <StudyProgressInfo progress={studyDetail.progress} />
          <StudyRuleInfo rules={studyDetail.rules} />
          <StudyProgressPeriodInfo
            progressPeriod={studyDetail.progressPeriod}
          />
          <StudyRecruitPeriodInfo recruitPeriod={studyDetail.recruitPeriod} />
          <StudyRecruitsNumberInfo
            recruitsNumber={studyDetail.recruitsNumber}
          />
          <StudyLocationInfo location={studyDetail.location} />
        </div>
      </CollapseBoard.Board>
    </CollapseBoard>
  );
}

export default StudyDetailCollapseBoard;
