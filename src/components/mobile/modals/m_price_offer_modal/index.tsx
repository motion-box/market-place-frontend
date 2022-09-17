import React, { useState } from "react";
import MPriceOfferModalStyle from "./style";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import Modal from "../../../global/modal";
import { useTranslation } from "next-i18next";
import { CloseIcon } from "../../../../resources/icons/CommonIcons";
import { AnimatePresence, motion } from "framer-motion";
import { BOTTOM_SHEET_SLIDE_ANIMATION } from "../../../../resources/constants/animations";
import Button from "../../../global/button";
import MessageModal, {
  MessageModalProps,
} from "../../../desktop/modals/message_modal";

export interface PriceOfferModalProps {}

const MPriceOfferModal = NiceModal.create<PriceOfferModalProps>((props) => {
  const modal = useModal();
  const { t } = useTranslation();
  const [isModal, setModal] = useState(true);
  const [price, setPrice] = useState("");

  const closeModal = () => {
    setModal(false);
    setTimeout(() => {
      modal.remove();
    }, 400);
  };

  const confirm = () => {
    NiceModal.show(MessageModal, {
      icon: "CheckBigIcon",
      title: t("success"),
      description: t("successfuly_offered"),
      button: {
        name: t("ok"),
        route: "/",
      },
      allowBlur: true,
    } as MessageModalProps);
    closeModal();
  };

  return (
    <Modal isModal={modal.visible}>
      <AnimatePresence>
        {isModal && (
          <MPriceOfferModalStyle>
            <motion.div
              className="container"
              variants={BOTTOM_SHEET_SLIDE_ANIMATION}
              initial="hidden"
              animate="active"
              exit="hidden"
            >
              <h1 className="title">{t("offer_price")}</h1>
              <button className="close_btn" onClick={closeModal}>
                <CloseIcon color="text_primary" />
              </button>
              <input
                defaultValue={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder={`12 500 000 ${t("uzs")}`}
              />
              <Button
                text={t("offer")}
                onClick={confirm}
                options={{
                  $width: "100%",
                  $backgroundColor: "static_red",
                  $textColor: "static_white",
                }}
              />
            </motion.div>
          </MPriceOfferModalStyle>
        )}
      </AnimatePresence>
    </Modal>
  );
});

export default MPriceOfferModal;
