import React, { useEffect, useState } from "react";
import CategorySelectorStyle from "./style";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import {
  CategoryModel,
  SubcategoryModel,
} from "../../../resources/testCategories";
import { useAppSelector } from "../../../redux/store";
import { ChevronSmallDownIcon } from "../../../resources/icons/CommonIcons";
import SearchInput from "../../global/search_input";
import Button from "../../global/button";
import { AnimatePresence } from "framer-motion";
import SearchResult from "../search_result";
import { useRouter } from "next/router";
import FilterDropDown from "../filter_drop_down";

interface Iprops {
  category?: CategoryModel;
  subcategory?: SubcategoryModel | "all";
  colors: string[];
}

type ShowFirstType = "new" | "cheap" | "expensive";

const CategorySelector = (props: Iprops) => {
  const { category, subcategory, colors } = props;
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = useAppSelector((state) => state.globalSliceReducer);
  const [isFocus, setFocus] = useState(false);
  const [showFirst, setShowFirst] = useState("new");

  const onCategoryClick = (subcategory: string) => {
    router.push({
      pathname: `/categories/${router.query.category}/${subcategory}/`,
      query: {
        ...router.query,
        page: 1,
        show_first: showFirst,
      },
    });
  };

  const onShowFirstPress = (showFirst: ShowFirstType) => {
    setShowFirst(showFirst);
    router.replace({
      pathname: router.pathname,
      query: {
        ...router.query,
        show_first: showFirst,
      },
    });
  };

  const mapCateogories = category?.subcategories.map((item) => (
    <button key={item.id} onClick={() => onCategoryClick(item.key)}>
      <div className="image_cont">
        <Image
          src={item.image_url}
          layout="fill"
          objectFit="contain"
          alt={item[`name_${locale}`]}
        />
      </div>
      <span className="name">{item[`name_${locale}`]}</span>
    </button>
  ));

  return (
    <CategorySelectorStyle gradient={colors}>
      <div className="title_cont">
        <span className="title">
          {subcategory
            ? subcategory !== "all"
              ? subcategory[`name_${locale}`]
              : t("all_announcement_of_category")
            : category
            ? category[`name_${locale}`]
            : "Error"}
        </span>
        {!subcategory && (
          <button onClick={() => onCategoryClick("all")}>
            <span>{t("all_products_in_category")}</span>
            <ChevronSmallDownIcon color="static_white" />
          </button>
        )}
      </div>
      <div style={{ position: "relative" }}>
        <SearchInput
          placeholder={t("search_announcements")}
          setFocus={setFocus}
          styles={{
            height: 60,
            backgroundColor: "card_color",
            placeholderColor: "icon_color",
          }}
          addition={
            <div style={{ margin: "6px 6px 0px 0px" }}>
              <Button
                text={t("find")}
                onClick={() => console.log("find")}
                options={{
                  $backgroundColor: "static_red",
                  $buttonPaddings: "0 36px",
                  $textColor: "static_white",
                }}
              />
            </div>
          }
        />
        <AnimatePresence>
          {isFocus ? <SearchResult key="results" /> : null}
        </AnimatePresence>
      </div>
      {!subcategory && <div className="categories">{mapCateogories}</div>}
      {subcategory && (
        <div className="bottom_cont">
          <div className="filter_cont">
            {subcategory !== "all" && (
              <>
                {subcategory.filterData.map((item) => (
                  <FilterDropDown key={item.id} data={item} />
                ))}
              </>
            )}
          </div>
          <div className="show_first_cont">
            <span>{`${t("show_first")}:`}</span>
            <button onClick={() => onShowFirstPress("new")}>
              <span className={showFirst === "new" ? "active" : ""}>
                {t("new")}
              </span>
            </button>
            <button onClick={() => onShowFirstPress("cheap")}>
              <span className={showFirst === "cheap" ? "active" : ""}>
                {t("cheap")}
              </span>
            </button>
            <button onClick={() => onShowFirstPress("expensive")}>
              <span className={showFirst === "expensive" ? "active" : ""}>
                {t("expensive")}
              </span>
            </button>
          </div>
        </div>
      )}
    </CategorySelectorStyle>
  );
};

export default CategorySelector;
