import React from "react";
import { useTranslation } from "next-i18next";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MetaHead from "../../../src/components/global/meta_head";
import MCreateAnnouncementPage from "../../../src/pages/mobile/create_announcement_page";
import MHeader from "../../../src/components/mobile/header_mobile";

const MCreateAnnouncement = () => {
  const { t } = useTranslation();

  return (
    <>
      <MetaHead
        title={`${t("logo")} | ${t("create_announcement")}`}
        description=""
      />
      <MHeader title={t("new_announcement")} goBack={true} />
      <MCreateAnnouncementPage />
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

export default MCreateAnnouncement;
