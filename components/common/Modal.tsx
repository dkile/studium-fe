import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/Modal.module.sass";
import { modalType } from "@/types/modal";
import { useModal } from "./hooks/useModal";

type ModalInfo = {
  type: modalType;
  showPrevBtn: boolean;
  showCancelBtn: boolean;
  contents: React.ReactNode;
}

function Modal({ type, showPrevBtn, showCancelBtn, contents }: ModalInfo) {
  const { currentModalData, closeModal, movePrevModal } = useModal(type);
  return (
    <>
      {currentModalData.isShow && (
        <div className={styles.modal_background} onClick={closeModal}>
          <div
            className={styles.modal_area}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {showPrevBtn && currentModalData.prevModal && (
              <button className={styles.modal_prev} onClick={movePrevModal}>
                {"<-"}
              </button>
            )}
            {showCancelBtn && <button className={styles.modal_cancel} onClick={closeModal}>
              x
            </button>}
            <div>{contents}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
