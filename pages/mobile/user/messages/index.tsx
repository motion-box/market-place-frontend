import React from "react";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MetaHead from "../../../../src/components/global/meta_head";
import { useTranslation } from "next-i18next";
import MUserMessagesPage from "../../../../src/pages/mobile/user/user_messages_page";
import BottomTabBar from "../../../../src/components/mobile/bottom_tab_bar";
import MHeader from "../../../../src/components/mobile/header_mobile";
import { useRouter } from "next/router";

const MUserMessages = () => {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <>
      <MetaHead title={`${t("logo")} | ${t("message")}`} description="" />
      <MHeader
        title={`${t("messages")}`}
        titleType="big"
        rightSide={{
          firstBtn: {
            icon: "BellOutlineIcon",
            onClick: () => router.push("/mobile/notifications"),
          },
          secondBtn: {
            icon: "UserOutlineIcon",
            onClick: () => router.push("/mobile/user"),
          },
        }}
      />
      <BottomTabBar />
      <MUserMessagesPage />
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

export default MUserMessages;
