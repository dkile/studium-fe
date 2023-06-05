import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modal';

export const store = configureStore({
	reducer: {
		modalInfo: modalReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;