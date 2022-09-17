import React from "react";
import { GetServerSideProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MetaHead from "../../src/components/global/meta_head";
import MHeader from "../../src/components/mobile/header_mobile";
import MHomePage from "../../src/pages/mobile/home_page";
import BottomTabBar from "../../src/components/mobile/bottom_tab_bar";
import { useRouter } from "next/router";

const MHome = () => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <>
      <MetaHead title={`${t("logo")} | ${t("main")}`} description="" />
      <MHeader
        title={`${t("line")} ${t("logo")}`}
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
      <MHomePage />
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

export default MHome;
