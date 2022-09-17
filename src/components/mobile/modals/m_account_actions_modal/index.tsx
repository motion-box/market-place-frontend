import React from "react";
import MButtonsModal from "../m_buttons_modal";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { ColorsPaletTypes } from "../../../../resources/constants/colors";
import * as AllIcons from "../../../../resources/icons/CommonIcons";
import { useTranslation } from "next-i18next";

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
    text: "logout",
    textColor: "text_primary",
    borderColor: "border_color",
    iconColor: "icon_color",
    icon: "LogoutIcon",
  },
];

const MAccountActionsModal = NiceModal.create(() => {
  const modal = useModal();
  const { t } = useTranslation();

  return (
    <MButtonsModal
      title={t("logout")}
      modal={modal}
      buttons={buttons}
      onButtonClick={() => modal.remove()}
    />
  );
});

export default MAccountActionsModal;
