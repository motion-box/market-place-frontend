import React from "react";
import ProductImageCarouselMobileStyle from "./style";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import ScrollContainer from "react-indiana-drag-scroll";
import NiceModal from "@ebay/nice-modal-react";
import ImagePreview from "../../global/image_preview";

interface Iprops {
  data: {
    images: string[];
    has_guarantee: boolean;
    price: number;
    currency: "uzs" | "usd" | string;
    amount: number;
    is_sale?: boolean;
    sale_time?: string;
  };
}

const ProductImageCarouselMobile = ({ data }: Iprops) => {
  const { images, amount, is_sale, sale_time } = data;
  const { t } = useTranslation();
  const router = useRouter();

  const showImagePreview = (id: number) => {
    console.log(id);
    NiceModal.show(ImagePreview, { ...data, activeIndex: id, is_mobile: true });
  };

  return (
    <ProductImageCarouselMobileStyle>
      <div className="carousel">
        {images.map((item, index) => (
          <button key={index} onClick={() => showImagePreview(index)}>
            <Image src={item} layout="fill" objectFit="cover" priority={true} />
          </button>
        ))}
      </div>
      <div className="sale_cont">
        {is_sale ? (
          <div className="left_cont">
            <div className="sale">{t("discount")}</div>
            <div className="sale_time">{sale_time}:14</div>
          </div>
        ) : (
          <div />
        )}
        <div className="amount">{t("in_stock", { number: amount })}</div>
      </div>
    </ProductImageCarouselMobileStyle>
  );
};

export default ProductImageCarouselMobile;
