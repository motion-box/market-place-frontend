import React, { useState } from "react";
import MChatActionsModalStyle from "./style";
import { useTranslation } from "next-i18next";
import Modal from "../../../global/modal";
import { motion, AnimatePresence } from "framer-motion";
import { BOTTOM_SHEET_SLIDE_ANIMATION } from "../../../../resources/constants/animations";
import { CloseIcon } from "../../../../resources/icons/CommonIcons";
import Button from "../../../global/button";
import { ColorsPaletTypes } from "../../../../resources/constants/colors";
import * as AllIcons from "../../../../resources/icons/CommonIcons";
import { NiceModalHandler } from "@ebay/nice-modal-react";

interface Iprops {
  title: string;
  buttons: ButtonModel[];
  modal: NiceModalHandler;
  onButtonClick: (type: string) => void;
}

interface ButtonModel {
  id: number;
  text: string;
  textColor: ColorsPaletTypes;
  borderColor: ColorsPaletTypes;
  iconColor: ColorsPaletTypes;
  icon: AllIcons.CommonIconsType;
}

const MButtonsModal = (props: Iprops) => {
  const { title, buttons, modal, onButtonClick } = props;
  const { t } = useTranslation();
  const [isModal, setModal] = useState(true);

  const closeModal = () => {
    setModal(false);
    setTimeout(() => {
      modal.remove();
    }, 400);
  };

  const onClick = (text: string) => {
    onButtonClick(text);
    closeModal();
  };

  const mapButtons = buttons.map((item) => (
    <Button
      key={item.id}
      text={t(item.text)}
      onClick={() => onClick(item.text)}
      icon={item.icon}
      options={{
        $width: "100%",
        $textAlign: "start",
        $textColor: item.textColor,
        $iconColor: item.iconColor,
        $borderColor: item.borderColor,
        $hoverBorderColor: item.borderColor,
      }}
    />
  ));

  return (
    <Modal isModal={modal.visible}>
      <AnimatePresence>
        {isModal && (
          <MChatActionsModalStyle>
            <motion.div
              className="container"
              variants={BOTTOM_SHEET_SLIDE_ANIMATION}
              initial="hidden"
              animate="active"
              exit="hidden"
            >
              <h1 className="title">{title}</h1>
              <button className="close_btn" onClick={closeModal}>
                <CloseIcon color="text_primary" />
              </button>
              <div className="buttons_cont">{mapButtons}</div>
            </motion.div>
          </MChatActionsModalStyle>
        )}
      </AnimatePresence>
    </Modal>
  );
};

export default MButtonsModal;
