import React from "react";
import { useTranslation } from "next-i18next";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { ColorsPaletTypes } from "../../../../resources/constants/colors";
import * as AllIcons from "../../../../resources/icons/CommonIcons";
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
    text: "make_main_card",
    textColor: "text_primary",
    borderColor: "border_color",
    iconColor: "icon_color",
    icon: "CheckOutlineIcon",
  },
  {
    id: 1,
    text: "delete_card",
    textColor: "text_primary",
    borderColor: "border_color",
    iconColor: "icon_color",
    icon: "TrashIcon",
  },
];

const MCardActionsModal = NiceModal.create((props: Iprops) => {
  const {} = props;
  const { t } = useTranslation();
  const modal = useModal();

  return (
    <MButtonsModal
      title={t("card_actions")}
      modal={modal}
      buttons={buttons}
      onButtonClick={() => console.log("buttons")}
    />
  );
});

export default MCardActionsModal;
