import { useTranslation } from "next-i18next";
import React, { useRef } from "react";
import { ChevronSmallDownIcon } from "../../../resources/icons/CommonIcons";
import { ProductModel } from "../../../models/ProductModel";
import ProductCard from "../../global/product_card";
import ProductsCarouselStyle from "./style";

interface Iprops {
  title: string;
  more_link: string;
  data: ProductModel[];
}

const ITEM_WIDTH = 300;
const ProductsCarousel = (props: Iprops) => {
  const { title, more_link, data } = props;
  const { t } = useTranslation();
  const carouselRef = useRef<HTMLDivElement>(null);

  const onControlClick = (direction: string) => {
    if (!carouselRef.current) return;
    if (direction === "left") {
      carouselRef.current.scrollTo({
        left: carouselRef.current.scrollLeft - (ITEM_WIDTH + 24),
        behavior: "smooth",
      });
    } else {
      carouselRef.current.scrollTo({
        left: carouselRef.current.scrollLeft + ITEM_WIDTH + 24,
        behavior: "smooth",
      });
    }
  };

  return (
    <ProductsCarouselStyle>
      <div className="section_title_cont">
        <span className="section_title">{title}</span>
        {more_link && (
          <a className="see_all" href={more_link}>
            <span>{t("all_announcement_of_category")}</span>
            <ChevronSmallDownIcon width="20" height="20" color="static_red" />
          </a>
        )}
      </div>
      <div className="carousel_cont">
        <button
          className="control control_left filter_shadow"
          onClick={() => onControlClick("left")}
        >
          <ChevronSmallDownIcon width="24" height="24" color="static_red" />
        </button>
        <div className="carousel" ref={carouselRef}>
          {data.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
        <button
          className="control control_right filter_shadow"
          onClick={() => onControlClick("right")}
        >
          <ChevronSmallDownIcon width="24" height="24" color="static_red" />
        </button>
      </div>
    </ProductsCarouselStyle>
  );
};

export default ProductsCarousel;
