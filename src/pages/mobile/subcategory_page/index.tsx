import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import FilterMobile from "../../../components/mobile/filter_mobile";
import MHeader from "../../../components/mobile/header_mobile";
import MHeaderSearch from "../../../components/mobile/header_search_mobile";
import ProductGridMobile from "../../../components/mobile/product_grid_mobile";
import { useAppSelector } from "../../../redux/store";
import {
  CategoryModel,
  SubcategoryModel,
} from "../../../resources/testCategories";
import { productData } from "../../../resources/testProducts";
import MSubcategoryPageStyle from "./style";

interface PageProps {
  data?: SubcategoryModel | "all";
  category?: CategoryModel;
}

const MSubcategoryPage = (props: PageProps) => {
  const { data, category } = props;
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = useAppSelector((state) => state.globalSliceReducer);
  const [isSearch, setSearch] = useState(false);
  const [searchText, setSearchText] = useState("");

  return (
    <MSubcategoryPageStyle>
      {!isSearch ? (
        <MHeader
          title={
            data
              ? data !== "all"
                ? data[`name_${locale}`]
                : category
                ? category[`name_${locale}`]
                : t("all_products_in_category")
              : data
              ? data[`name_${locale}`]
              : "Error"
          }
          goBack={true}
          rightSide={{
            firstBtn: {
              icon: "SearchIcon",
              onClick: () => setSearch(true),
            },
          }}
        />
      ) : (
        <MHeaderSearch
          placeholder={t("search_announcement")}
          searchText={searchText}
          setSearchText={setSearchText}
          closeClick={() => setSearch(false)}
        />
      )}
      {data !== "all" ? (
        <div className="filter_cont">
          <FilterMobile data={data?.filterData} />
        </div>
      ) : (
        <div className="subcategories_cont">
          <ScrollContainer className="scroller">
            {category?.subcategories.map((item) => (
              <Link
                key={item.id}
                href={`/mobile/categories/${router.query.category}/${item.key}?category=${router.query.category}&page=1&show_first=new`}
                replace={true}
              >
                <a className="item">
                  <span>{item[`name_${locale}`]}</span>
                </a>
              </Link>
            ))}
          </ScrollContainer>
        </div>
      )}
      <div className="page_container">
        <ProductGridMobile data={productData} />
      </div>
    </MSubcategoryPageStyle>
  );
};

export default MSubcategoryPage;
