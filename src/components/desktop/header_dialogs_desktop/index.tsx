import React, { useCallback, useEffect, useState } from "react";
import HeaderDialogsDesktopStyle from "./style";
import { FADE_BOTTOM_ANIMATION } from "../../../resources/constants/animations";
import { CloseIcon } from "../../../resources/icons/CommonIcons";

interface Iprops {
  isDialog: boolean;
  setDialog: (state: boolean) => void;
  children: React.ReactChild | React.ReactNode;
}

const HeaderDialogsDesktop: React.FC<Iprops> = (props) => {
  const { isDialog, setDialog, children } = props;
  const [afterOpen, setAfterOpen] = useState(false);

  useEffect(() => {
    if (!afterOpen) return setAfterOpen(true);
    document.addEventListener("click", listenButtonClick, false);

    return () =>
      document.removeEventListener("click", listenButtonClick, false);
  }, [afterOpen]);

  // will close dropdown if clicked outside container
  const listenButtonClick = useCallback((e: MouseEvent) => {
    const el = document.querySelector(`#dialog_element`);
    if (e.target && el) {
      const outside = !el.contains(e.target as Node);
      outside && setDialog(false);
    }
  }, []);

  return (
    <HeaderDialogsDesktopStyle
      id="dialog_element"
      className="dialog_shadow"
      variants={FADE_BOTTOM_ANIMATION}
      initial="hidden"
      animate="active"
      exit="hidden"
    >
      <button className="close_btn" onClick={() => setDialog(false)}>
        <CloseIcon color="text_primary" />
      </button>
      {children}
    </HeaderDialogsDesktopStyle>
  );
};

export default HeaderDialogsDesktop;
