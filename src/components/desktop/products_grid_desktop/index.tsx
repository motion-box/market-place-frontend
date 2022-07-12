import ProductCard from "../../global/product_card";
import ProductsGridDesktopStyle from "./style";
import { useTranslation } from "next-i18next";
import { ChevronSmallDownIcon } from "../../../resources/icons/CommonIcons";
import { ProductModel } from "../../../models/ProductModel";

interface Iprops {
  title?: string;
  more_link?: string;
  data: ProductModel[];
  editable?: "active" | "disabled";
}

const ProductsGridDesktop = (props: Iprops) => {
  const { t } = useTranslation();
  const { title, more_link, data, editable } = props;

  const mapProducts = data.map((item) => (
    <ProductCard key={item.id} {...item} editable={editable} />
  ));

  return (
    <ProductsGridDesktopStyle>
      {title && (
        <div className="section_title_cont">
          <span className="section_title">{title}</span>
          {more_link && (
            <a className="see_all" href={more_link}>
              <span>{t("see_all")}</span>
              <ChevronSmallDownIcon width="20" height="20" color="static_red" />
            </a>
          )}
        </div>
      )}
      <div className="products_grid">{mapProducts}</div>
    </ProductsGridDesktopStyle>
  );
};

export default ProductsGridDesktop;
