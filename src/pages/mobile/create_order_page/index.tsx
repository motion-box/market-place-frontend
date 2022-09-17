import React, { useState } from "react";
import MCreateOrderPageStyle from "./style";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Button from "../../../components/global/button";
import Input from "../../../components/global/input";
import TextArea from "../../../components/global/text_area";
import NiceModal from "@ebay/nice-modal-react";
import MSelectorModal from "../../../components/mobile/modals/m_selector_modal";
import { SelectorModalProps } from "../../../components/mobile/modals/m_rules_modal";
import { useAppSelector } from "../../../redux/store";

interface PageProps {}

const addressData = [
  {
    id: 0,
    name_ru: "Ул. Асака, дом 15",
    name_uz: "Асака кучаси, 15 уй",
    name_oz: "Asaka kuchasi, 15 uy",
  },
  {
    id: 1,
    name_ru: "Ул. Ивлиева, дом 17",
    name_uz: "Ивлиева кучаси, 17 уй",
    name_oz: "Ivlieva kuchasi, 17 uy",
  },
  {
    id: 2,
    name_ru: "Ул. Бадамзар, тупик 1, дом 2",
    name_uz: "Бодомзор кучаси, 1 тупик, 2 уй",
    name_oz: "Asaka kuchasi, 1 tupik, 2 uy",
  },
];

const MCreateOrderPage = (props: PageProps) => {
  const {} = props;
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = useAppSelector((state) => state.globalSliceReducer);
  const [homeNum, setHomeNum] = useState("");
  const [entrance, setEntrance] = useState("");
  const [floor, setFloor] = useState("");
  const [apartment, setApartment] = useState("");
  const [landmark, setLandmark] = useState("");
  const [comment, setComment] = useState("");

  const goToConfirm = () => {
    if (router.query.id) {
      router.push(`/mobile/create_order/confirm/${router.query.id}`);
    }
  };

  const showSelectModal = () => {
    NiceModal.show(MSelectorModal, {
      modalTitle: t("delivery_address"),
      data: addressData,
      query: "address",
      additional: `create_order/${router.query.id}?`,
    } as SelectorModalProps);
  };

  return (
    <MCreateOrderPageStyle>
      <div className="container">
        <Button
          text={
            router.query.address
              ? addressData[Number(router.query.address)][`name_${locale}`]
              : t("select_address")
          }
          icon="ChevronBigLeftIcon"
          onClick={showSelectModal}
          options={{
            $buttonPaddings: "0 16px",
            $width: "100%",
            $height: 60,
            $textAlign: "start",
          }}
        />
        <div className="border_cont">
          <div />
        </div>
        <Input
          text={homeNum}
          setText={setHomeNum}
          placeholder={t("house_number")}
          options={{ hasBorder: false }}
        />
        <div className="border_cont">
          <div />
        </div>
        <Input
          text={entrance}
          setText={setEntrance}
          placeholder={t("house_entrance")}
          options={{ hasBorder: false }}
        />
        <div className="border_cont">
          <div />
        </div>
        <Input
          text={floor}
          setText={setFloor}
          placeholder={t("floor")}
          options={{ hasBorder: false }}
        />
        <div className="border_cont">
          <div />
        </div>
        <Input
          text={apartment}
          setText={setApartment}
          placeholder={t("apartment")}
          options={{ hasBorder: false }}
        />
        <div className="border_cont">
          <div />
        </div>
        <Input
          text={landmark}
          setText={setLandmark}
          placeholder={t("landmark")}
          options={{ hasBorder: false }}
        />
        <div className="border_cont">
          <div />
        </div>
        <TextArea
          text={comment}
          setText={setComment}
          placeholder={t("comment_for_courier")}
          options={{ hasBorder: false }}
        />
      </div>
      <Button
        text={t("continue")}
        onClick={goToConfirm}
        options={{
          $width: "100%",
          $backgroundColor: "static_red",
          $textColor: "static_white",
        }}
      />
    </MCreateOrderPageStyle>
  );
};

export default MCreateOrderPage;
