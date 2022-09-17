import React from "react";
import { ColorsPaletTypes } from "../../../../resources/constants/colors";
import MButtonsModal from "../m_buttons_modal";
import * as AllIcons from "../../../../resources/icons/CommonIcons";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import InputModal, {
  InputModalProps,
} from "../../../desktop/modals/input_modal";
import QuestionModal, {
  QuestionModalProps,
} from "../../../desktop/modals/question_modal";
import NotifyModal, {
  NotifyModalProps,
} from "../../../desktop/modals/notify_modal";

interface Iprops {}

interface ButtonModal {
  id: number;
  text: string;
  textColor: ColorsPaletTypes;
  borderColor: ColorsPaletTypes;
  iconColor: ColorsPaletTypes;
  icon: AllIcons.CommonIconsType;
}

const buttons: ButtonModal[] = [
  {
    id: 0,
    text: "sell_faster",
    textColor: "static_red",
    borderColor: "static_red",
    iconColor: "static_red",
    icon: "RocketIcon",
  },
  {
    id: 1,
    text: "watch_statistic",
    textColor: "text_primary",
    borderColor: "border_color",
    iconColor: "icon_color",
    icon: "ChartIcon",
  },
  {
    id: 2,
    text: "change",
    textColor: "text_primary",
    borderColor: "border_color",
    iconColor: "icon_color",
    icon: "PenIcon",
  },
  {
    id: 3,
    text: "remove_from_sale",
    textColor: "text_primary",
    borderColor: "border_color",
    iconColor: "icon_color",
    icon: "ArchiveIcon",
  },
  {
    id: 4,
    text: "delete_announcemet",
    textColor: "text_primary",
    borderColor: "border_color",
    iconColor: "icon_color",
    icon: "TrashIcon",
  },
];

const MAnnouncementActionsModal = NiceModal.create((props: Iprops) => {
  const {} = props;
  const { t } = useTranslation();
  const modal = useModal();
  const router = useRouter();

  const onButtonClick = (type: string) => {
    switch (type) {
      case "sell_faster":
        checkBoost();
        break;
      case "watch_statistic":
        router.push(
          `/mobile/user/announcements/announcement/statistics/${router.query.id}`
        );
        break;
      case "change":
        break;
      case "remove_from_sale":
        NiceModal.show(QuestionModal, {
          icon: "QuestionBigIcon",
          title: t("have_sold_question"),
        } as QuestionModalProps);
        break;
      case "delete_announcemet":
        NiceModal.show(InputModal, {
          icon: "QuestionBigIcon",
          title: t("have_sold_question"),
          placeholder: t("remove_from_sale_question"),
          send_path: "remove_announcement",
          cancel: true,
          allowBlur: true,
        } as InputModalProps);
        break;
    }
  };

  const checkBoost = () => {
    const randomNum = Math.floor(Math.random() * 2);
    if (randomNum === 0) {
      NiceModal.show(NotifyModal, {
        icon: "WarningBigIcon",
        title: t("has_turbo_sale"),
        subtitle: t("turbo_sale"),
        description: t("active_for", {
          number: `1 ${t("days")}, 12 ${t("hours")}`,
        }),
        allowBlur: true,
      } as NotifyModalProps);
    } else {
      router.push(`/boost_announcement/turbo?product_id=${router.query.id}`);
    }
  };

  return (
    <MButtonsModal
      title={t("announcement_actions")}
      modal={modal}
      buttons={buttons}
      onButtonClick={onButtonClick}
    />
  );
});

export default MAnnouncementActionsModal;
