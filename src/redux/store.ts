import { globalSliceReducer } from "./reducers/GlobalSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import NiceModal from "@ebay/nice-modal-react";

const rootReducer = combineReducers({
  modals: NiceModal.reducer,
  globalSliceReducer,
});

export function makeStore() {
  return configureStore({
    reducer: rootReducer,
    devTools: false,
    enhancers: [devToolsEnhancer({})],
    middleware: (getDefaultMiddleweare) => getDefaultMiddleweare().concat(),
  });
}

const store = makeStore();

// types of redux selector
export type AppState = ReturnType<typeof store.getState>;
// type of redux dispatch
export type AppDispatch = typeof store.dispatch;

// typed dispatcher
export const useAppDispatch = () => useDispatch<AppDispatch>();
// typed app selector
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export default store;
