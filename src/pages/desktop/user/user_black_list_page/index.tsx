import React, { useMemo } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import UserBlackListPageStyle from "./style";
import UserPageCont from "../../../../components/desktop/user_page_cont/indext";
import { useAppSelector } from "../../../../redux/store";
import { BigIconsType } from "../../../../resources/icons/BigIcons";
import { sellerData } from "../../../../resources/testSellers";
import SellerCard from "../../../../components/global/seller_card";

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

const sellersDate = [
  "online",
  "5 часов назад",
  "3 часа назад",
  "2 дня назад",
  "1 месяц назад",
];

const hasData = true;

const UserBlackListPage = (props: PageProps) => {
  const {} = props;
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = useAppSelector((state) => state.globalSliceReducer);

  const placeholderData: PlaceholderModel = useMemo(
    () => ({
      id: 0,
      title: t("no_black_list"),
      description: t("no_black_list_description"),
      icon: "BlackListBigIcon",
      button_text: t("add_announcement"),
    }),
    []
  );

  const sellers = useMemo(
    () =>
      sellerData.map((item, index) => ({
        data: item,
        type: "blocked",
        online: sellersDate[index],
        onCardClick: () => router.push(`/seller/${item.id}/announcements`),
      })),
    []
  );

  return (
    <UserBlackListPageStyle>
      <UserPageCont
        title={pagesData[7][`name_${locale}`]}
        active_page={7}
        pages={pagesData}
        placeholder={placeholderData}
        has_data={hasData}
        activeIndex={0}
        setActiveIndex={(e) => console.log(e)}
      >
        <div className="content_wrapper">
          {sellers.map((item) => (
            <SellerCard key={item.data.id} {...item} />
          ))}
        </div>
      </UserPageCont>
    </UserBlackListPageStyle>
  );
};

export default UserBlackListPage;
