import styles from "@/styles/pages/Study.module.sass";
import Image from "next/image";
import StudyInfoPanel from "./StudyInfoPanel";

type StudyLeaderInfoProps = {
  leader: {
    id: number;
    name: string;
    intro: string;
    thumnail: string;
    email: string;
  };
};

function StudyLeaderInfo({ leader }: StudyLeaderInfoProps) {
  return (
    <StudyInfoPanel title="스터디 리더">
      <div className={styles.studyLeaderDetail}>
        <Image
          width={48}
          height={48}
          src={leader.thumnail}
          alt="leader thumbnail"
        />
        <div>
          <h3 className={styles.studyLeaderName}>{leader.name}</h3>
          <small className={styles.studyLeaderEmail}>{leader.email}</small>
        </div>
      </div>
      <p className={styles.studyDetailDescription}>{leader.intro}</p>
    </StudyInfoPanel>
  );
}

export default StudyLeaderInfo;
