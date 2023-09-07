export type ModalType = "login" | "join" | "joinComplete";

export type EachModalState = {
  isShow: boolean;
  prevModal: ModalType | "";
};

export type ModalState = {
  [key in ModalType]: EachModalState;
};

export type RootState = {
  modalInfo: ModalState;
};
