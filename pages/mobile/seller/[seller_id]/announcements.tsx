import React from "react";
import { GetServerSideProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MetaHead from "../../../../src/components/global/meta_head";
import MHeader from "../../../../src/components/mobile/header_mobile";
import MSellerAnnouncementsPage from "../../../../src/pages/mobile/seller/seller_announcements_page";

const MHome = () => {
  const { t } = useTranslation();

  return (
    <>
      <MetaHead
        title={`${t("logo")} | ${t("seller_announcements")}`}
        description=""
      />
      <MHeader
        goBack={true}
        rightSide={{
          firstBtn: {
            icon: "OptionIcon",
            onClick: () => console.log("option"),
          },
        }}
      />
      <MSellerAnnouncementsPage />
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

export default MHome;
