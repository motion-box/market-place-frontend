import React from "react";
import { useTranslation } from "next-i18next";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MetaHead from "../../src/components/global/meta_head";
import BoostAnnouncementPage from "../../src/pages/desktop/boost_announcement_page";

const BoostAnnouncementInFifteen = () => {
  const { t } = useTranslation();

  return (
    <>
      <MetaHead
        title={`${t("logo")} | ${t("sell_in_fifteen_min")}`}
        description=""
      />
      <BoostAnnouncementPage type="in_fifteen_minutes" />
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

export default BoostAnnouncementInFifteen;
