import React, { useCallback, useEffect, useState } from "react";
import ChatHeaderDesktopStyle from "./style";
import moment from "moment";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import NiceModal from "@ebay/nice-modal-react";
import {
  CloseIcon,
  CommonIconsType,
  OptionIcon,
} from "../../../resources/icons/CommonIcons";
import { FADE_BOTTOM_ANIMATION } from "../../../resources/constants/animations";
import { SellerModel } from "../../../models/SellerModel";
import { ProductModel } from "../../../models/ProductModel";
import { useTranslation } from "next-i18next";
import Button from "../../global/button";
import QuestionModal, { QuestionModalProps } from "../modals/question_modal";
import InputModal, { InputModalProps } from "../modals/input_modal";

interface Iprops {
  companion: SellerModel;
  product: ProductModel;
}

const ChatHeaderDesktop = (props: Iprops) => {
  const { companion, product } = props;
  const { t } = useTranslation();
  const [dialog, setDialog] = useState(false);

  const closeDialog = () => {
    setDialog(false);
  };

  return (
    <ChatHeaderDesktopStyle>
      <div className="image_cont">
        <Image src={product.image_url} layout="fill" objectFit="cover" />
      </div>
      <div className="title_cont">
        <span className="title">{product.title}</span>
        <div className="price_cont">
          <span className="price">
            {`${product.price
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ${t(product.currency)}`}
          </span>
          {product.old_price ? (
            <span className="old_price">
              {`${product.old_price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ${t(product.currency)}`}
              <s />
            </span>
          ) : null}
        </div>
      </div>
      <div className="author_cont">
        <span className="author">{companion.first_name}</span>
        <span className="date">
          {moment(product.date).format("DD MMMM, HH:mm")}
        </span>
        <div className="options_cont">
          <button className="option_button" onClick={() => setDialog(!dialog)}>
            <OptionIcon color="text_primary" />
          </button>
          <AnimatePresence>
            {dialog && <OptionsDialog closeDialog={closeDialog} />}
          </AnimatePresence>
        </div>
      </div>
    </ChatHeaderDesktopStyle>
  );
};

interface OptionsDataModel {
  id: number;
  text: string;
  icon: CommonIconsType;
  onClick: () => void;
}

interface DialogProps {
  closeDialog: () => void;
}

const OptionsDialog = (props: DialogProps) => {
  const { closeDialog } = props;
  const { t } = useTranslation();
  const [afterOpen, setAfterOpen] = useState(false);

  const optionsData: OptionsDataModel[] = [
    {
      id: 0,
      text: t("delete_chat"),
      icon: "TrashIcon",
      onClick: () => showModal("delete"),
    },
    {
      id: 1,
      text: t("move_to_archive"),
      icon: "ArchiveIcon",
      onClick: () => showModal("archive"),
    },
    {
      id: 2,
      text: t("complain"),
      icon: "WarningTriangleIcon",
      onClick: () => showModal("complain"),
    },
    {
      id: 3,
      text: t("block_user"),
      icon: "LockIcon",
      onClick: () => showModal("block"),
    },
  ];

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

  const showModal = (type: string) => {
    closeDialog();
    switch (type) {
      case "delete":
        NiceModal.show(QuestionModal, {
          icon: "WarningBigIcon",
          title: t("delte_question_title"),
        } as QuestionModalProps);
        break;
      case "archive":
        NiceModal.show(QuestionModal, {
          icon: "WarningBigIcon",
          title: t("archive_question_title"),
        } as QuestionModalProps);
        break;
      case "complain":
        NiceModal.show(InputModal, {
          icon: "WarningBigIcon",
          title: t("complain_reason_title"),
          placeholder: t("complain_reason_description"),
          send_path: "/chat/complain",
          cancel: true,
        } as InputModalProps);
        break;
      case "block":
        NiceModal.show(QuestionModal, {
          icon: "WarningBigIcon",
          title: t("block_user_question_title"),
        } as QuestionModalProps);
        break;
      default:
        console.log("error");
        break;
    }
  };

  const mapOptions = optionsData.map((item) => (
    <Button
      key={item.id}
      text={item.text}
      icon={item.icon}
      onClick={item.onClick}
      options={{
        $width: "100%",
        $textAlign: "start",
        $textColor: item.id === 3 ? "static_red" : "text_primary",
        $borderColor: item.id === 3 ? "static_red" : "border_color",
        $iconColor: item.id === 3 ? "static_red" : "icon_color",
        $hoverTextColor: item.id === 3 ? "static_white" : "text_primary",
        $hoverIconColor: item.id === 3 ? "static_white" : "icon_color",
        $hoverBackgroundColor: item.id === 3 ? "static_red" : "bg_color",
        $hoverBorderColor: item.id === 3 ? "static_red" : "bg_color",
      }}
    />
  ));

  return (
    <motion.div
      className="dialog dialog_shadow"
      id="dialog_element"
      variants={FADE_BOTTOM_ANIMATION}
      initial="hidden"
      animate="active"
      exit="hidden"
    >
      <button className="close_button" onClick={closeDialog}>
        <CloseIcon color="text_primary" />
      </button>
      <span className="dialog_title">{t("chat_actions")}</span>
      <div className="options_cont">{mapOptions}</div>
    </motion.div>
  );
};
export default ChatHeaderDesktop;
