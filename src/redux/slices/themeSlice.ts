/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useAppSelector } from "../hooks";
import type { RootState } from "../store";
import { defaultFontTemplates } from "constants/fontTemplates";
import { FontTheme } from "../../../src/@types/colorTheme";
interface CommonConfigurationState {
  fontTheme: FontTheme;
  themeDrawer: boolean;
  backgroundImageUrl: string;
}

const initialState: CommonConfigurationState = {
  fontTheme: defaultFontTemplates[0],
  themeDrawer: false,
  backgroundImageUrl: "",
};
export const themeSlice = createSlice({
  name: "commonConfiguration",
  initialState,
  reducers: {
    toggleThemeDrawer: (state) => {
      state.themeDrawer = !state.themeDrawer;
    },
  },
});

export const useThemeDrawer = (): any => {
  return useAppSelector(
    (state: RootState) => state.commonConfiguration.themeDrawer
  );
};

export const { toggleThemeDrawer } = themeSlice.actions;
export default themeSlice.reducer;
