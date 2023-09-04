import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import styles from "@/styles/pages/Study.module.sass";
import StudyInfo from "@/components/study/StudyInfo";
import { getStudyDetail } from "@/controllers/study/controller";
import { ParsedUrlQuery } from "querystring";
import Icon from "@/components/common/Icon";
import { StudyDetail } from "@/controllers/study/types";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps<{
  view: StudyDetail;
}> = async ({ params }) => {
  const { id } = params as ParsedUrlQuery & { id: string };
  const view = await getStudyDetail(Number(id));

  return { props: { view } };
};

function Study({
  view,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <section className={styles.container}>
      <StudyInfo info={view} />
      <div className={styles.studyDetailSidePanel}>
        <div className={styles.studyDetailSidePanelButtons}>
          <button type="button" className={styles.bookmarkBtn}>
            <Icon name="bookmark" />
          </button>
          <button type="button" className={styles.applyBtn}>
            <Link href={`/study/${view.id}/apply`}>지원하기</Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Study;
