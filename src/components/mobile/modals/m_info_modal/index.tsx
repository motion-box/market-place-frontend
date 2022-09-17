import React, { useState } from "react";
import MInfoModalStyle from "./style";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import Modal from "../../../global/modal";
import { useTranslation } from "next-i18next";
import { CloseIcon } from "../../../../resources/icons/CommonIcons";
import { AnimatePresence, motion } from "framer-motion";
import { BOTTOM_SHEET_SLIDE_ANIMATION } from "../../../../resources/constants/animations";
import * as AllIcons from "../../../../resources/icons/BigIcons";

export interface InfoModalProps {
  icon: AllIcons.BigIconsType;
  title: string;
  description: string;
}

const MInfoModal = NiceModal.create<InfoModalProps>((props) => {
  const { icon, title, description } = props;
  const modal = useModal();
  const { t } = useTranslation();
  const [isModal, setModal] = useState(true);

  const closeModal = () => {
    setModal(false);
    setTimeout(() => {
      modal.remove();
    }, 400);
  };

  return (
    <Modal isModal={modal.visible}>
      <AnimatePresence>
        {isModal && (
          <MInfoModalStyle>
            <motion.div
              className="container"
              variants={BOTTOM_SHEET_SLIDE_ANIMATION}
              initial="hidden"
              animate="active"
              exit="hidden"
            >
              <button className="close_btn" onClick={closeModal}>
                <CloseIcon color="text_primary" />
              </button>
              {React.createElement(AllIcons[icon], {
                width: "72",
                height: "72",
              })}
              <h1 className="title">{title}</h1>
              <p className="description">{description}</p>
            </motion.div>
          </MInfoModalStyle>
        )}
      </AnimatePresence>
    </Modal>
  );
});

export default MInfoModal;
