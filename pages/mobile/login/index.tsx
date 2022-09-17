import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MetaHead from "../../../src/components/global/meta_head";
import { useTranslation } from "next-i18next";
import MLoginPage from "../../../src/pages/mobile/login_page";
import MHeader from "../../../src/components/mobile/header_mobile";

const Login = () => {
  const { t } = useTranslation();

  return (
    <>
      <MetaHead title={`${t("logo")} | ${t("sign_in")}`} description="" />
      <MHeader title={t("sign_in")} titleType="small" goBack={true} />
      <MLoginPage />
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

export default Login;
