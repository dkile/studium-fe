import { StudyDetail } from "@/types/study";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import styles from "@/styles/pages/Study.module.sass";
import StudyInfo from "@/components/study/StudyInfo";
import ApplyBtn from "@/components/study/ApplyBtn";
import BookmarkBtn from "@/components/study/BookmarkBtn";
import getStudyDetail from "@/factories/studyFactory";
import { ParsedUrlQuery } from "querystring";

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
      <div className={styles.sidePanel}>
        <div className={styles.buttonContainer}>
          <BookmarkBtn />
          <ApplyBtn studyId={view.id} />
        </div>
      </div>
    </section>
  );
}

export default Study;
