import React from "react";
import { GetServerSideProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MetaHead from "../../../src/components/global/meta_head";
import SellerAnnouncementsPage from "../../../src/pages/desktop/seller/seller_announcements_page";

const SellerAnnouncements = () => {
  const { t } = useTranslation();

  return (
    <>
      <MetaHead
        title={`${t("logo")} | ${t("seller_announcements")}`}
        description=""
      />
      <SellerAnnouncementsPage />
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

export default SellerAnnouncements;
