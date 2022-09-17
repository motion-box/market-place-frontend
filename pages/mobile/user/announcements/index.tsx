import React from "react";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MetaHead from "../../../../src/components/global/meta_head";
import { useTranslation } from "next-i18next";
import MHeader from "../../../../src/components/mobile/header_mobile";
import MUserAnnouncementsPage from "../../../../src/pages/mobile/user/user_announcements_page";
import { useRouter } from "next/router";

const UserAnnouncements = () => {
  const { t } = useTranslation();
  const router = useRouter();

  // const showActions = () => {
  //   NiceModal.show(MAnnouncementsActionsModal);
  // };

  const onButtonClick = () => {
    router.push("/mobile/user/announcements/archive");
  };
  return (
    <>
      <MetaHead title={`${t("logo")} | ${t("announcements")}`} description="" />
      <MHeader
        title={t("my_announcements")}
        titleType="small"
        goBack={true}
        rightSide={{
          firstBtn: {
            icon: "ArchiveIcon",
            onClick: () => onButtonClick(),
          },
        }}
      />
      <MUserAnnouncementsPage />
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

export default UserAnnouncements;
