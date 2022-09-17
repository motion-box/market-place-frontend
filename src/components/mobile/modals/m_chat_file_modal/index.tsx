import React from "react";
import { ColorsPaletTypes } from "../../../../resources/constants/colors";
import * as AllIcons from "../../../../resources/icons/CommonIcons";
import { useTranslation } from "next-i18next";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import MButtonsModal from "../m_buttons_modal";

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
    text: "choose_from_gallery",
    textColor: "text_primary",
    borderColor: "border_color",
    iconColor: "icon_color",
    icon: "GalleryIcon",
  },
  {
    id: 1,
    text: "take_a_photo",
    textColor: "text_primary",
    borderColor: "border_color",
    iconColor: "icon_color",
    icon: "CameraIcon",
  },
];

const MChatFileModal = NiceModal.create(() => {
  const { t } = useTranslation();
  const modal = useModal();

  return (
    <MButtonsModal
      title={t("pin_file")}
      modal={modal}
      buttons={buttons}
      onButtonClick={() => modal.remove()}
    />
  );
});

export default MChatFileModal;
