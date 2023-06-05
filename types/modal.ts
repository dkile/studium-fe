export type modalType = 'login' | 'join' | 'joinCompelete';
export type eachModalState = {
    isShow: boolean;
    prevModal: modalType | '';
}
export type modalState = {
    [key in modalType] : eachModalState
}