import { hideModal } from "@/modules/modal";
import { ModalType } from "@/types/modal";
import { useDispatch } from "react-redux";
import Modal from "../common/Modal";

function JoinCompleteModal() {
  const type: ModalType = "joinComplete";
  const dispatch = useDispatch();
  const contentsDom = (
    <div>
      <p>Studium의 한 페이지가 된 것을 환영합니다!</p>
      <button type="button" onClick={() => dispatch(hideModal(type))}>
        스터디 둘러보기
      </button>
    </div>
  );
  return (
    <Modal
      type={type}
      showCancelBtn={false}
      showPrevBtn={false}
      contents={contentsDom}
    />
  );
}

export default JoinCompleteModal;
