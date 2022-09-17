import React, { useState } from "react";
import MPickupModalStyle from "./style";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import Modal from "../../../global/modal";
import { useTranslation } from "next-i18next";
import { CloseIcon } from "../../../../resources/icons/CommonIcons";
import { AnimatePresence, motion } from "framer-motion";
import { BOTTOM_SHEET_SLIDE_ANIMATION } from "../../../../resources/constants/animations";
import * as AllIcons from "../../../../resources/icons/BigIcons";
import { PickupModalProps } from "../../../desktop/modals/pickup_modal";
import Button from "../../../global/button";

const MPickupModal = NiceModal.create<PickupModalProps>((props) => {
  const { address_name, distance } = props;
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
          <MPickupModalStyle>
            <motion.div
              className="container"
              variants={BOTTOM_SHEET_SLIDE_ANIMATION}
              initial="hidden"
              animate="active"
              exit="hidden"
            >
              <button
                aria-label="close_button"
                className="close_button"
                onClick={closeModal}
              >
                <CloseIcon color="text_primary" />
              </button>
              <div className="top_cont">
                <AllIcons.DeliverBigIcon width="72" height="72" />
                <h1>{t("pickup_warn_title")}</h1>
                <p>{t("pickup_warn_description")}</p>
              </div>
              <div className="map"></div>
              <div className="address_cont">
                <span className="name">{address_name}</span>
                <span className="distance">{distance}</span>
              </div>
              <div className="button_cont">
                <Button
                  text={t("pickup_by_my_self")}
                  onClick={() => console.log("delivery")}
                  options={{
                    $width: "100%",
                    $textColor: "static_white",
                    $backgroundColor: "static_red",
                  }}
                />
                <Button
                  text={t("want_delivery")}
                  onClick={() => console.log("delivery")}
                  options={{
                    $width: "100%",
                    $borderColor: "static_red",
                    $textColor: "static_red",
                    $hoverBorderColor: "static_red",
                    $hoverTextColor: "static_white",
                    $hoverBackgroundColor: "static_red",
                  }}
                />
              </div>
            </motion.div>
          </MPickupModalStyle>
        )}
      </AnimatePresence>
    </Modal>
  );
});

export default MPickupModal;
