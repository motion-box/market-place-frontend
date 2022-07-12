import LanuagePickerStyle from "./style";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import HeaderDialogsDesktop from "../header_dialogs_desktop";
import { LanguageBigIcon } from "../../../resources/icons/BigIcons";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";

interface Iprops {}

const LanguagePickerDesktop = (props: Iprops) => {
  const { t } = useTranslation("common");
  const { locale, pathname, asPath } = useRouter();
  const [isDialog, setDialog] = useState(false);

  const changeLocale = (lang: "ru" | "uz" | "oz") => {
    if (lang === locale) return;
    localStorage.setItem("locale", lang);
  };

  return (
    <LanuagePickerStyle>
      <span className="title" onClick={() => setDialog(!isDialog)}>
        {locale === "oz" ? "O'z" : locale === "uz" ? "Уз" : "Ру"}
      </span>
      <AnimatePresence>
        {isDialog ? (
          <HeaderDialogsDesktop isDialog={isDialog} setDialog={setDialog}>
            <div className="dialog_wrapper">
              <span className="dialog_title">{t("language")}</span>
              <div className="item_cont">
                <Link href={asPath} as={asPath} locale={"ru"}>
                  <a className="item" onClick={() => changeLocale("ru")}>
                    <LanguageBigIcon width="24" height="24" />
                    <span>Русский</span>
                  </a>
                </Link>
                <Link href={asPath} as={asPath} locale={"uz"}>
                  <a className="item" onClick={() => changeLocale("uz")}>
                    <LanguageBigIcon width="24" height="24" />
                    <span>Узбекча</span>
                  </a>
                </Link>
                <Link href={asPath} as={asPath} locale={"oz"}>
                  <a className="item" onClick={() => changeLocale("oz")}>
                    <LanguageBigIcon width="24" height="24" />
                    <span>O´zbekcha</span>
                  </a>
                </Link>
              </div>
            </div>
          </HeaderDialogsDesktop>
        ) : null}
      </AnimatePresence>
    </LanuagePickerStyle>
  );
};

export default LanguagePickerDesktop;
