import React from "react";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MetaHead from "../../../../../src/components/global/meta_head";
import { useTranslation } from "next-i18next";
import AnnouncementStatisticsPage from "../../../../../src/pages/desktop/user/announcement_statistics_page";
import { useRouter } from "next/router";

const AnnouncementStatistics = () => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <>
      <MetaHead title={`${t("logo")} | ${t("statistic")}`} description="" />
      <AnnouncementStatisticsPage />
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
