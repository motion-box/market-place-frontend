import React from "react";
import { GetServerSideProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MetaHead from "../../../src/components/global/meta_head";
import MHeader from "../../../src/components/mobile/header_mobile";
import MSearchPage from "../../../src/pages/mobile/search_page";
import { useRouter } from "next/router";

const MSearch = () => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <>
      <MetaHead title={`${t("logo")} | ${t("search")}`} description="" />
      <MHeader
        title={t("search")}
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
      <MSearchPage />
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

export default MSearch;
