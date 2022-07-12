import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import UserAnnouncementsPageStyle from "./style";
import UserPageCont from "../../../../components/desktop/user_page_cont/indext";
import ProductsGridDesktop from "../../../../components/desktop/products_grid_desktop";
import { useAppSelector } from "../../../../redux/store";
import { BigIconsType } from "../../../../resources/icons/BigIcons";
import { productData } from "../../../../resources/testProducts";
import { FADE_BOTTOM_ANIMATION } from "../../../../resources/constants/animations";

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
  {
    id: 2,
    key: "in_check",
    name_ru: "На проверке",
    name_uz: "Кориб чикилмокда",
    name_oz: "Ko'rib chiqilmoqda",
  },
  {
    id: 3,
    key: "in_archive",
    name_ru: "В архиве",
    name_uz: "Архивланган",
    name_oz: "Arxivlangan",
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

const hasData = [true, false, false, true];

const UserAnnouncementsPage = (props: PageProps) => {
  const {} = props;
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = useAppSelector((state) => state.globalSliceReducer);
  const [activeIndex, setActiveIndex] = useState(Number(0));
  const [activeData, setActiveData] = useState<any>();

  const placeholderData: PlaceholderModel[] = [
    {
      id: 0,
      title: t("no_announcements"),
      description: t("no_announcements_description_0"),
      icon: "MegaphoneBigIcon",
      button_text: t("add_announcement"),
      onClick: () => console.log("go to create page"),
    },
    {
      id: 1,
      title: t("no_announcements"),
      description: t("no_announcements_description_1"),
      icon: "MegaphoneBigIcon",
    },
    {
      id: 2,
      title: t("no_announcements"),
      description: t("no_announcements_description_2"),
      icon: "MegaphoneBigIcon",
    },
    {
      id: 3,
      title: t("no_announcements"),
      description: t("no_announcements_description_3"),
      icon: "MegaphoneBigIcon",
    },
  ];

  useEffect(() => {
    setActiveData(
      productData.map((item) => {
        return { ...item, expire_date: "2022-09-12T19:40" };
      })
    );
  }, []);

  return (
    <UserAnnouncementsPageStyle>
      <UserPageCont
        title={pagesData[0][`name_${locale}`]}
        active_page={0}
        pages={pagesData}
        placeholder={placeholderData[activeIndex]}
        has_data={hasData[activeIndex]}
        slider={sliderData}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        <AnimatePresence exitBeforeEnter>
          {activeIndex == 0 && (
            <motion.div
              variants={FADE_BOTTOM_ANIMATION}
              initial="hidden"
              animate="active"
              exit="hidden"
              key={sliderData[0].key}
            >
              {activeData && (
                <ProductsGridDesktop data={activeData} editable="active" />
              )}
            </motion.div>
          )}
          {activeIndex == 1 && (
            <motion.div
              variants={FADE_BOTTOM_ANIMATION}
              initial="hidden"
              animate="active"
              exit="hidden"
              key={sliderData[1].key}
            >
              <ProductsGridDesktop data={productData} editable="disabled" />
            </motion.div>
          )}
          {activeIndex == 2 && (
            <motion.div
              variants={FADE_BOTTOM_ANIMATION}
              initial="hidden"
              animate="active"
              exit="hidden"
              key={sliderData[2].key}
            >
              <ProductsGridDesktop data={productData} editable="active" />
            </motion.div>
          )}
          {activeIndex == 3 && (
            <motion.div
              variants={FADE_BOTTOM_ANIMATION}
              initial="hidden"
              animate="active"
              exit="hidden"
              key={sliderData[3].key}
            >
              <ProductsGridDesktop data={productData} editable="disabled" />
            </motion.div>
          )}
        </AnimatePresence>
      </UserPageCont>
    </UserAnnouncementsPageStyle>
  );
};

export default UserAnnouncementsPage;
