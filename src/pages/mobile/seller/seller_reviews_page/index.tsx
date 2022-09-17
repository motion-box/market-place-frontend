import React, { useEffect, useMemo } from "react";
import MSellerReviewPageStyle from "./style";
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

interface PageProps {}

const MSellerReviewPage = (props: PageProps) => {
  const {} = props;
  const { t } = useTranslation();
  const router = useRouter();
  const { theme } = useAppSelector((state) => state.globalSliceReducer);

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

  if (!seller) return <div>Error ocurred, sorry</div>;

  return (
    <MSellerReviewPageStyle>
      <MHeader
        background="card_color"
        titleType="small"
        title={t("all_reviews")}
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
        {reviewsData.map((item, index) => (
          <ReviewItem
            key={item.id}
            isMobile={true}
            {...item}
            product={productData[index]}
          />
        ))}
      </div>
    </MSellerReviewPageStyle>
  );
};

export default MSellerReviewPage;
