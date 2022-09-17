import React from "react";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MetaHead from "../../../../../../src/components/global/meta_head";
import { useTranslation } from "next-i18next";
import MAnnouncementStatisticsPage from "../../../../../../src/pages/mobile/user/announcement_statistics_page";
import MHeader from "../../../../../../src/components/mobile/header_mobile";

const AnnouncementStatistics = () => {
  const { t } = useTranslation();

  return (
    <>
      <MetaHead title={`${t("logo")} | ${t("statistic")}`} description="" />
      <MHeader title={t("statistic")} titleType="small" goBack={true} />
      <MAnnouncementStatisticsPage />
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

export default AnnouncementStatistics;
