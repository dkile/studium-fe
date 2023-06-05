import React from 'react';
import { useDispatch } from "react-redux";
import { showModal } from "@/modules/modal";

export const useModalTest = () => {
  const dispatch = useDispatch();
  const type = 'login';

  const clickBtn = () => {
    dispatch(showModal('login'))
  }

  return {clickBtn}
}