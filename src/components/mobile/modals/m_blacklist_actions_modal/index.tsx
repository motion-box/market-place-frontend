import React from "react";
import { useTranslation } from "next-i18next";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { ColorsPaletTypes } from "../../../../resources/constants/colors";
import * as AllIcons from "../../../../resources/icons/CommonIcons";
import MButtonsModal from "../m_buttons_modal";
import { useRouter } from "next/router";

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
    text: "unblock",
    textColor: "text_primary",
    borderColor: "border_color",
    iconColor: "icon_color",
    icon: "LockIcon",
  },
];

const MBlackListActionsModal = NiceModal.create((props: Iprops) => {
  const {} = props;
  const { t } = useTranslation();
  const modal = useModal();
  const router = useRouter();

  const onButtonClick = () => {
    // router.push("/mobile/user/announcements/archive");
  };

  return (
    <MButtonsModal
      title={t("seller_actions")}
      modal={modal}
      buttons={buttons}
      onButtonClick={onButtonClick}
    />
  );
});

export default MBlackListActionsModal;
