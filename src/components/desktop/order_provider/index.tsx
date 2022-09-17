import React from "react";
import OrderProviderStyle from "./style";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { ProductModel } from "../../../models/ProductModel";

interface Iprops {
  product: ProductModel;
  children: React.ReactNode;
}

const OrderProvider = (props: Iprops) => {
  const { product, children } = props;
  const { t } = useTranslation();

  return (
    <OrderProviderStyle>
      <div className="page_wrapper">
        <h1>{t("create_order")}</h1>
        <div className="card_cont">
          <div className="header">
            <div className="image_cont">
              <Image src={product.image_url} layout="fill" objectFit="cover" />
            </div>
            <div className="text_cont">
              <span className="title">{product.title}</span>
              <span className="price_cont">
                <span className="price">
                  {`${product.price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ${t(
                    product.currency
                  )}`}
                </span>
                {product.old_price ? (
                  <span className="old_price">
                    {`${product.old_price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ${t(
                      product.currency
                    )}`}
                    <s />
                  </span>
                ) : null}
              </span>
            </div>
            <span className="author">{"Алексей"}</span>
          </div>
          <div className="card">{children}</div>
        </div>
      </div>
    </OrderProviderStyle>
  );
};

export default OrderProvider;
