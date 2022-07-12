import { NextRouter } from "next/router";
import { ThemeTypes } from "../resources/constants/colors";
import { useAppDispatch, useAppSelector } from "./../redux/store";
import { globalSliceActions } from "../redux/reducers/GlobalSlice";

const useChangeTheme = () => {
  const { theme } = useAppSelector((state) => state.globalSliceReducer);
  const dispatch = useAppDispatch();
  const { setTheme } = globalSliceActions;

  const chnageTheme = () => {
    const currentTheme =
      document.documentElement.getAttribute("data-theme") || theme;

    let targetTheme = "light";

    if (currentTheme === "light") {
      targetTheme = "dark";
    }

    document.documentElement.setAttribute("data-theme", targetTheme);
    localStorage.setItem("theme", targetTheme);
    dispatch(setTheme(targetTheme as ThemeTypes));
  };

  return chnageTheme;
};

export default useChangeTheme;
