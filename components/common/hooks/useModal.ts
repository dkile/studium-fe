import { useDispatch, useSelector, batch } from "react-redux";
import {
  selectModalInfo,
  showModal,
  hideModal,
  clearModal,
} from "@/modules/modal";
import { ModalType } from "@/types/modal";

const useModal = (type: ModalType) => {
  const dispatch = useDispatch();
  const modalInfo = useSelector(selectModalInfo);

  const currentModalData = modalInfo[type];

  const closeModal = () => {
    dispatch(hideModal(type));
  };

  const movePrevModal = () => {
    const prev = currentModalData.prevModal;
    if (prev !== "") {
      batch(() => {
        dispatch(clearModal(type));
        dispatch(hideModal(type));
        dispatch(showModal(prev));
      });
    }
  };

  const state = { currentModalData };
  const handler = {
    closeModal,
    movePrevModal,
  };
  return { ...state, ...handler };
};

export default useModal;
