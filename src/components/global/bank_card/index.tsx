import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { motion, AnimatePresence } from "framer-motion";
import {
  CloseIcon,
  HumoFullIcon,
  OptionIcon,
  UzcardIcon,
} from "../../../resources/icons/CommonIcons";
import BankCardStyle from "./style";
import { FADE_BOTTOM_ANIMATION } from "../../../resources/constants/animations";
import Button from "../button";
import { BankCardModel } from "../../../models/BankCardModel";

interface Iprops extends BankCardModel {}

const BankCard = (props: Iprops) => {
  const { id, main, type, number } = props;
  const { t } = useTranslation();
  const [dialog, setDialog] = useState(false);

  const closeDialog = () => {
    setDialog(false);
  };

  return (
    <BankCardStyle type={type}>
      <div className="top_container">
        {type === "UZCARD" ? (
          <UzcardIcon color="static_white50" />
        ) : (
          <HumoFullIcon color="static_white50" />
        )}
        <button onClick={() => setDialog(true)}>
          <OptionIcon color="static_white" />
        </button>
      </div>
      <div className="bottom_container">
        {main && <div className="main">{t("main_card")}</div>}
        <span className="num">{number}</span>
      </div>
      <AnimatePresence>
        {dialog && <Dialog card_id={id} closeDialog={closeDialog} />}
      </AnimatePresence>
    </BankCardStyle>
  );
};

interface DialogProps {
  card_id: number;
  closeDialog: () => void;
}
const Dialog = (props: DialogProps) => {
  const { card_id, closeDialog } = props;
  const { t } = useTranslation();
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
      outside && closeDialog();
    }
  }, []);

  return (
    <motion.div
      variants={FADE_BOTTOM_ANIMATION}
      initial="hidden"
      animate="active"
      exit="hidden"
      className="dialog_cont dialog_shadow"
      id="dialog_element"
    >
      <button
        className="close_btn"
        aria-label="dialog close"
        onClick={closeDialog}
      >
        <CloseIcon color="static_black" />
      </button>
      <span className="title">{t("card_actions")}</span>
      <div className="buttons_block">
        <Button
          text={t("make_main_card")}
          icon="CheckOutlineIcon"
          onClick={() => console.log("make main")}
          options={{
            $width: "100%",
            $textAlign: "start",
            $borderColor: "border_color",
            $hoverBackgroundColor: "bg_color",
            $hoverBorderColor: "bg_color",
          }}
        />
        <Button
          text={t("delete_card")}
          icon="TrashIcon"
          onClick={() => console.log("make main")}
          options={{
            $width: "100%",
            $textAlign: "start",
            $borderColor: "border_color",
            $hoverBackgroundColor: "bg_color",
            $hoverBorderColor: "bg_color",
          }}
        />
      </div>
    </motion.div>
  );
};

export default BankCard;
