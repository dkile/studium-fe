import { StudyApply } from "@/controllers/study/types";
import CollapseBoard from "../common/CollapseBoard";
import StudyTagInfo from "../study/StudyTagInfo";
import Icon from "../common/Icon";

type Props = {
  studyDetail: Omit<StudyApply, "questions">;
};

function StudyDetailCollapseBoard({ studyDetail }: Props) {
  return (
    <CollapseBoard>
      <CollapseBoard.Trigger
        as={
          <button type="button">
            <h2>{studyDetail.title}</h2>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z"
                />
              </svg>
            </div>
          </button>
        }
      />
      <CollapseBoard.Board>
        <div>
          <ul>
            <StudyTagInfo tags={studyDetail.tags} />
          </ul>
        </div>
        <div>
          <h3>스터디 리더</h3>
          <div>
            <div>
              <Icon name="avatar" />
              <div>
                <strong>{studyDetail.leader.nickname}</strong>
              </div>
            </div>
            <p>{studyDetail.leader.intro}</p>
          </div>
        </div>
        <div>
          <h3>진행 방식</h3>
          <div>
            <p>{studyDetail.progress}</p>
          </div>
        </div>
        <div>
          <h3>규칙</h3>
          <div>
            {studyDetail.rules.map((rule, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <p key={i}>{rule}</p>
            ))}
          </div>
        </div>
        <div>
          <h3>스터디 진행 기간</h3>
          <div>
            <p>{studyDetail.progressPeriod}</p>
          </div>
        </div>
        <div>
          <h3>스터디 모집 기간</h3>
          <div>
            <p>{studyDetail.recruitPeriod}</p>
          </div>
        </div>
        <div>
          <h3>모집 인원</h3>
          <div>
            <p>{studyDetail.recruitsNumber}</p>
          </div>
        </div>
        <div>
          <h3>진행 장소</h3>
          <div>
            <p>{studyDetail.location}</p>
          </div>
        </div>
      </CollapseBoard.Board>
    </CollapseBoard>
  );
}

export default StudyDetailCollapseBoard;
