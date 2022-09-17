import React from "react";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import MessageModalStyle from "./style";
import Modal from "../../../global/modal";
import { CloseIcon } from "../../../../resources/icons/CommonIcons";
import * as BigIcons from "../../../../resources/icons/BigIcons";
import * as CommonIcons from "../../../../resources/icons/CommonIcons";
import Button from "../../../global/button";
import { useRouter } from "next/router";

export interface MessageModalProps {
  icon: BigIcons.BigIconsType;
  title: string;
  description: string;
  button?: {
    name: string;
    route: string;
  };
  buttons?: {
    id: number;
    icon: CommonIcons.CommonIconsType;
    name: string;
    route: string;
  }[];
  allowBlur?: true;
}

const MessageModal = NiceModal.create<MessageModalProps>((props) => {
  const { icon, title, description, button, buttons, allowBlur } = props;
  const modal = useModal();
  const router = useRouter();

  const goToPage = (path: string) => {
    modal.remove();
    console.log(`Route: ${path}`);
    // router.push(path);
  };

  return (
    <Modal isModal={modal.visible} allowBlur={allowBlur}>
      <MessageModalStyle className="modal_shadow">
        <button
          aria-label="close_button"
          className="close_button"
          onClick={() => modal.remove()}
        >
          <CloseIcon color="text_primary" />
        </button>
        <div className="icon_cont">
          {React.createElement(BigIcons[icon], { width: "128", height: "128" })}
        </div>
        <div className="text_cont">
          <h1>{title}</h1>
          <span>{description}</span>
        </div>
        {buttons?.length && (
          <div className="buttons_cont">
            {buttons.map((item) => (
              <Button
                key={item.id}
                text={item.name}
                icon={item.icon}
                onClick={() => goToPage(item.route)}
                options={{
                  $width: "100%",
                  $borderColor: "border_color",
                  $textColor: "text_primary",
                  $textAlign: "start",
                  $iconColor: "icon_color",
                  $hoverBackgroundColor: "bg_color",
                }}
              />
            ))}
          </div>
        )}
        {button && (
          <Button
            text={button.name}
            onClick={() => goToPage(button.route)}
            options={{
              $width: "100%",
              $backgroundColor: "static_red",
              $textColor: "static_white",
            }}
          />
        )}
      </MessageModalStyle>
    </Modal>
  );
});

export default MessageModal;
