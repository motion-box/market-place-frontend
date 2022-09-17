import { useState } from "react";
import moment from "moment";
import { useTranslation } from "next-i18next";
import { CertColorIcon } from "../../../resources/icons/ColorIcons";
import Button from "../../global/button";
import LikeButton from "../../global/like_button";
import ProductDataDesktopStyle from "./style";
import ShareButton from "../../global/share_button";
import BuyButton from "../../global/buy_button";
import ProductTab from "../product_tab";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import PriceOfferDialog from "../price_offer_dialog";

interface Iprops {
  data: {
    id: number;
    seen: number;
    address: string;
    date: string;
    title: string;
    images: string[];
    amount: number;
    has_guarantee: boolean;
    is_sale?: boolean;
    sale_time?: string;
    price: number;
    old_price?: number;
    is_favorite: boolean;
    currency: "uzs" | "usd" | string;
    info: {
      category: string;
      condition: number;
      manufacturer: string;
      model: string;
      storage: number;
      color: string;
      description: string;
    };
  };
}

const ProductDataDesktop = ({ data }: Iprops) => {
  const { t } = useTranslation();
  const router = useRouter();
  const [isFavorite, setFavorite] = useState(false);
  const [offerDialog, setOfferDialog] = useState(false);

  const writeToSeller = () => {
    router.push(`/user/messages/chat_room/${data.id}?companion=${0}&your=${0}`);
  };

  const closeDialog = () => {
    setOfferDialog(false);
  };

  return (
    <ProductDataDesktopStyle>
      <div className="top_cont">
        <span className="address">{data.address}</span>
        <span className="date">
          {moment(data.date).format("DD MMMM, HH:mm")}
        </span>
      </div>
      <h1 className="title">{data.title}</h1>
      <div className="amount_guarantee_cont">
        <div className="amount">{t("in_stock", { number: data.amount })}</div>
        <div className="guarantee_cont">
          <CertColorIcon width="20" height="20" />
          <span>{t("has_guarantee")}</span>
        </div>
      </div>
      <div className="line" />
      <div className="price_cont">
        <span className="price">
          {`${data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ${t(
            data.currency
          )}`}
        </span>
        {data.old_price ? (
          <span className="old_price">
            {`${data.old_price
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ${t(data.currency)}`}
            <s />
          </span>
        ) : null}
        {data.is_sale ? (
          <div className="sale_cont">
            <div className="sale">{t("discount")}</div>
            <div className="time">{data.sale_time}:00</div>
          </div>
        ) : null}
      </div>
      <div className="buttons_cont">
        <Button
          text={t("write_to_seller")}
          onClick={writeToSeller}
          options={{
            $borderColor: "static_red",
            $textColor: "static_red",
            $hoverBackgroundColor: "static_red",
            $hoverTextColor: "static_white",
            $hoverBorderColor: "static_red",
          }}
        />
        <Button
          text={t("offer_price")}
          onClick={() => setOfferDialog(true)}
          options={{
            $borderColor: "static_red",
            $textColor: "static_white",
            $backgroundColor: "static_red",
            $hoverBorderColor: "static_red",
          }}
        />
        <AnimatePresence>
          {offerDialog && <PriceOfferDialog closeDialog={closeDialog} />}
        </AnimatePresence>
        <ShareButton
          onClick={() => console.log("share")}
          options={{
            $backgroundColor: "bg_color",
            $iconColor: "text_primary",
          }}
        />
        <LikeButton
          isLike={isFavorite}
          setLike={setFavorite}
          options={{
            $width: 48,
            $height: 48,
            $iconColor: "text_primary",
            $backgroundColor: "bg_color",
          }}
        />
      </div>
      <BuyButton
        price={data.price}
        currency={data.currency}
        has_guarantee={data.has_guarantee}
        product_id={data.id}
      />
      <div />
      <ProductTab info={data.info} />
      <div />
      <div className="line" />
      <div className="product_general">
        <span className="general_text">{`ID: ${data.id}`}</span>
        <span className="general_text">{`Просмотров: ${data.seen}`}</span>
        <a className="general_text" href="#">
          {t("complain")}
        </a>
      </div>
    </ProductDataDesktopStyle>
  );
};

export default ProductDataDesktop;
