import React, { useState } from "react";
import MRulesModalStyle from "./style";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import Modal from "../../../global/modal";
import { CloseIcon } from "../../../../resources/icons/CommonIcons";
import { AnimatePresence, motion } from "framer-motion";
import { BOTTOM_SHEET_SLIDE_ANIMATION } from "../../../../resources/constants/animations";
import { ruleData } from "../../../../resources/testRules";

export interface SelectorModalProps {
  modalTitle: string;
  data: {
    id: number;
    key: string;
    name_ru: string;
    name_uz: string;
    name_oz: string;
  }[];
  query: string;
  additional: string;
}

const MRulesModal = NiceModal.create<SelectorModalProps>((props) => {
  const {} = props;
  const modal = useModal();
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
          <MRulesModalStyle>
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
              <div className="content_cont">
                <div
                  className="content"
                  dangerouslySetInnerHTML={{ __html: ruleData }}
                />
              </div>
            </motion.div>
          </MRulesModalStyle>
        )}
      </AnimatePresence>
    </Modal>
  );
});

export default MRulesModal;
