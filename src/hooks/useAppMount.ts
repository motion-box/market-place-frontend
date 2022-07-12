import { LocaleModel } from "./../models/GlobalModel";
import { ThemeTypes } from "../resources/constants/colors";
import { useAppDispatch } from "./../redux/store";
import { globalSliceActions } from "./../redux/reducers/GlobalSlice";
import { useEffect, useState } from "react";
import { NextRouter } from "next/router";
import moment from "moment";
import "moment/locale/ru";
import "moment/locale/uz-latn";
import "moment/locale/uz";

interface Iprops {
  router: NextRouter;
}
//TODO: Need documentation for hook
const useAppMount = ({ router }: Iprops) => {
  const [mounted, setMounted] = useState(false);
  const dispatch = useAppDispatch();
  const { setLocale, setTheme } = globalSliceActions;

  useEffect(() => {
    // Check saved language from localstorage
    const savedLocale = localStorage.getItem("locale");
    if (savedLocale && savedLocale !== router.locale) {
      router.push(
        { pathname: router.pathname, query: router.query },
        router.asPath,
        { locale: savedLocale }
      );
    } else if (!savedLocale) {
      localStorage.setItem("locale", "ru");
    }

    // Gets app current locale and set it to moment.js
    const locale =
      router.locale === "uz" ? "uz" : router.locale === "oz" ? "uz-latn" : "ru";
    moment.locale(locale);
    dispatch(setLocale(router.locale as LocaleModel));

    // get theme toggle button from DOM
    var toggle = document.getElementById("theme-toggle");
    // Gets app theme from localstorage
    // If it hasn't been set localy, it gets
    // from prefered theme
    const storedTheme =
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");

    if (storedTheme) {
      document.documentElement.setAttribute("data-theme", storedTheme);
    }
    dispatch(setTheme(storedTheme as ThemeTypes));

    // Listen all theme change buttons
    toggle
      ? (toggle.onclick = function () {
          const currentTheme =
            document.documentElement.getAttribute("data-theme");

          let targetTheme = "light";

          if (currentTheme === "light") {
            targetTheme = "dark";
          }

          document.documentElement.setAttribute("data-theme", targetTheme);
          localStorage.setItem("theme", targetTheme);
          dispatch(setTheme(targetTheme as ThemeTypes));
        })
      : null;

    // allow mounting after all steps done
    setMounted(true);
  }, []);

  return { mounted };
};

export default useAppMount;
