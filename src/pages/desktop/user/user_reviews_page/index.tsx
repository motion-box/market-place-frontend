import React, { useMemo } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import UserReviewsPageStyle from "./style";
import UserPageCont from "../../../../components/desktop/user_page_cont/indext";
import { useAppSelector } from "../../../../redux/store";
import { BigIconsType } from "../../../../resources/icons/BigIcons";
import ReviewItem from "../../../../components/global/review_item";
import { productData } from "../../../../resources/testProducts";
import { reviewsData } from "../../../../resources/testReviews";

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

const hasData = true;

const UserReviewsPage = (props: PageProps) => {
  const {} = props;
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = useAppSelector((state) => state.globalSliceReducer);

  const placeholderData: PlaceholderModel = useMemo(
    () => ({
      id: 0,
      title: t("no_reviews"),
      description: t("no_reviews_description"),
      icon: "StarBigIcon",
    }),
    []
  );
  return (
    <UserReviewsPageStyle>
      <UserPageCont
        title={pagesData[5][`name_${locale}`]}
        active_page={5}
        pages={pagesData}
        placeholder={placeholderData}
        has_data={hasData}
        activeIndex={0}
        setActiveIndex={(e) => console.log(e)}
      >
        <div className="content_wrapper">
          {reviewsData.map((item) => (
            <ReviewItem
              key={item.id}
              product={productData[item.id]}
              date={item.date}
              review={item.review}
              rate={item.rate}
            />
          ))}
        </div>
      </UserPageCont>
    </UserReviewsPageStyle>
  );
};

export default UserReviewsPage;
