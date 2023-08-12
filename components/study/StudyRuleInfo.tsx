import styles from "@/styles/pages/Study.module.sass";
import StudyInfoPanel from "./StudyInfoPanel";

type StudyRuleInfoProps = {
  rules: string[];
};

function StudyRuleInfo({ rules }: StudyRuleInfoProps) {
  return (
    <StudyInfoPanel title="규칙">
      {rules.map((rule, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <p key={i} className={styles.studyDetailDescription}>
          {rule}
        </p>
      ))}
    </StudyInfoPanel>
  );
}

export default StudyRuleInfo;
