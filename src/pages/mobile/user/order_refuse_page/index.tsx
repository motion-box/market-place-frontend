import React, { useState } from "react";
import MOrderRefusePageStyle from "./style";
import { useTranslation } from "next-i18next";
import NiceModal from "@ebay/nice-modal-react";
import MessageModal, {
  MessageModalProps,
} from "../../../../components/desktop/modals/message_modal";
import Button from "../../../../components/global/button";
import { JugBigIcon } from "../../../../resources/icons/BigIcons";
import { useAppSelector } from "../../../../redux/store";
import { useRouter } from "next/router";

interface PageProps {}

const selector_data = [
  {
    id: 0,
    name_ru: "Брак",
    name_uz: "Бузилган",
    name_oz: "Buzilgan",
  },
  {
    id: 1,
    name_ru: "Курьер нахамил",
    name_uz: "Курйер йомонлащди",
    name_oz: "Kuryer yomonlashdi",
  },
  {
    id: 2,
    name_ru: "Передумал",
    name_uz: "Фикримни озгартирдим",
    name_oz: "Fikrimni o'zgartirdim",
  },
  {
    id: 3,
    name_ru: "Привезли поздно",
    name_uz: "Кечиктирилган",
    name_oz: "Kechiktirilgan",
  },
  {
    id: 4,
    name_ru: "Товар не соответствует описанию",
    name_uz: "Махсулот тавсифга мос келмайди",
    name_oz: "Mahsulot tavsifga mos kelmaydi",
  },
];

const MOrderRefusePage = (props: PageProps) => {
  const {} = props;
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = useAppSelector((state) => state.globalSliceReducer);
  const [selectorItem, setSelectorItem] = useState<number | null>(null);

  const sendToBackend = () => {
    NiceModal.show(MessageModal, {
      icon: "JugBigIcon",
      title: t("message_accepted_title"),
      description: t("message_accepted_description"),
      button: {
        name: t("back_to_account"),
        route: "/user/orders",
      },
      allowBlur: true,
    } as MessageModalProps);
  };

  const mapData = selector_data.map((item) => (
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
    <MOrderRefusePageStyle>
      <JugBigIcon width="72" height="72" />
      <span className="title">{t("reject_to_accept_title")}</span>
      <div className="selector">{mapData}</div>
      <textarea placeholder={t("reject_to_accept_description")} />
      <div className="bottom_cont">
        <Button
          text={t("cancel")}
          onClick={() => router.push("/mobile/user/orders")}
          options={{
            $borderColor: "static_red",
            $textColor: "static_red",
            $hoverBorderColor: "static_red",
          }}
        />
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
    </MOrderRefusePageStyle>
  );
};

export default MOrderRefusePage;
