import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React from "react";
import SellerPageCont from "../../../../components/desktop/seller_page_cont";
import ReviewItem from "../../../../components/global/review_item";
import { productData } from "../../../../resources/testProducts";
import { reviewsData } from "../../../../resources/testReviews";
import { sellerData } from "../../../../resources/testSellers";
import SellerReviewsPageStyle from "./style";

interface PageProps {}

const SellerReviewsPage = (props: PageProps) => {
  const {} = props;
  const { t } = useTranslation();
  const router = useRouter();

  if (!router.query.seller_id) return <div className="page_wrapper">Error</div>;

  return (
    <SellerReviewsPageStyle>
      <SellerPageCont
        seller={sellerData[Number(router.query.seller_id)]}
        is_favorite={false}
        last_visit="Онлайн: 5 часов назад"
        active_page={1}
        has_data={true}
        placeholder={{
          id: 0,
          title: t("seller_has_no_reviews_title"),
          description: t("seller_has_no_reviews_description"),
          icon: "StarBigIcon",
        }}
      >
        <div className="reviews_cont">
          {reviewsData.map((item, index) => (
            <ReviewItem key={index} product={productData[index]} {...item} />
          ))}
        </div>
      </SellerPageCont>
    </SellerReviewsPageStyle>
  );
};

export default SellerReviewsPage;
