import Image from "next/image";
import ProductCardStyle from "./style";
import moment from "moment";
import { useState } from "react";
import LikeButton from "../like_button";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { ProductModel } from "../../../models/ProductModel";
import ProductCardOptions from "../../desktop/product_card_options";
import { ClockIcon } from "../../../resources/icons/CommonIcons";

interface Iprops extends ProductModel {
  editable?: "active" | "disabled";
  expire_date?: string;
}

const ProductCard = (props: Iprops) => {
  const { t } = useTranslation();
  const {
    id,
    image_url,
    title,
    is_sale,
    sale_time,
    price,
    old_price,
    city,
    date,
    is_favorite,
    currency,
    editable,
    expire_date,
  } = props;
  const [isFavorite, setFavorite] = useState(is_favorite);
  const router = useRouter();

  const onClick = () => {
    router.push(
      editable
        ? `/user/announcements/announcement/${id}`
        : `/announcement/${id}`
    );
  };

  return (
    <ProductCardStyle className="product_card">
      <div
        className={`image_cont ${editable === "disabled" ? "gray_image" : ""}`}
        onClick={onClick}
      >
        <Image
          src={image_url}
          layout="fill"
          objectFit="cover"
          priority={true}
          alt={title}
        />
        {is_sale ? (
          <div className="sale_cont">
            <div className="sale">{t("discount")}</div>
            <div className="time">{sale_time}:00</div>
          </div>
        ) : null}
      </div>
      <div className="content" onClick={onClick}>
        <span className="title">{title}</span>
        <span className="price">
          {`${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ${t(
            currency
          )}`}
        </span>
        {old_price ? (
          <span className="old_price">
            {`${old_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ${t(
              currency
            )}`}
            <s />
          </span>
        ) : null}
        <div className="bottom_cont">
          {!expire_date && <span className="city">{city}</span>}
          <span className="date">{moment(date).format("DD MMMM, HH:mm")}</span>
          {expire_date && (
            <div className="expire_date">
              <ClockIcon width="16" height="16" />
              <span className="date">
                {`${moment(expire_date).diff(moment(), "days")} ${t("days")}`}
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="corner_button_cont">
        {editable ? (
          <ProductCardOptions type={editable} product_id={id} />
        ) : (
          <LikeButton
            isLike={isFavorite}
            setLike={setFavorite}
            options={{ $iconColor: "static_white", $isShadow: true }}
          />
        )}
      </div>
    </ProductCardStyle>
  );
};

export default ProductCard;
