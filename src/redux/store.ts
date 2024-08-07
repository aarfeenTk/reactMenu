import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import contactsSlice from './slices/contactsSlice';
import themeSlice from './slices/themeSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    commonConfiguration: themeSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
