import React, { useEffect, useMemo } from "react";
import MSellerAnnouncementsPageStyle from "./style";
import { useTranslation } from "next-i18next";
import { sellerData } from "../../../../resources/testSellers";
import { useRouter } from "next/router";
import MHeader from "../../../../components/mobile/header_mobile";
import Image from "next/image";
import RatingStars from "../../../../components/global/rating_stars";
import colorsPalet from "../../../../resources/constants/colors";
import { useAppSelector } from "../../../../redux/store";
import { reviewsData } from "../../../../resources/testReviews";
import ReviewItem from "../../../../components/global/review_item";
import { productData } from "../../../../resources/testProducts";
import { categoriesData } from "../../../../resources/testCategories";
import ProductGridMobile from "../../../../components/mobile/product_grid_mobile";

interface PageProps {}

const MSellerAnnouncementsPage = (props: PageProps) => {
  const {} = props;
  const { t } = useTranslation();
  const router = useRouter();
  const { theme, locale } = useAppSelector((state) => state.globalSliceReducer);

  useEffect(() => {
    const body = document.getElementsByTagName("body");
    if (body) {
      body[0].style.backgroundColor = colorsPalet[theme].card_color;
    }
    return () => {
      body[0].style.backgroundColor = colorsPalet[theme].bg_color;
    };
  }, []);

  const seller = useMemo(
    () => sellerData.find((item) => item.id === Number(router.query.seller_id)),
    []
  );
  const category = useMemo(
    () => categoriesData.find((item) => item.key === router.query.category),
    []
  );

  if (!seller || !category) return <div>Error ocurred, sorry</div>;

  return (
    <MSellerAnnouncementsPageStyle>
      <MHeader
        background="card_color"
        titleType="small"
        title={category[`name_${locale}`]}
        goBack={true}
        rightSide={{
          firstBtn: {
            icon: "OptionIcon",
            onClick: () => console.log("option"),
          },
        }}
      />
      <div className="seller_cont">
        <div className="image_cont">
          <Image src={seller.photo} layout="fill" objectFit="cover" />
        </div>
        <span>{`${seller.first_name} ${seller.last_name}`}</span>
        <RatingStars rating={seller.rate} />
      </div>
      <div className="content_cont">
        <ProductGridMobile data={productData} />
      </div>
    </MSellerAnnouncementsPageStyle>
  );
};

export default MSellerAnnouncementsPage;
