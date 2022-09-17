import React from "react";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import PickupModalStyle from "./style";
import Modal from "../../../global/modal";
import { CloseIcon } from "../../../../resources/icons/CommonIcons";
import Button from "../../../global/button";
import { useTranslation } from "next-i18next";
import { DeliverBigIcon } from "../../../../resources/icons/BigIcons";

export interface PickupModalProps {
  address_name: string;
  distance: string;
}

const PickupModal = NiceModal.create<PickupModalProps>((props) => {
  const { address_name, distance } = props;
  const { t } = useTranslation();
  const modal = useModal();
  return (
    <Modal isModal={modal.visible}>
      <PickupModalStyle>
        <button
          aria-label="close_button"
          className="close_button"
          onClick={() => modal.remove()}
        >
          <CloseIcon color="text_primary" />
        </button>
        <div className="top_cont">
          <DeliverBigIcon width="72" height="72" />
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
            text={t("want_delivery")}
            onClick={() => console.log("delivery")}
            options={{
              $borderColor: "static_red",
              $textColor: "static_red",
              $hoverBorderColor: "static_red",
              $hoverTextColor: "static_white",
              $hoverBackgroundColor: "static_red",
            }}
          />
          <Button
            text={t("pickup_by_my_self")}
            onClick={() => console.log("delivery")}
            options={{
              $textColor: "static_white",
              $backgroundColor: "static_red",
            }}
          />
        </div>
      </PickupModalStyle>
    </Modal>
  );
});

export default PickupModal;
