import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import UserBankCardPageStyle from "./style";
import UserPageCont from "../../../../components/desktop/user_page_cont/indext";
import { useAppSelector } from "../../../../redux/store";
import { BigIconsType } from "../../../../resources/icons/BigIcons";
import BankCard from "../../../../components/global/bank_card";
import { AddIcon } from "../../../../resources/icons/CommonIcons";

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

type PlaceholderModel = {
  id: number;
  title: string;
  description: string;
  icon: BigIconsType;
  button_text?: string;
  onClick?: () => void;
};

interface cardModel {
  id: number;
  main: boolean;
  type: "UZCARD" | "HUMO";
  number: string;
}
const bankCardData: cardModel[] = [
  {
    id: 0,
    main: true,
    type: "HUMO",
    number: "9860 **** **** 1986",
  },
  {
    id: 1,
    main: false,
    type: "UZCARD",
    number: "9860 **** **** 1986",
  },
];

const UserBankCardPage = (props: PageProps) => {
  const {} = props;
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = useAppSelector((state) => state.globalSliceReducer);
  const [activeIndex, setActiveIndex] = useState(Number(0));

  const placeholderData: PlaceholderModel[] = useMemo(
    () => [
      {
        id: 0,
        title: t("no_bank_cards"),
        description: t("no_bank_cards_description"),
        icon: "CardBigIcon",
        button_text: t("add_bank_card"),
        onClick: () => goToAddPage(),
      },
    ],
    []
  );

  const goToAddPage = () => {
    router.push("/add_bank_card");
  };

  return (
    <UserBankCardPageStyle>
      <UserPageCont
        title={pagesData[4][`name_${locale}`]}
        active_page={4}
        pages={pagesData}
        placeholder={placeholderData[activeIndex]}
        has_data={true}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        <div className="cards_cont">
          {bankCardData.map((item) => (
            <BankCard key={item.id} {...item} />
          ))}
          <button className="add_btn" onClick={goToAddPage}>
            <AddIcon />
            <span>{t("add_bank_card")}</span>
          </button>
        </div>
      </UserPageCont>
    </UserBankCardPageStyle>
  );
};

export default UserBankCardPage;
