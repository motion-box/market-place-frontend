import React from "react";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import SmsModalStyle from "./style";
import Modal from "../../../global/modal";
import { CloseIcon } from "../../../../resources/icons/CommonIcons";
import { useTranslation } from "next-i18next";
import ConfirmInput from "../../../global/confirm_input";
import ConfirmTimer from "../../../global/confim_timer";
import { useRouter } from "next/router";
import Button from "../../../global/button";

export interface SmsModalProps {
  phone: string;
  after_comfirm_path: string;
}

const SmsModal = NiceModal.create<SmsModalProps>((props) => {
  const { phone, after_comfirm_path } = props;
  const router = useRouter();
  const modal = useModal();
  const { t } = useTranslation();

  const onContinueClick = () => {
    modal.remove();
    router.replace(after_comfirm_path);
  };

  return (
    <Modal isModal={modal.visible}>
      <SmsModalStyle>
        <button
          aria-label="close_button"
          className="close_button"
          onClick={() => modal.remove()}
        >
          <CloseIcon color="text_primary" />
        </button>
        <div className="top_cont">
          <h1 className="title">{t("adding_bank_card_sms_title")}</h1>
          <span className="description">
            {t("adding_bank_card_sms_description", { number: phone })}
          </span>
        </div>
        <ConfirmInput />
        <div className="bottom_cont">
          <ConfirmTimer />
          <Button
            text={t("continue")}
            onClick={onContinueClick}
            options={{
              $width: "100%",
              $textColor: "static_white",
              $backgroundColor: "static_red",
            }}
          />
        </div>
      </SmsModalStyle>
    </Modal>
  );
});
export default SmsModal;
