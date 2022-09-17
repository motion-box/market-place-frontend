import React from "react";
import ReviewItemStyle from "./style";
import Image from "next/image";
import { ProductModel } from "../../../models/ProductModel";
import { useTranslation } from "next-i18next";
import RatingStars from "../rating_stars";
import moment from "moment";

interface Iprops {
  product: ProductModel;
  review: string;
  date: string;
  rate: number;
  isMobile?: true;
}

const ReviewItem = (props: Iprops) => {
  const { product, review, date, rate, isMobile } = props;
  const { t } = useTranslation();

  return (
    <ReviewItemStyle isMobile={isMobile}>
      <div className="title_cont">
        <div className="left_cont">
          <div className="image_cont">
            <Image src={product.image_url} layout="fill" objectFit="cover" />
          </div>
          <div className="text_cont">
            <span className="title">{product.title}</span>
            <span className="price">{`${product.price
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ${t(
              product.currency
            )}`}</span>
          </div>
        </div>
        {!isMobile && (
          <div className="right_cont">
            <RatingStars rating={rate} />
            <span className="date">
              {moment(date).format("DD MMMM, HH:mm")}
            </span>
          </div>
        )}
      </div>
      <div className="border" />
      <p className="review">{review}</p>
      <div className="bottom_cont">
        <RatingStars rating={rate} />
        <span className="date">{moment(date).format("DD MMMM, HH:mm")}</span>
      </div>
    </ReviewItemStyle>
  );
};
export default ReviewItem;
