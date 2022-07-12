import { useRouter } from "next/router";
import React from "react";
import CategorySelector from "../../../components/desktop/category_selector";
import PaginationController from "../../../components/desktop/pagination_controller";
import ProductsGridDesktop from "../../../components/desktop/products_grid_desktop";
import {
  categoriesColor,
  SubcategoryModel,
} from "../../../resources/testCategories";
import { productData } from "../../../resources/testProducts";
import SubcategoryPageStyle from "./style";

interface PageProps {
  data?: SubcategoryModel | "all";
}

const SubcategoryPage = (props: PageProps) => {
  const { data } = props;
  const router = useRouter();

  const onPaginationClick = (page: number) => {
    router.push({
      pathname: router.basePath,
      query: { ...router.query, page: page },
    });
  };

  return (
    <SubcategoryPageStyle className="page_wrapper">
      <CategorySelector
        subcategory={data}
        colors={categoriesColor[`${router.query.category}` as "kids"]}
      />
      <ProductsGridDesktop data={productData} />
      <PaginationController
        currentPage={Number(router.query.page)}
        pagesLength={21}
        onClick={onPaginationClick}
      />
    </SubcategoryPageStyle>
  );
};

export default SubcategoryPage;
