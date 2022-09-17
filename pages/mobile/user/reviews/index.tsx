import React from "react";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MetaHead from "../../../../src/components/global/meta_head";
import { useTranslation } from "next-i18next";
import MHeader from "../../../../src/components/mobile/header_mobile";
import MUserProfilePage from "../../../../src/pages/mobile/user/user_profile_page";
import MUserReviewsPage from "../../../../src/pages/mobile/user/user_reviews_page";

const UserRivews = () => {
  const { t } = useTranslation();
  return (
    <>
      <MetaHead title={`${t("logo")} | ${t("reviews")}`} description="" />
      <MHeader title={`${t("reviews")}`} titleType="small" goBack={true} />
      <MUserReviewsPage />
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

export default UserRivews;
