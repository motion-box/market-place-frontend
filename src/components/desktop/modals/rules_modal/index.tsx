import React, { useState } from "react";
import RulesModalStyle from "./style";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "../../../global/modal";
import { ruleData } from "../../../../resources/testRules";
import { CloseIcon } from "../../../../resources/icons/CommonIcons";

// export interface RulesModalProps {}

const SLIDE_VARIANTS = {
  hidden: {
    x: "100%",
  },
  active: {
    x: 0,
  },
};
const FADE_VARIANTS = {
  hidden: {
    opacity: 0,
  },
  active: {
    opacity: 1,
  },
};

const RulesModal = NiceModal.create((props) => {
  const {} = props;
  const [mount, setMount] = useState(true);
  const modal = useModal();

  const closeModal = () => {
    setMount(false);
    setTimeout(() => {
      modal.remove();
    }, 600);
  };

  return (
    <Modal isModal={modal.visible}>
      <RulesModalStyle>
        <AnimatePresence>
          {mount && (
            <>
              <motion.div
                key="card"
                className="card_cont modal_shadow"
                variants={SLIDE_VARIANTS}
                initial="hidden"
                animate="active"
                exit="hidden"
                transition={{ duration: 0.5, ease: "linear" }}
              >
                <button className="close_btn" onClick={closeModal}>
                  <CloseIcon width="30" height="30" color="text_primary" />
                </button>
                <div
                  className="content"
                  dangerouslySetInnerHTML={{ __html: ruleData }}
                />
              </motion.div>
              <motion.div
                key="backdrop"
                className="backdrop"
                variants={FADE_VARIANTS}
                initial="hidden"
                animate="active"
                exit="hidden"
                transition={{ duration: 0.5, ease: "linear" }}
              />
            </>
          )}
        </AnimatePresence>
      </RulesModalStyle>
    </Modal>
  );
});

export default RulesModal;
