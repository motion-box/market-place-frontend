import React from "react";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import NotifyModalStyle from "./style";
import Modal from "../../../global/modal";
import { CloseIcon } from "../../../../resources/icons/CommonIcons";
import * as BigIcons from "../../../../resources/icons/BigIcons";

export interface NotifyModalProps {
  icon: BigIcons.BigIconsType;
  title: string;
  subtitle?: string;
  description: string;
}

const NotifyModal = NiceModal.create<NotifyModalProps>((props) => {
  const { icon, title, subtitle, description } = props;
  const modal = useModal();
  return (
    <Modal isModal={modal.visible}>
      <NotifyModalStyle className="modal_shadow">
        <button
          aria-label="close_button"
          className="close_button"
          onClick={() => modal.remove()}
        >
          <CloseIcon color="text_primary" />
        </button>
        {React.createElement(BigIcons[icon], { width: "72", height: "72" })}
        <h1>{title}</h1>
        <div>
          {subtitle && <h2>{subtitle}</h2>}
          <span>{description}</span>
        </div>
      </NotifyModalStyle>
    </Modal>
  );
});

export default NotifyModal;
