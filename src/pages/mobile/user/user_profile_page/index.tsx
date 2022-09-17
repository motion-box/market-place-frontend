import { useTranslation } from "next-i18next";
import React, { useState } from "react";
import MUserProfilePageStyle from "./style";
import NiceModal from "@ebay/nice-modal-react";
import Input from "../../../../components/global/input";
import MaskInput from "../../../../components/global/mask_input";
import ProfilePhotoImporter from "../../../../components/global/profile_photo_importer";
import MFilterModal, {
  MFilterModalProps,
} from "../../../../components/mobile/modals/m_filter_modal";
import { FilterModel } from "../../../../resources/testCategories";
import Button from "../../../../components/global/button";
import { useAppSelector } from "../../../../redux/store";
import { useRouter } from "next/router";

interface PageProps {}

const addressData: FilterModel = {
  id: 0,
  type: ["selector"],
  key: "address",
  name_ru: "Адрес",
  name_uz: "Манзил",
  name_oz: "Manzil",
  items: [
    {
      id: 0,
      name_ru: "Яккаскарай",
      name_uz: "Яккасарой",
      name_oz: "Yakkasaroy",
    },
    {
      id: 1,
      name_ru: "Юнусабад",
      name_uz: "Юнсобод",
      name_oz: "Yunusobod",
    },
    {
      id: 2,
      name_ru: "Мирабад",
      name_uz: "Миробод",
      name_oz: "Mirobod",
    },
    {
      id: 3,
      name_ru: "Яшнабод",
      name_uz: "Яшнобод",
      name_oz: "Yashnobod",
    },
  ],
};
const genderData: FilterModel = {
  id: 0,
  type: ["selector"],
  key: "gender",
  name_ru: "Выберите пол",
  name_uz: "Жинсни танланг",
  name_oz: "Jinsni tanlang",
  items: [
    {
      id: 0,
      name_ru: "Мужской",
      name_uz: "Эркак",
      name_oz: "Erkak",
    },
    {
      id: 1,
      name_ru: "Женщина",
      name_uz: "Айол",
      name_oz: "Ayol",
    },
  ],
};

const MUserProfilePage = (props: PageProps) => {
  const {} = props;
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = useAppSelector((state) => state.globalSliceReducer);
  const [photo, setPhoto] = useState<string | File | null>(null);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState<number | null>(null);
  const [gender, setGender] = useState<number | null>(null);

  const onClickSelect = (type: "address" | "gender") => {
    NiceModal.show(MFilterModal, {
      data: type === "address" ? addressData : genderData,
    } as MFilterModalProps);
  };

  return (
    <MUserProfilePageStyle>
      <ProfilePhotoImporter image={photo} setImage={setPhoto} />
      <div className="inputs_cont">
        <Input
          text={name}
          setText={setName}
          placeholder={t("full_name")}
          options={{ hasBorder: false }}
        />
        <div className="line" />
        <MaskInput
          text={date}
          setText={setDate}
          placeholder={t("birth_date")}
          mask="99 / 99 / 9999"
          options={{ hasBorder: false }}
        />
        <div className="line" />
        <Input
          text={username}
          setText={setUsername}
          placeholder={t("username")}
          options={{ hasBorder: false }}
        />
        <div className="line" />
        <MaskInput
          text={phone}
          setText={setPhone}
          placeholder={t("phone_number")}
          mask="+\9\98 99 999 99 99"
          options={{ hasBorder: false }}
        />
        <div className="line" />
        <Input
          text={email}
          setText={setEmail}
          placeholder={t("email")}
          options={{ hasBorder: false }}
        />
        <div className="line" />
        <div className="select_btn">
          <Button
            text={
              city
                ? `${addressData.items[city][`name_${locale}`]}`
                : t("address")
            }
            icon="ChevronBigLeftIcon"
            onClick={() => onClickSelect("address")}
            options={{
              $width: "100%",
              $height: 60,
              $textAlign: "start",
              $textColor: city ? "text_primary" : "text_secondary",
              $backgroundColor: "card_color",
            }}
          />
        </div>
        <div className="line" />
        <div className="select_btn">
          <Button
            text={
              gender
                ? `${genderData.items[gender][`name_${locale}`]}`
                : t("gender")
            }
            icon="ChevronBigLeftIcon"
            onClick={() => onClickSelect("gender")}
            options={{
              $width: "100%",
              $height: 60,
              $textAlign: "start",
              $textColor: city ? "text_primary" : "text_secondary",
              $backgroundColor: "card_color",
            }}
          />
        </div>
      </div>
      <Button
        text={t("save_changes")}
        onClick={() => router.back()}
        options={{
          $width: "100%",
          $backgroundColor: "static_red",
          $textColor: "static_white",
        }}
      />
    </MUserProfilePageStyle>
  );
};

export default MUserProfilePage;
