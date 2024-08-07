/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { useAppSelector } from '../hooks';
import type { RootState } from '../store';

export type ContactsState = {
  isMobileView: boolean;
};

const initialState: ContactsState = {
  isMobileView: false,
};
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setMobileView: (state, action: PayloadAction<{ payload: boolean }>) => {
      state.isMobileView = action.payload.payload;
    },
  },
});

export const useIsMobileView = (): boolean => {
  return useAppSelector((state: RootState) => state.contacts.isMobileView);
};

export const { setMobileView } = contactsSlice.actions;
export default contactsSlice.reducer;
