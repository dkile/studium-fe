import Head from "next/head";
import Modal from "@/components/common/Modal";
import { useModalTest } from "./useModalTest";

export default function ModalTest() {
  const {clickBtn} = useModalTest();
  return (
    <>
      <button onClick={clickBtn}> show modal </button>
      <Modal type="login" showCancelBtn showPrevBtn contents={<div>contents</div>} />
    </>
  );
}
