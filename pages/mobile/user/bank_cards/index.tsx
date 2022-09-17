import React from "react";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MetaHead from "../../../../src/components/global/meta_head";
import { useTranslation } from "next-i18next";
import MHeader from "../../../../src/components/mobile/header_mobile";
import MUserBankCardPage from "../../../../src/pages/mobile/user/user_bank_cards_page";

const UserMessages = () => {
  const { t } = useTranslation();
  return (
    <>
      <MetaHead title={`${t("logo")} | ${t("bank_card")}`} description="" />
      <MHeader title={`${t("bank_card")}`} titleType="small" goBack={true} />
      <MUserBankCardPage />
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
