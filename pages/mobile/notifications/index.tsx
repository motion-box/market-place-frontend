import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MetaHead from "../../../src/components/global/meta_head";
import MNotificationPage from "../../../src/pages/mobile/notification_page";
import MHeader from "../../../src/components/mobile/header_mobile";

const MNotifications: NextPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <MetaHead
        title={`${t("logo")} | ${t("notifications")}`}
        description="Ожидайте, мы скоро откроемся"
      />
      <MHeader title={t("notifications")} titleType="small" goBack={true} />
      <MNotificationPage />
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

export default MNotifications;
