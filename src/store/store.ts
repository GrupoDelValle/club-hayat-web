
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { navBarSlice } from './navbar/navBatSlice';
import { mailSlice } from './mail';

export const store = configureStore({
  reducer: {
    nabBar: navBarSlice.reducer,
    mail: mailSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();