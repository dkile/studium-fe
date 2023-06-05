import React from 'react';
import { useDispatch, useSelector, batch } from 'react-redux';
import { selectModalInfo, showModal, hideModal, clearModal } from '@/modules/modal';
import { modalType } from "@/types/modal";

export const useModal = (type: modalType) => {
    const dispatch = useDispatch();
    const modalInfo = useSelector(selectModalInfo);

    const currentModalData = modalInfo[type];

    const closeModal = () => {
        dispatch(hideModal(type));
    }

    const movePrevModal = () => {
        const prev = currentModalData.prevModal;
        if(prev !== '') {
            batch(() => {
                dispatch(clearModal(type));
                dispatch(hideModal(type));
                dispatch(showModal(prev));
            });
        }
    }

    const state = { currentModalData }
    const handler = {
        closeModal,
        movePrevModal,
    }
    return { ...state, ...handler }
}