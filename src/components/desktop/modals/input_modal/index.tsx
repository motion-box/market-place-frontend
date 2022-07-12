import React, { useState } from "react";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import InputModalStyle from "./style";
import Modal from "../../../global/modal";
import { CloseIcon } from "../../../../resources/icons/CommonIcons";
import * as BigIcons from "../../../../resources/icons/BigIcons";
import Button from "../../../global/button";
import { useTranslation } from "next-i18next";
import { useAppSelector } from "../../../../redux/store";

export interface InputModalProps {
  icon: BigIcons.BigIconsType;
  title: string;
  placeholder: string;
  send_path: string;
  cancel?: true;
  selector_data?: {
    id: number;
    name_ru: string;
    name_uz: string;
    name_oz: string;
  }[];
}

const InputModal = NiceModal.create<InputModalProps>((props) => {
  const { icon, title, placeholder, send_path, cancel, selector_data } = props;
  const modal = useModal();
  const { t } = useTranslation();
  const { locale } = useAppSelector((state) => state.globalSliceReducer);
  const [selectorItem, setSelectorItem] = useState<number | null>(null);

  const sendToBackend = () => {
    console.log(`Path to api endpoint: ${send_path}`);
    modal.remove();
  };

  const mapData = selector_data?.map((item) => (
    <button
      key={item.id}
      className={`selector_item ${
        item.id === selectorItem ? "active_item" : "item_shadow"
      }`}
      aria-label="selector_button"
      onClick={() => setSelectorItem(selectorItem !== item.id ? item.id : null)}
    >
      {item[`name_${locale}`]}
    </button>
  ));

  return (
    <Modal isModal={modal.visible}>
      <InputModalStyle className="modal_shadow">
        <button
          aria-label="close_button"
          className="close_button"
          onClick={() => modal.remove()}
        >
          <CloseIcon color="text_primary" />
        </button>
        {React.createElement(BigIcons[icon], { width: "72", height: "72" })}
        <span className="title">{title}</span>
        {selector_data?.length && <div className="selector">{mapData}</div>}
        <textarea placeholder={placeholder} />
        <div className="bottom_cont">
          {cancel && (
            <Button
              text={t("cancel")}
              onClick={() => modal.remove()}
              options={{
                $borderColor: "static_red",
                $textColor: "static_red",
                $hoverBorderColor: "static_red",
              }}
            />
          )}
          <Button
            text={t("send")}
            onClick={sendToBackend}
            options={{
              $backgroundColor: "static_red",
              $borderColor: "static_red",
              $textColor: "static_white",
              $hoverBorderColor: "static_red",
            }}
          />
        </div>
      </InputModalStyle>
    </Modal>
  );
});

export default InputModal;
