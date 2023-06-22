import styles from "@/styles/components/RecruitItem.module.sass";

type RecruitItemMetricProps = {
  metric: string;
};

function RecruitItemMetric({ metric }: RecruitItemMetricProps) {
  return <small className={styles.studyItemMetric}>{metric}</small>;
}

export default RecruitItemMetric;
