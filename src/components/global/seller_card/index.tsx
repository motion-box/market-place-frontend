import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "next-i18next";
import { SellerModel } from "../../../models/SellerModel";
import { FADE_BOTTOM_ANIMATION } from "../../../resources/constants/animations";
import {
  CloseIcon,
  OptionIcon,
  UnHeartOutlineIcon,
} from "../../../resources/icons/CommonIcons";
import Button from "../button";
import RatingStars from "../rating_stars";
import SellerCardStyle from "./style";

interface Iprops {
  data: SellerModel;
  type?: "favorite" | "blocked" | string;
  online: string;
  onCardClick: () => void;
}

const SellerCard = (props: Iprops) => {
  const { data, type, online, onCardClick } = props;
  const { t } = useTranslation();
  const [dialog, setDialog] = useState(false);

  const optionButtonClick = (optionType: "remove" | "dialog") => {
    if (optionType === "remove") {
      console.log("remove from favorite");
    } else {
      setDialog(true);
    }
  };

  const closeDialog = () => setDialog(false);

  return (
    <SellerCardStyle>
      <div className="image_cont">
        <Image src={data.photo} layout="fill" objectFit="cover" />
      </div>
      <div className="content_cont">
        <div className="name_cont">
          <span className="name">{`${data.first_name} ${data.last_name}`}</span>
          <RatingStars rating={data.rate} />
        </div>
        <span
          className={`online ${online === "online" ? "online_active" : ""}`}
        >{`${t("online")}${online !== "online" ? `: ${online}` : ""}`}</span>
      </div>
      {type ? (
        <>
          {type === "favorite" ? (
            <button
              className="option_button"
              onClick={() => optionButtonClick("remove")}
            >
              <UnHeartOutlineIcon />
            </button>
          ) : (
            <button
              className="option_button"
              onClick={() => optionButtonClick("dialog")}
            >
              <OptionIcon />
            </button>
          )}
        </>
      ) : null}
      <button className="card_button" onClick={onCardClick} />

      <AnimatePresence>
        {dialog && <Dialog seller_id={data.id} closeDialog={closeDialog} />}
      </AnimatePresence>
    </SellerCardStyle>
  );
};

interface DialogProps {
  seller_id: number;
  closeDialog: () => void;
}

const Dialog = (props: DialogProps) => {
  const { seller_id, closeDialog } = props;
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

  const unblockUser = () => {
    console.log("unblock seller:", seller_id);
  };

  return (
    <motion.div
      id="dialog_element"
      className="dialog_cont dialog_shadow"
      variants={FADE_BOTTOM_ANIMATION}
      initial="hidden"
      animate="active"
      exit="hidden"
    >
      <button className="close_button" onClick={closeDialog}>
        <CloseIcon />
      </button>
      <span className="title">{t("seller_actions")}</span>
      <Button
        text={t("unblock")}
        onClick={unblockUser}
        icon="UnlockIcon"
        options={{
          $width: "100%",
          $borderColor: "border_color",
          $textColor: "text_primary",
          $textAlign: "start",
          $hoverBackgroundColor: "bg_color",
          $hoverBorderColor: "bg_color",
        }}
      />
    </motion.div>
  );
};

export default SellerCard;
