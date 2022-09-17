import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MetaHead from "../src/components/global/meta_head";
import HomePage from "../src/pages/desktop/home_page";

const Home: NextPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <MetaHead
        title={`${t("logo")} | ${t("main")}`}
        description="Ожидайте, мы скоро откроемся"
      />
      <HomePage />
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

export default Home;
