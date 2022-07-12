import React from "react";
import { useTranslation } from "next-i18next";
import CategorySelector from "../../../components/desktop/category_selector";
import ProductsCarousel from "../../../components/desktop/products_carousel";
import ProductsGridDesktop from "../../../components/desktop/products_grid_desktop";
import { useAppSelector } from "../../../redux/store";
import {
  categoriesColor,
  CategoryModel,
} from "../../../resources/testCategories";
import { productData } from "../../../resources/testProducts";
import CategoryPageStyle from "./style";

interface PageProps {
  data: CategoryModel | false | undefined;
}

const CategoryPage = (props: PageProps) => {
  const { data } = props;
  const { t } = useTranslation();
  const { locale } = useAppSelector((state) => state.globalSliceReducer);

  if (data === false)
    return (
      <CategoryPageStyle className="page_wrapper">
        <h1>Error ocured, sorry</h1>
      </CategoryPageStyle>
    );

  return (
    <CategoryPageStyle className="page_wrapper">
      {data && (
        <>
          <CategorySelector
            category={data}
            colors={categoriesColor[data.key]}
          />
          <div className="products_cont">
            <ProductsGridDesktop
              title={t("top_announcement")}
              data={productData}
            />
            {data.subcategories.map((item) => (
              <ProductsCarousel
                key={item.id}
                title={item[`name_${locale}`]}
                more_link="more"
                data={productData}
              />
            ))}
          </div>
        </>
      )}
    </CategoryPageStyle>
  );
};

export default CategoryPage;
