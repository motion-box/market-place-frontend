import React, { useState } from "react";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MetaHead from "../../../../src/components/global/meta_head";
import { useTranslation } from "next-i18next";
import BottomTabBar from "../../../../src/components/mobile/bottom_tab_bar";
import MHeader from "../../../../src/components/mobile/header_mobile";
import MUserFavoritesPage from "../../../../src/pages/mobile/user/user_favorite_page";
import { useRouter } from "next/router";

const MUserFavorites = () => {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <>
      <MetaHead title={`${t("logo")} | ${t("favorites")}`} description="" />
      <MHeader
        title={`${t("favorites")}`}
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
      <MUserFavoritesPage />
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

export default MUserFavorites;
