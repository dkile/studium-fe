import { WithChildren } from "@/utils/util-types";
import styles from "@/styles/components/RecruitItem.module.sass";

function RecruitItemContainer({ children }: WithChildren<object>) {
  return <div className={styles.studyItem}>{children}</div>;
}

export default RecruitItemContainer;
