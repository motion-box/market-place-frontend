import React, { useCallback, useEffect, useState } from "react";
import PriceOfferDialogStyle from "./style";
import { motion, AnimatePresence } from "framer-motion";
import NiceModal from "@ebay/nice-modal-react";
import { useTranslation } from "next-i18next";
import { FADE_BOTTOM_ANIMATION } from "../../../resources/constants/animations";
import { CloseIcon } from "../../../resources/icons/CommonIcons";
import Button from "../../global/button";
import MessageModal, { MessageModalProps } from "../modals/message_modal";

interface Iprops {
  closeDialog: () => void;
}

const PriceOfferDialog = (props: Iprops) => {
  const { closeDialog } = props;
  const { t } = useTranslation();
  const [afterOpen, setAfterOpen] = useState(false);
  const [price, setPrice] = useState("");

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

  const confirm = () => {
    NiceModal.show(MessageModal, {
      icon: "CheckBigIcon",
      title: t("success"),
      description: t("successfuly_offered"),
      button: {
        name: t("ok"),
        route: "/",
      },
    } as MessageModalProps);
  };

  return (
    <PriceOfferDialogStyle
      className="dialog_shadow"
      id="dialog_element"
      variants={FADE_BOTTOM_ANIMATION}
      initial="hidden"
      animate="active"
      exit="hidden"
    >
      <button className="close_btn" onClick={closeDialog}>
        <CloseIcon color="text_primary" />
      </button>
      <span className="dialog_title">{t("chat_actions")}</span>
      <input
        defaultValue={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder={`12 500 000 ${t("uzs")}`}
      />
      <Button
        text={t("offer")}
        onClick={confirm}
        options={{
          $width: "100%",
          $backgroundColor: "static_red",
          $textColor: "static_white",
        }}
      />
    </PriceOfferDialogStyle>
  );
};

export default PriceOfferDialog;
