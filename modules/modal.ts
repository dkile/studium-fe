import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { modalType, modalState } from '@/types/modal';
import { RootState } from './store';

const initialState: modalState = {
    login: {
        isShow: false,
        prevModal: '',
    },
    join: {
        isShow: false,
        prevModal: '',
    },
    joinCompelete: {
        isShow: false,
        prevModal: '',
    },
}

export const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
        initModal(state, action: PayloadAction<modalType>) {
            const type = action.payload;
            let prev = state[type].prevModal;
            while (prev) {
                state[type] = initialState[type];
                prev = state[prev].prevModal
            }
        },
        clearModal(state, action: PayloadAction<modalType>) {
            const type = action.payload;
            state[type] = initialState[type];
        },
        showModal(state, action: PayloadAction<modalType>) {
            const type = action.payload;
            state[type].isShow = true;
        },
        hideModal(state, action: PayloadAction<modalType>) {
            const type = action.payload;
            state[type].isShow = false;
        },
        nextModal(state, action: PayloadAction<{current: modalType, next: modalType, data: object}>) {
            const {current, next, data} = action.payload;
            state[next].prevModal = current;
        },
	},
});

export const {
    initModal,
    clearModal,
    showModal,
    hideModal,
    nextModal,
} = modalSlice.actions;

export const selectModalInfo = (state: RootState) => state.modalInfo;

export default modalSlice.reducer;