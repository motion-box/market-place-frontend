import React, { useMemo, useState } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import UserOrdersPageStyle from "./style";
import UserPageCont from "../../../../components/desktop/user_page_cont/indext";
import { useAppSelector } from "../../../../redux/store";
import { BigIconsType } from "../../../../resources/icons/BigIcons";
import { productData } from "../../../../resources/testProducts";
import { FADE_BOTTOM_ANIMATION } from "../../../../resources/constants/animations";
import OrderCard from "../../../../components/global/order_card";
import {
  activeOrderData,
  notActiveOrderData,
} from "../../../../resources/testOrders";

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
    key: "active",
    name_ru: "Активные",
    name_uz: "Фаол",
    name_oz: "Faol",
  },
  {
    id: 1,
    key: "not_active",
    name_ru: "Не активные",
    name_uz: "Фаол эмас",
    name_oz: "Faol emas",
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

const hasData = [true, true];

const UserOrdersPage = (props: PageProps) => {
  const {} = props;
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = useAppSelector((state) => state.globalSliceReducer);
  const [activeIndex, setActiveIndex] = useState(Number(0));

  const placeholderData: PlaceholderModel[] = [
    {
      id: 0,
      title: t("no_active_orders"),
      description: t("no_active_orders_description"),
      icon: "BoxBigIcon",
    },
    {
      id: 1,
      title: t("no_complited_orders"),
      description: t("no_complited_orders_description"),
      icon: "BoxBigIcon",
    },
  ];

  const activeData = useMemo(
    () =>
      activeOrderData.map((item) => ({
        ...item,
        product: productData[item.product_id],
      })),
    []
  );

  const notActiveData = useMemo(
    () =>
      notActiveOrderData.map((item) => ({
        ...item,
        product: productData[item.product_id],
      })),
    []
  );

  return (
    <UserOrdersPageStyle>
      <UserPageCont
        title={pagesData[6][`name_${locale}`]}
        active_page={6}
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
              className="content_wrapper"
            >
              {activeData.map((item) => (
                <OrderCard key={item.id} {...item} active={true} />
              ))}
            </motion.div>
          )}
          {activeIndex === 1 && (
            <motion.div
              key={sliderData[1].key}
              variants={FADE_BOTTOM_ANIMATION}
              initial="hidden"
              animate="active"
              exit="hidden"
              className="content_wrapper"
            >
              {notActiveData.map((item) => (
                <OrderCard key={item.id} {...item} active={false} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </UserPageCont>
    </UserOrdersPageStyle>
  );
};

export default UserOrdersPage;
