import styles from "@/styles/pages/Study.module.sass";

export type StudyTitleInfoProps = {
  title: string;
};

function StudyTitleInfo({ title }: StudyTitleInfoProps) {
  return <h1 className={styles.studyTitle}>{title}</h1>;
}

export default StudyTitleInfo;
