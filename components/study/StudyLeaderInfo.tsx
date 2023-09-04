import styles from "@/styles/pages/Study.module.sass";
import Image from "next/image";
import StudyInfoPanel from "./StudyInfoPanel";

type StudyLeaderInfoProps = {
  leader: {
    id: number;
    nickname: string;
    intro: string;
    profileUrl: string;
  };
};

function StudyLeaderInfo({ leader }: StudyLeaderInfoProps) {
  return (
    <StudyInfoPanel title="스터디 리더">
      <div className={styles.studyLeaderDetail}>
        <Image
          width={48}
          height={48}
          src={leader.profileUrl}
          alt="leader thumbnail"
        />
        <div>
          <h3 className={styles.studyLeaderName}>{leader.nickname}</h3>
        </div>
      </div>
      <p className={styles.studyDetailDescription}>{leader.intro}</p>
    </StudyInfoPanel>
  );
}

export default StudyLeaderInfo;
