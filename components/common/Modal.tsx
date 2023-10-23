import styles from "@/styles/components/Modal.module.sass";
import { ModalType } from "@/types/modal";
import Image from "next/image";
import useModal from "./hooks/useModal";

type ModalInfo = {
  type: ModalType;
  showPrevBtn: boolean;
  showCancelBtn: boolean;
  contents: React.ReactNode;
};

function Modal({ type, showPrevBtn, showCancelBtn, contents }: ModalInfo) {
  const { currentModalData, closeModal, movePrevModal } = useModal(type);
  return currentModalData.isShow ? (
    <div
      role="presentation"
      className={styles.modalBackground}
      onClick={closeModal}
    >
      <div
        role="presentation"
        className={styles.modalArea}
        onClick={e => {
          e.stopPropagation();
        }}
      >
        {showPrevBtn && currentModalData.prevModal && (
          <button
            type="button"
            className={styles.modalPrev}
            onClick={movePrevModal}
          >
            <Image
              src="https://studium-fe.s3.ap-northeast-2.amazonaws.com/public/icon/prev.svg"
              width={14}
              height={14}
              alt="<-"
            />
          </button>
        )}
        {showCancelBtn && (
          <button
            type="button"
            className={styles.modalCancel}
            onClick={closeModal}
          >
            <Image
              src="https://studium-fe.s3.ap-northeast-2.amazonaws.com/public/icon/cancel.svg"
              width={14}
              height={14}
              alt="X"
            />
          </button>
        )}
        <div>{contents}</div>
      </div>
    </div>
  ) : null;
}

export default Modal;
