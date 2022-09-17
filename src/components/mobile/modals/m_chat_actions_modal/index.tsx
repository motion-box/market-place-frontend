import React from "react";
import { useTranslation } from "next-i18next";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { ColorsPaletTypes } from "../../../../resources/constants/colors";
import * as AllIcons from "../../../../resources/icons/CommonIcons";
import QuestionModal, {
  QuestionModalProps,
} from "../../../desktop/modals/question_modal";
import InputModal, {
  InputModalProps,
} from "../../../desktop/modals/input_modal";
import MButtonsModal from "../m_buttons_modal";

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
    text: "delete_chat",
    textColor: "text_primary",
    borderColor: "border_color",
    iconColor: "icon_color",
    icon: "TrashIcon",
  },
  {
    id: 1,
    text: "move_to_archive",
    textColor: "text_primary",
    borderColor: "border_color",
    iconColor: "icon_color",
    icon: "ArchiveIcon",
  },
  {
    id: 2,
    text: "complain",
    textColor: "text_primary",
    borderColor: "border_color",
    iconColor: "icon_color",
    icon: "WarningTriangleIcon",
  },
  {
    id: 3,
    text: "block_user",
    textColor: "static_red",
    borderColor: "static_red",
    iconColor: "static_red",
    icon: "LockIcon",
  },
];

const MChatActionsModal = NiceModal.create((props: Iprops) => {
  const {} = props;
  const { t } = useTranslation();
  const modal = useModal();

  const onButtonClick = (type: string) => {
    switch (type) {
      case "delete_chat":
        NiceModal.show(QuestionModal, {
          icon: "WarningBigIcon",
          title: t("delte_question_title"),
          allowBlur: true,
        } as QuestionModalProps);
        break;
      case "move_to_archive":
        NiceModal.show(QuestionModal, {
          icon: "WarningBigIcon",
          title: t("archive_question_title"),
          allowBlur: true,
        } as QuestionModalProps);
        break;
      case "complain":
        NiceModal.show(InputModal, {
          icon: "WarningBigIcon",
          title: t("complain_reason_title"),
          placeholder: t("complain_reason_description"),
          send_path: "/",
          cancel: true,
          allowBlur: true,
        } as InputModalProps);
        break;
      case "block_user":
        NiceModal.show(QuestionModal, {
          icon: "WarningBigIcon",
          title: t("block_user_question_title"),
          allowBlur: true,
        } as QuestionModalProps);
        break;
    }
  };

  return (
    <MButtonsModal
      title={t("chat_actions")}
      modal={modal}
      buttons={buttons}
      onButtonClick={onButtonClick}
    />
  );
});

export default MChatActionsModal;
