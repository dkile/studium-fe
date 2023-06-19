import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalType, ModalState, RootState } from "@/types/modal";

const initialState: ModalState = {
  login: {
    isShow: false,
    prevModal: "",
  },
  join: {
    isShow: false,
    prevModal: "",
  },
  joinCompelete: {
    isShow: false,
    prevModal: "",
  },
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    initModal(state, action: PayloadAction<ModalType>) {
      const type = action.payload;
      let prev = state[type].prevModal;
      while (prev) {
        state[type] = initialState[type];
        prev = state[prev].prevModal;
      }
    },
    clearModal(state, action: PayloadAction<ModalType>) {
      const type = action.payload;
      state[type] = initialState[type];
    },
    showModal(state, action: PayloadAction<ModalType>) {
      const type = action.payload;
      state[type].isShow = true;
    },
    hideModal(state, action: PayloadAction<ModalType>) {
      const type = action.payload;
      state[type].isShow = false;
    },
    nextModal(
      state,
      action: PayloadAction<{
        current: ModalType;
        next: ModalType;
        data: object;
      }>,
    ) {
      const { current, next } = action.payload;
      state[next].prevModal = current;
    },
  },
});

export const { initModal, clearModal, showModal, hideModal, nextModal } =
  modalSlice.actions;

export const selectModalInfo = (state: RootState) => state.modalInfo;

export default modalSlice.reducer;
