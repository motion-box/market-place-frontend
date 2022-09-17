import React from "react";
import { GetServerSideProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MetaHead from "../../../src/components/global/meta_head";
import SellerReviewsPage from "../../../src/pages/desktop/seller/seller_reviews_page";

const SellerReviews = () => {
  const { t } = useTranslation();

  return (
    <>
      <MetaHead title={`${t("logo")} | ${t("seller_review")}`} description="" />
      <SellerReviewsPage />
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

export default SellerReviews;
