import { ThemeTypes } from "./../../resources/constants/colors";
import { GlobalModel, LocaleModel } from "./../../models/GlobalModel";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: GlobalModel = {
  locale: "ru",
  theme: "light",
  token: "",
  userData: undefined,
};

const globalSlice = createSlice({
  name: "global_slice",
  initialState,
  reducers: {
    setLocale(state, action: PayloadAction<LocaleModel>) {
      state.locale = action.payload;
    },
    setTheme(state, action: PayloadAction<ThemeTypes>) {
      state.theme = action.payload;
    },
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    setUserData(state, action: PayloadAction<undefined>) {
      state.userData = action.payload;
    },
  },
});

export const globalSliceReducer = globalSlice.reducer;
export const globalSliceActions = globalSlice.actions;
