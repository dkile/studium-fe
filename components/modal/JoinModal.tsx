import { ModalType } from "@/types/modal";
import Modal from "../common/Modal";

function JoinModal() {
  const type: ModalType = "join";
  const contentsDom = <div />;
  return (
    <Modal
      type={type}
      showCancelBtn
      showPrevBtn={false}
      contents={contentsDom}
    />
  );
}

export default JoinModal;
