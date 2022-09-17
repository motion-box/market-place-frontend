import moment from "moment";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import React from "react";
import ProductDataMobileStyle from "./style";
import { ProductModel } from "../../../models/ProductModel";
import { CertColorIcon } from "../../../resources/icons/ColorIcons";
import { productData } from "../../../resources/testProducts";
import { sellerData } from "../../../resources/testSellers";
import ProductDescriptionTab from "../../desktop/product_tab/product_description_tab";
import Button from "../../global/button";
import SellerCard from "../../global/seller_card";
import ProductGridMobile from "../product_grid_mobile";
import NiceModal from "@ebay/nice-modal-react";
import MPriceOfferModal from "../modals/m_price_offer_modal";

interface Iprops {
  data: ProductModel;
}

const ProductDataMobile = (props: Iprops) => {
  const { data } = props;
  const { t } = useTranslation();

  const createOffer = () => {
    NiceModal.show(MPriceOfferModal);
  };

  return (
    <ProductDataMobileStyle>
      <div className="top_cont">
        <h1 className="title">{data.title}</h1>
        <div className="price_cont">
          <span className="price">
            {`${data.price
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ${t(data.currency)}`}
          </span>
          {data.old_price ? (
            <span className="old_price">
              {`${data.old_price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ${t(data.currency)}`}
              <s />
            </span>
          ) : null}
        </div>
        <div className="address_cont">
          <span className="city">{data.city}</span>
          <span className="date">
            {moment(data.date).format("DD MMMM, HH:mm")}
          </span>
        </div>
        {data.has_guarantee && (
          <div className="guarantee">
            <CertColorIcon width="20" height="20" />
            <span>{t("has_guarantee")}</span>
          </div>
        )}
        <div className="buttons_cont">
          <Button
            text={t("write")}
            onClick={() => console.log("go to seller page")}
            options={{
              $width: "100%",
              $borderColor: "static_red",
              $hoverBorderColor: "static_red",
              $textColor: "static_red",
            }}
          />
          <Button
            text={t("offer_price")}
            onClick={createOffer}
            options={{
              $width: "100%",
              $backgroundColor: "static_red",
              $textColor: "static_white",
            }}
          />
        </div>
      </div>
      <div className="info_cont">
        <h2 className="title">{t("description")}</h2>
        <ProductDescriptionTab {...data.info} isMobile={true} />
        <div className="stats">
          <span>{`ID: ${data.id}`}</span>
          <span>
            {t("views", {
              number: data.seen
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, " "),
            })}
          </span>
          <button>{t("complain")}</button>
        </div>
        <div className="info_bottom">
          <SellerCard
            data={sellerData[0]}
            online="5 часов назад"
            onCardClick={() => console.log("go to seller")}
          />
          <button
            className="map_cont"
            onClick={() => console.log("show on map")}
          >
            <p>{data.address}</p>
            <Image
              src="/images/map_image.png"
              layout="fill"
              objectFit="cover"
            />
            <div className="gradient" />
          </button>
        </div>
      </div>
      <div className="recommend_cont">
        <div className="seller_announcements">
          <span className="titler">{t("all_announcement_of_seller")}</span>
          <button>{t("see_all")}</button>
        </div>
        <div className="same_cont">
          <span className="titler">{t("similar_announcement")}</span>
          <ProductGridMobile data={productData} />
        </div>
      </div>
    </ProductDataMobileStyle>
  );
};

export default ProductDataMobile;
