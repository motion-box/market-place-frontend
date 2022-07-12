import React, { useEffect, useState } from "react";
import type { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MetaHead from "../../../src/components/global/meta_head";
import {
  categoriesData,
  CategoriesType,
  CategoryModel,
} from "../../../src/resources/testCategories";
import { useAppSelector } from "../../../src/redux/store";
import { useRouter } from "next/router";
import CategoryPage from "../../../src/pages/desktop/category_page";

const Category = () => {
  const router = useRouter();
  const { locale } = useAppSelector((state) => state.globalSliceReducer);
  const category = router.query.category as CategoriesType;
  const [data, setData] = useState<CategoryModel | false>();

  useEffect(() => {
    const data = categoriesData.find((item) => item.key === category);
    if (data) {
      setData(data);
    } else {
      setData(false);
    }
  }, []);

  return (
    <>
      <MetaHead
        title={`Молл | ${data ? data[`name_${locale}`] : ""}`}
        description="Ожидайте, мы скоро откроемся"
      />
      <CategoryPage data={data} />
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

export default Category;
