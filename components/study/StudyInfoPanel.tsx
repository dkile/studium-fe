import { WithChildren } from "@/utils/util-types";

import styles from "@/styles/pages/Study.module.sass";

type StudyInfoPanelProps = WithChildren<{
  title: string;
}>;

function StudyInfoPanel({ title, children }: StudyInfoPanelProps) {
  return (
    <div className={styles.studyDetail}>
      <h2 className={styles.studyDetailTitle}>{title}</h2>
      <div className={styles.studyDetailContent}>{children}</div>
    </div>
  );
}

export default StudyInfoPanel;
