// import StudyTagList from "@/components/study/StudyTagList";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { ParsedUrlQuery } from "querystring";
import styles from "@/styles/pages/Study.module.sass";
import StudyLeaderInfo from "@/components/study/StudyLeaderInfo";
import StudyProgressInfo from "@/components/study/StudyProgressInfo";
import StudyRuleInfo from "@/components/study/StudyRuleInfo";
import StudyProgressPeriodInfo from "@/components/study/StudyProgressPeriodInfo";
import StudyRecruitPeriodInfo from "@/components/study/StudyRecruitPeriodInfo";
import StudyRecruitsNumberInfo from "@/components/study/StudyRecruitsNumberInfo";
import StudyLocationInfo from "@/components/study/StudyLocationInfo";
import StudyNotice from "@/components/study/StudyNotice";
import Tab from "@/components/common/tab/Tab";
import StudyLogList from "@/components/study/StudyJournalList";
import { StudyRunning } from "@/controllers/study/types";
import { getStudyRunning } from "@/controllers/study/controller";

export const getServerSideProps: GetServerSideProps<{
  data: StudyRunning;
}> = async ({ params }) => {
  const { id } = params as ParsedUrlQuery & { id: string };
  const studyId = Number(id);
  const [data] = await Promise.all([getStudyRunning(studyId)]);

  return { props: { data } };
};

function Page({
  data: study,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <section>
      <header className={styles.studyHeader}>
        <h1 className={styles.studyTitle}>{study.title}</h1>
      </header>
      <div>
        <Tab>
          <Tab.Menus className={styles.studyContentTabMenus}>
            <Tab.Menu index={0}>스터디 홈</Tab.Menu>
            <Tab.Menu index={1}>스터디 일지</Tab.Menu>
            <Tab.Menu index={2}>스터디원 관리</Tab.Menu>
          </Tab.Menus>
          <Tab.Panels className={styles.studyContentTabPanels}>
            <Tab.Panel index={0} className={styles.studyContentTabPanel}>
              <StudyNotice notice={study.notice.content} />
              <StudyLeaderInfo leader={study.leader} />
              <StudyProgressInfo progress={study.progress} />
              <StudyRuleInfo rules={study.rules} />
              <StudyProgressPeriodInfo progressPeriod={study.progressPeriod} />
              <StudyRecruitPeriodInfo recruitPeriod={study.recruitPeriod} />
              <StudyRecruitsNumberInfo recruitsNumber={study.recruitsNumber} />
              <StudyLocationInfo location={study.location} />
            </Tab.Panel>
            <Tab.Panel index={1} className={styles.studyContentTabPanel}>
              <div className={styles.studyJournalListPanel}>
                <header>
                  <button type="button">새 글</button>
                </header>
                <div>
                  <StudyLogList studyId={study.id} />
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel index={2}>
              <div />
            </Tab.Panel>
          </Tab.Panels>
        </Tab>
      </div>
    </section>
  );
}

export default Page;
