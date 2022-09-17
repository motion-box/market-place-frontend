import React from "react";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MetaHead from "../../../../src/components/global/meta_head";
import { useTranslation } from "next-i18next";
import MHeader from "../../../../src/components/mobile/header_mobile";
import MUserBlackListPage from "../../../../src/pages/mobile/user/user_black_list_page";
// import UserBlackListPage from "../../../src/pages/desktop/user/user_black_list_page";

const UserMessages = () => {
  const { t } = useTranslation();
  return (
    <>
      <MetaHead title={`${t("logo")} | ${t("black_list")}`} description="" />
      <MHeader title={`${t("black_list")}`} titleType="small" goBack={true} />
      <MUserBlackListPage />
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

export default UserMessages;
