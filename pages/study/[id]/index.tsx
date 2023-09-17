import { InferGetServerSidePropsType } from "next";

import styles from "@/styles/pages/Study.module.sass";
import StudyInfo from "@/components/study/StudyInfo";
import { getStudyDetail } from "@/controllers/study/controller";
import { ParsedUrlQuery } from "querystring";
import Icon from "@/components/common/Icon";
import { StudyDetail } from "@/controllers/study/types";
import Link from "next/link";
import appGetServerSideProps from "@/apis/appGetServerSideProps";

export const getServerSideProps = appGetServerSideProps<{
  data: StudyDetail;
}>(async ({ params }) => {
  const { id } = params as ParsedUrlQuery & { id: string };
  const data = await getStudyDetail(Number(id));

  return { props: { data } };
});

function Study({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <section className={styles.container}>
      <StudyInfo info={data} />
      <div className={styles.studyDetailSidePanel}>
        <div className={styles.studyDetailSidePanelButtons}>
          <button type="button" className={styles.bookmarkBtn}>
            <Icon name="bookmark" />
          </button>
          <button type="button" className={styles.applyBtn}>
            <Link href={`/study/${data.id}/apply`}>지원하기</Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Study;
