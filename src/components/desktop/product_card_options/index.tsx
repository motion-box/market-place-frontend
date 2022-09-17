import React, { useCallback, useEffect, useState } from "react";
import ProductCardOptionsStyle from "./style";
import { motion, AnimatePresence, m } from "framer-motion";
import {
  CloseIcon,
  CommonIconsType,
  OptionIcon,
} from "../../../resources/icons/CommonIcons";
import { useTranslation } from "next-i18next";
import { FADE_BOTTOM_ANIMATION } from "../../../resources/constants/animations";
import Button from "../../global/button";
import { useRouter } from "next/router";
import NiceModal from "@ebay/nice-modal-react";
import NotifyModal, { NotifyModalProps } from "../modals/notify_modal";
import InputModal, { InputModalProps } from "../modals/input_modal";
import QuestionModal, { QuestionModalProps } from "../modals/question_modal";

interface ItemModel {
  id: number;
  text: string;
  onClick: () => void;
  type: "red" | "common";
  icon: CommonIconsType;
}

interface Iprops {
  type: "active" | "disabled";
  product_id: number;
}

const ProductCardOptions = (props: Iprops) => {
  const { type, product_id } = props;
  const { t } = useTranslation();
  const router = useRouter();
  const [isDialog, setDialog] = useState(false);

  const typeActive: ItemModel[] = [
    {
      id: 0,
      text: t("sell_faster"),
      icon: "RocketIcon",
      type: "red",
      onClick: () => checkBoost(),
    },
    {
      id: 1,
      text: t("watch_statistic"),
      icon: "ChartIcon",
      type: "common",
      onClick: () =>
        navigateTo(`/user/announcements/announcement/statistics/${product_id}`),
    },
    {
      id: 2,
      text: t("change"),
      icon: "PenIcon",
      type: "common",
      onClick: () =>
        navigateTo(`/user/announcements/announcement/edit/${product_id}`),
    },
    {
      id: 3,
      text: t("remove_from_sale"),
      icon: "ArchiveIcon",
      type: "common",
      onClick: () => openModal("remove"),
    },
    {
      id: 4,
      text: t("delete_announcemet"),
      icon: "TrashIcon",
      type: "common",
      onClick: () => openModal("delete"),
    },
  ];

  const typeDisabled: ItemModel[] = [
    {
      id: 0,
      text: t("move_for_sale"),
      icon: "ChevronOutlineIcon",
      type: "common",
      onClick: () => openModal("recover"),
    },
  ];

  const navigateTo = (route: string) => {
    router.push(route);
  };

  const openModal = (type: "remove" | "delete" | "recover") => {
    setDialog(false);
    if (type === "remove") {
      NiceModal.show(QuestionModal, {
        icon: "QuestionBigIcon",
        title: t("have_sold_question"),
      } as QuestionModalProps);
    } else if (type === "delete") {
      NiceModal.show(InputModal, {
        icon: "QuestionBigIcon",
        title: t("have_sold_question"),
        placeholder: t("remove_from_sale_question"),
        send_path: "remove_announcement",
        cancel: true,
      } as InputModalProps);
    } else if (type === "recover") {
      NiceModal.show(QuestionModal, {
        icon: "QuestionBigIcon",
        title: t("move_for_sale_question"),
      } as QuestionModalProps);
    }
  };

  const checkBoost = () => {
    const randomNum = Math.floor(Math.random() * 2);
    if (randomNum === 0) {
      setDialog(false);
      NiceModal.show(NotifyModal, {
        icon: "WarningBigIcon",
        title: t("has_turbo_sale"),
        subtitle: t("turbo_sale"),
        description: t("active_for", {
          number: `1 ${t("days")}, 12 ${t("hours")}`,
        }),
      } as NotifyModalProps);
    } else {
      navigateTo(`/boost_announcement/turbo?product_id=${product_id}`);
    }
  };

  return (
    <ProductCardOptionsStyle>
      <button
        onClick={() => setDialog(true)}
        aria-label="option_button"
        className="option_button filter_shadow"
      >
        <OptionIcon color="static_white" />
      </button>
      <AnimatePresence>
        {isDialog && (
          <OptionDialog
            isActive={isDialog}
            setActive={setDialog}
            data={type === "active" ? typeActive : typeDisabled}
          />
        )}
      </AnimatePresence>
    </ProductCardOptionsStyle>
  );
};

interface DialogProps {
  isActive: boolean;
  setActive: (state: boolean) => void;
  data: ItemModel[];
}

const OptionDialog = (props: DialogProps) => {
  const { isActive, setActive, data } = props;
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
    const el = document.querySelector(`#options_dialog`);
    if (e.target && el) {
      const outside = !el.contains(e.target as Node);
      outside && setActive(false);
    }
  }, []);

  const mapButtons = data.map((item) => (
    <Button
      key={item.id}
      text={item.text}
      onClick={item.onClick}
      icon={item.icon}
      options={{
        $width: "100%",
        $textAlign: "start",
        $iconColor: item.type === "red" ? "static_red" : "icon_color",
        $borderColor: item.type === "red" ? "static_red" : "border_color",
        $textColor: item.type === "red" ? "static_red" : "text_primary",
        $hoverBorderColor: item.type === "red" ? "static_red" : "bg_color",
        $hoverBackgroundColor: item.type === "red" ? "static_red" : "bg_color",
        $hoverTextColor: item.type === "red" ? "static_white" : "text_primary",
        $hoverIconColor: item.type === "red" ? "static_white" : "icon_color",
      }}
    />
  ));

  return (
    <motion.div
      id="options_dialog"
      className="dialog_cont dialog_shadow"
      variants={FADE_BOTTOM_ANIMATION}
      initial="hidden"
      animate="active"
      exit="hidden"
    >
      <button
        aria-label="close_button"
        className="close_btn"
        onClick={() => setActive(false)}
      >
        <CloseIcon color="text_primary" />
      </button>
      <span className="title">{t("announcement_actions")}</span>

      <div className="options_button_cont">{mapButtons}</div>
    </motion.div>
  );
};

export default ProductCardOptions;
