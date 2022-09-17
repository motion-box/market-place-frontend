import React from "react";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MetaHead from "../../../src/components/global/meta_head";
import UserAnnouncementsPage from "../../../src/pages/desktop/user/user_announcements_page";
import { useTranslation } from "next-i18next";

const MUserAnnouncementsArchive = () => {
  const { t } = useTranslation();
  return (
    <>
      <MetaHead title={`${t("logo")} | ${t("announcements")}`} description="" />
      <UserAnnouncementsPage />
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

export default MUserAnnouncementsArchive;
