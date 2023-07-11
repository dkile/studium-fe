import Modal from "@/components/common/Modal";
import useModalTest from "../components/common/hooks/useModalTest";

export default function ModalTest() {
  const { clickBtn } = useModalTest();
  return (
    <>
      <button type="button" onClick={clickBtn}>
        {" "}
        show modal{" "}
      </button>
      <Modal
        type="login"
        showCancelBtn
        showPrevBtn
        contents={<div>contents</div>}
      />
    </>
  );
}
