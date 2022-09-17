import React from "react";
import { useTranslation } from "next-i18next";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MetaHead from "../../../src/components/global/meta_head";
import MHeader from "../../../src/components/mobile/header_mobile";
import { useRouter } from "next/router";
import MFinishAnnouncementPage from "../../../src/pages/mobile/finish_announcement_page";

const MFinishAnnouncement = () => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <>
      <MetaHead
        title={`${t("logo")} | ${t("create_announcement")}`}
        description=""
      />
      <MHeader
        title={t("announcement_published")}
        titleType="small"
        rightSide={{
          firstBtn: {
            icon: "CloseIcon",
            onClick: () => router.push("/mobile"),
          },
        }}
      />
      <MFinishAnnouncementPage />
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

export default MFinishAnnouncement;
