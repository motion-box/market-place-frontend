import React from "react";
import Image from "next/image";
import { ProductModel } from "../../../models/ProductModel";
import ProductSmallCardStyle from "./style";
import { useTranslation } from "next-i18next";

interface Iprops {
  data: ProductModel | undefined;
}

const ProductSmallCard = (props: Iprops) => {
  const { data } = props;
  const { t } = useTranslation();

  return (
    <ProductSmallCardStyle>
      {data && (
        <>
          <div className="image_cont">
            <Image src={data.image_url} layout="fill" objectFit="cover" />
          </div>
          <div className="content_cont">
            <span className="title">{data.title}</span>
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
                    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ${t(
                    data.currency
                  )}`}
                  <s />
                </span>
              ) : null}
            </div>
          </div>
        </>
      )}
    </ProductSmallCardStyle>
  );
};

export default ProductSmallCard;
