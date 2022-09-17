import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MetaHead from "../../../../src/components/global/meta_head";
import MHeader from "../../../../src/components/mobile/header_mobile";
import { useRouter } from "next/router";
import {
  categoriesData,
  CategoriesType,
  CategoryModel,
} from "../../../../src/resources/testCategories";
import MCategoryPage from "../../../../src/pages/mobile/category_page";
import { useAppSelector } from "../../../../src/redux/store";

const MCategory = () => {
  const { t } = useTranslation();
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
        title={`${t("logo")} | ${data ? data[`name_${locale}`] : ""}`}
        description=""
      />
      <MHeader
        titleType="small"
        goBack={true}
        rightSide={{
          firstBtn: {
            icon: "SearchIcon",
            onClick: () => router.push("/mobile/search"),
          },
        }}
      />
      <MCategoryPage data={data} />
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

export default MCategory;
