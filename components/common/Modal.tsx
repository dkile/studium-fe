import styles from "@/styles/components/Modal.module.sass";
import { ModalType } from "@/types/modal";
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
            {"<-"}
          </button>
        )}
        {showCancelBtn && (
          <button
            type="button"
            className={styles.modalCancel}
            onClick={closeModal}
          >
            x
          </button>
        )}
        <div>{contents}</div>
      </div>
    </div>
  ) : null;
}

export default Modal;
