import React from "react";
import MUserReviewsPageStyle from "./style";
import { useTranslation } from "next-i18next";
import ReviewItem from "../../../../components/global/review_item";
import { reviewsData } from "../../../../resources/testReviews";
import { productData } from "../../../../resources/testProducts";

interface PageProps {}

const MUserReviewsPage = (props: PageProps) => {
  const {} = props;
  const { t } = useTranslation();

  return (
    <MUserReviewsPageStyle>
      {reviewsData.map((item) => (
        <ReviewItem
          key={item.id}
          product={productData[item.id]}
          date={item.date}
          review={item.review}
          rate={item.rate}
          isMobile={true}
        />
      ))}
    </MUserReviewsPageStyle>
  );
};

export default MUserReviewsPage;
