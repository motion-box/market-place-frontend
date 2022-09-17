import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import UserProfilePageStyle from "./style";
import UserPageCont from "../../../../components/desktop/user_page_cont/indext";
import { useAppSelector } from "../../../../redux/store";
import ProfilePhotoImporter from "../../../../components/global/profile_photo_importer";
import MaskInput from "../../../../components/global/mask_input";
import Input from "../../../../components/global/input";
import Select from "../../../../components/desktop/select";
import Button from "../../../../components/global/button";

interface PageProps {}

const pagesData = [
  {
    id: 0,
    key: "announcements",
    name_ru: "Объявления",
    name_uz: "Элонлар",
    name_oz: "Elonlar",
  },
  {
    id: 1,
    key: "messages",
    name_ru: "Сообщения",
    name_uz: "Хабарлар",
    name_oz: "Xabarlar",
  },
  {
    id: 2,
    key: "favorites",
    name_ru: "Избранное",
    name_uz: "Севимлилар",
    name_oz: "Sevimlilar",
  },
  {
    id: 3,
    key: "profile",
    name_ru: "Личные данные",
    name_uz: "Щахсий малумотлар",
    name_oz: "Shaxsiy ma'lumotlar",
  },
  {
    id: 4,
    key: "bank_cards",
    name_ru: "Банковские карты",
    name_uz: "Банк карталари",
    name_oz: "Bank kartalari",
  },
  {
    id: 5,
    key: "reviews",
    name_ru: "Отзывы",
    name_uz: "Шархлар",
    name_oz: "Sharhlar",
  },
  {
    id: 6,
    key: "orders",
    name_ru: "Заказы",
    name_uz: "Буюртмалар",
    name_oz: "Buyurtmalar",
  },
  {
    id: 7,
    key: "black_list",
    name_ru: "Черный список",
    name_uz: "Кора ройхат",
    name_oz: "Qora ro'yxat",
  },
];

const genderData = [
  {
    id: 0,
    name_ru: "Мужчина",
    name_uz: "Эркак",
    name_oz: "Erkak",
  },
  {
    id: 1,
    name_ru: "Женщина",
    name_uz: "Айол",
    name_oz: "Ayol",
  },
];

const cityData = [
  {
    id: 0,
    name_ru: "Ташкент",
    name_uz: "Тошкент",
    name_oz: "Toshkent",
  },
  {
    id: 1,
    name_ru: "Самарканд",
    name_uz: "Самарқанд",
    name_oz: "Samarqand",
  },
  {
    id: 2,
    name_ru: "Хива",
    name_uz: "Хива",
    name_oz: "Xiva",
  },
  {
    id: 3,
    name_ru: "Щахрисабз",
    name_uz: "Щахрисабс",
    name_oz: "Shaxrisabs",
  },
  {
    id: 4,
    name_ru: "Муйнак",
    name_uz: "Муйнак",
    name_oz: "Muynak",
  },
  {
    id: 5,
    name_ru: "Термез",
    name_uz: "Термез",
    name_oz: "Termez",
  },
  {
    id: 6,
    name_ru: "Гулисатн",
    name_uz: "Гулистон",
    name_oz: "Guliston",
  },
  {
    id: 7,
    name_ru: "Нукус",
    name_uz: "Нукус",
    name_oz: "Nukus",
  },
  {
    id: 8,
    name_ru: "Сурхандарья",
    name_uz: "Сурхандарйо",
    name_oz: "Surhandaryo",
  },
  {
    id: 9,
    name_ru: "Наманган",
    name_uz: "Наманган",
    name_oz: "Namangan",
  },
  {
    id: 10,
    name_ru: "Навоий",
    name_uz: "Навоий",
    name_oz: "Navoiy",
  },
  {
    id: 11,
    name_ru: "Бухара",
    name_uz: "Бухоро",
    name_oz: "Buxaro",
  },
  {
    id: 12,
    name_ru: "Джизах",
    name_uz: "Жизах",
    name_oz: "Jizax",
  },
];

const areaData = [
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
];

const UserBankCardPage = (props: PageProps) => {
  const {} = props;
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = useAppSelector((state) => state.globalSliceReducer);
  const [image, setImage] = useState<File | string | null>(
    "/images/sellers/0.png"
  );
  const [fullname, setFullname] = useState("Azamat Alimov");
  const [birthdate, setBirthdate] = useState("07.07.2000");
  const [username, setUsername] = useState("@azamat");
  const [gender, setGender] = useState<number | null>(0);
  const [phone, setPhone] = useState("+998909191304");
  const [secondPhone, setSecondPhone] = useState("+998");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState<number | null>(null);
  const [area, setArea] = useState<number | null>(null);

  return (
    <UserProfilePageStyle>
      <UserPageCont
        title={pagesData[3][`name_${locale}`]}
        active_page={3}
        pages={pagesData}
        has_data={true}
        activeIndex={0}
        setActiveIndex={() => console.log(0)}
      >
        <AnimatePresence exitBeforeEnter>
          <div className="content_wrapper">
            <div className="columns_cont">
              <div className="column">
                <span className="titler">{t("profile_photo")}</span>
                <ProfilePhotoImporter image={image} setImage={setImage} />
              </div>
              <div className="column">
                <span className="titler">{t("self_data")}</span>
                <Input
                  text={fullname}
                  setText={setFullname}
                  placeholder={t("full_name")}
                />
                <MaskInput
                  mask="99.99.9999"
                  text={birthdate}
                  setText={setBirthdate}
                  placeholder={t("birth_date")}
                />
                <Input
                  text={username}
                  setText={setUsername}
                  placeholder={t("username")}
                />
                <Select
                  placeholder={t("gender")}
                  selected={gender}
                  setSelected={setGender}
                  data={genderData}
                />
              </div>
              <div className="column">
                <span className="titler">{t("contact_data")}</span>
                <MaskInput
                  mask="+\9\98 99 999 99 99"
                  text={phone}
                  setText={setPhone}
                  placeholder={t("phone_number")}
                  disabled
                />
                <MaskInput
                  mask="+\9\98 99 999 99 99"
                  text={secondPhone}
                  setText={setSecondPhone}
                  placeholder={t("aditional_phone_number")}
                  alwaysShowMask={true}
                />
                <Input
                  text={email}
                  setText={setEmail}
                  placeholder={t("email")}
                />
              </div>
              <div className="column">
                <span className="titler">{t("address")}</span>
                <Select
                  placeholder={t("city")}
                  is_search={true}
                  data={cityData}
                  selected={city}
                  setSelected={setCity}
                />
                <Select
                  placeholder={t("choose_region")}
                  is_search={true}
                  data={areaData}
                  selected={area}
                  setSelected={setArea}
                />
              </div>
            </div>
            <Button
              text={t("save_changes")}
              onClick={() => console.log("save")}
              options={{
                $backgroundColor: "static_red",
                $textColor: "static_white",
              }}
            />
          </div>
        </AnimatePresence>
      </UserPageCont>
    </UserProfilePageStyle>
  );
};

export default UserBankCardPage;
