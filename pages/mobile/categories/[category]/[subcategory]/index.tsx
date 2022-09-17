import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import MSubcategoryPage from "../../../../../src/pages/mobile/subcategory_page";
import MetaHead from "../../../../../src/components/global/meta_head";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import {
  categoriesData,
  CategoryModel,
  SubcategoryModel,
} from "../../../../../src/resources/testCategories";
import { useAppSelector } from "../../../../../src/redux/store";
import MHeaderSearch from "../../../../../src/components/mobile/header_search_mobile";

const MSubcategory = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = useAppSelector((state) => state.globalSliceReducer);
  const [subcategory, setSubcategory] = useState<
    SubcategoryModel | "all" | null
  >();
  const [category, setCategory] = useState<CategoryModel>();

  useEffect(() => {
    const data = categoriesData.find(
      (item) => item.key === router.query.category
    );
    if (!data) return;
    if (router.query.subcategory && router.query.subcategory !== "all") {
      const sub_cat = data.subcategories.find(
        (item) => item.key === router.query.subcategory
      );
      if (sub_cat) setSubcategory(sub_cat);
    } else if (router.query.subcategory === "all") {
      setSubcategory("all");
      setCategory(data);
    } else {
      setSubcategory(null);
    }
  }, [router]);

  if (subcategory === null)
    return (
      <div className="page_wrapper">
        <h1>Error ocured, sorry!</h1>
      </div>
    );

  return (
    <>
      <MetaHead
        title={`${t("logo")} | ${
          subcategory !== undefined
            ? subcategory === "all"
              ? category
                ? `${t("all")} - ${category[`name_${locale}`]}`
                : t("all")
              : subcategory[`name_${locale}`]
            : null
        }`}
        description=""
      />
      <MSubcategoryPage data={subcategory} category={category} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  locale,
}: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export default MSubcategory;
