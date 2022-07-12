import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import SubcategoryPage from "../../../../src/pages/desktop/subcategory_page";
import MetaHead from "../../../../src/components/global/meta_head";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import {
  categoriesData,
  SubcategoryModel,
} from "../../../../src/resources/testCategories";

const Subcategory = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [subcategory, setSubcategory] = useState<
    SubcategoryModel | "all" | null
  >();

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
      <MetaHead title="" description="" />
      <SubcategoryPage data={subcategory} />
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

export default Subcategory;
