import React, { useMemo } from "react";
import MSellerPageStyle from "./style";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { sellerData } from "../../../../resources/testSellers";
import { useRouter } from "next/router";
import RatingStars from "../../../../components/global/rating_stars";
import { reviewsData } from "../../../../resources/testReviews";
import ReviewItem from "../../../../components/global/review_item";
import { productData } from "../../../../resources/testProducts";
import { categoriesData } from "../../../../resources/testCategories";
import { useAppSelector } from "../../../../redux/store";
import ProductGridMobile from "../../../../components/mobile/product_grid_mobile";
import Link from "next/link";

interface PageProps {}

const MSellerPage = (props: PageProps) => {
  const {} = props;
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = useAppSelector((state) => state.globalSliceReducer);

  const seller = useMemo(
    () => sellerData.find((item) => item.id === Number(router.query.seller_id)),
    []
  );

  if (!seller) return <div>Error ocurred, sorry</div>;

  return (
    <MSellerPageStyle>
      <div className="seller_cont">
        <div className="left_cont">
          <h1 className="title">{`${seller.first_name} ${seller.last_name}`}</h1>
          <RatingStars rating={seller.rate} />
        </div>
        <div className="image_cont">
          <Image src={seller.photo} layout="fill" objectFit="cover" />
        </div>
        <div className="bottom_cont">
          <span className="address">{seller.address}</span>
          <span className="last_visit">Онлайн: 5 часов назад</span>
        </div>
      </div>
      <div className="last_reviews_cont">
        <div className="titler">
          <span>{t("last_reviews")}</span>
          <button
            onClick={() =>
              router.push(`/mobile/seller/${router.query.seller_id}/reviews`)
            }
          >
            {t("all_reviews")}
          </button>
        </div>
        <div className="scroll_cont">
          {reviewsData.map((item, index) => (
            <ReviewItem
              key={item.id}
              {...item}
              isMobile={true}
              product={productData[index]}
            />
          ))}
        </div>
      </div>
      <div className="announcements_cont">
        <div className="titler">
          <span className="title">{t("seller_announcements")}</span>
          <span className="amount">{productData.length}</span>
        </div>
        <div className="categories">
          {categoriesData.map((item) => (
            <Link
              key={item.id}
              href={`/mobile/seller/${router.query.seller_id}/announcements?category=${item.key}`}
            >
              <a className="item" key={item.id}>
                {item[`name_${locale}`]}
              </a>
            </Link>
          ))}
        </div>
        <div className="products_grid_cont">
          <ProductGridMobile data={productData} />
        </div>
      </div>
    </MSellerPageStyle>
  );
};

export default MSellerPage;
