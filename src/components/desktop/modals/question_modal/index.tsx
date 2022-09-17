import React from "react";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import QuestionModalStyle from "./style";
import Modal from "../../../global/modal";
import { CloseIcon } from "../../../../resources/icons/CommonIcons";
import * as BigIcons from "../../../../resources/icons/BigIcons";
import Button from "../../../global/button";
import { useTranslation } from "next-i18next";

export interface QuestionModalProps {
  icon: BigIcons.BigIconsType;
  title: string;
  allowBlur?: true;
}

const QuestionModal = NiceModal.create<QuestionModalProps>((props) => {
  const { icon, title, allowBlur } = props;
  const { t } = useTranslation();
  const modal = useModal();

  return (
    <Modal isModal={modal.visible} allowBlur={allowBlur}>
      <QuestionModalStyle className="modal_shadow">
        <button
          aria-label="close_button"
          className="close_button"
          onClick={() => modal.remove()}
        >
          <CloseIcon color="text_primary" />
        </button>
        {React.createElement(BigIcons[icon], { width: "72", height: "72" })}
        <h1>{title}</h1>
        <div className="buttons_cont">
          <Button
            text={t("no")}
            onClick={() => modal.remove()}
            options={{
              $width: "100%",
              $borderColor: "static_red",
              $textColor: "static_red",
              $hoverTextColor: "static_red",
              $hoverBorderColor: "static_red",
            }}
          />
          <Button
            text={t("yes")}
            onClick={() => modal.remove()}
            options={{
              $width: "100%",
              $backgroundColor: "static_red",
              $borderColor: "static_red",
              $textColor: "static_white",
              $hoverBackgroundColor: "static_red",
              $hoverTextColor: "static_white",
              $hoverBorderColor: "static_red",
            }}
          />
        </div>
      </QuestionModalStyle>
    </Modal>
  );
});

export default QuestionModal;
