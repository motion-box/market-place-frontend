import React, { useMemo, useState } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import UserFavoritePageStyle from "./style";
import UserPageCont from "../../../../components/desktop/user_page_cont/indext";
import ProductsGridDesktop from "../../../../components/desktop/products_grid_desktop";
import { useAppSelector } from "../../../../redux/store";
import { BigIconsType } from "../../../../resources/icons/BigIcons";
import { productData } from "../../../../resources/testProducts";
import { FADE_BOTTOM_ANIMATION } from "../../../../resources/constants/animations";
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

const sliderData = [
  {
    id: 0,
    key: "recent",
    name_ru: "Товары",
    name_uz: "Махсулотлар",
    name_oz: "Mahsulotlar",
  },
  {
    id: 1,
    key: "in_archive",
    name_ru: "Продавцы",
    name_uz: "Сотувчилар",
    name_oz: "Sotuvchilar",
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
const hasData = [true, true];

const UserFavoritePage = (props: PageProps) => {
  const {} = props;
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = useAppSelector((state) => state.globalSliceReducer);
  const [activeIndex, setActiveIndex] = useState(Number(0));

  const placeholderData: PlaceholderModel[] = useMemo(
    () => [
      {
        id: 0,
        title: t("no_favorites"),
        description: t("no_favorites_description"),
        icon: "LikeBigIcon",
        button_text: t("add_announcement"),
      },
      {
        id: 1,
        title: t("no_favorites"),
        description: t("no_favorites_description"),
        icon: "LikeBigIcon",
      },
    ],
    []
  );

  const sellers = useMemo(
    () =>
      sellerData.map((item, index) => ({
        data: item,
        type: "favorite",
        online: sellersDate[index],
        onCardClick: () => router.push(`/seller/${item.id}/announcements`),
      })),
    []
  );

  return (
    <UserFavoritePageStyle>
      <UserPageCont
        title={pagesData[2][`name_${locale}`]}
        active_page={2}
        pages={pagesData}
        placeholder={placeholderData[activeIndex]}
        has_data={hasData[activeIndex]}
        slider={sliderData}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        <AnimatePresence exitBeforeEnter>
          {activeIndex === 0 && (
            <motion.div
              key={sliderData[0].key}
              variants={FADE_BOTTOM_ANIMATION}
              initial="hidden"
              animate="active"
              exit="hidden"
            >
              <ProductsGridDesktop data={productData} />
            </motion.div>
          )}
          {activeIndex === 1 && (
            <motion.div
              key={sliderData[1].key}
              variants={FADE_BOTTOM_ANIMATION}
              initial="hidden"
              animate="active"
              exit="hidden"
              className="users_container"
            >
              {sellers.map((item) => (
                <SellerCard key={item.data.id} {...item} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </UserPageCont>
    </UserFavoritePageStyle>
  );
};

export default UserFavoritePage;
