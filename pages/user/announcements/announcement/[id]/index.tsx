import React from "react";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MetaHead from "../../../../../src/components/global/meta_head";
import { useTranslation } from "next-i18next";
import AnnouncementPage from "../../../../../src/pages/desktop/announcement_page";
import { useRouter } from "next/router";

const UserAnnouncement = () => {
  const { t } = useTranslation();
  const router = useRouter();

  if (router.query.id === "statistics" || router.query.id === "edit")
    return <div className="page_wrapper">{"404"}</div>;
  return (
    <>
      {/* <MetaHead title={`${t("logo")} | ${t("announcements")}`} description="" /> */}
      <AnnouncementPage />
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

export default UserAnnouncement;
