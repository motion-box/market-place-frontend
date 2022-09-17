import React from "react";
import { GetServerSideProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MetaHead from "../../../src/components/global/meta_head";
import MCreateOrderPage from "../../../src/pages/mobile/create_order_page";
import MHeader from "../../../src/components/mobile/header_mobile";

const CreateOrder = () => {
  const { t } = useTranslation();

  return (
    <>
      <MetaHead title={`${t("logo")} | ${t("create_order")}`} description="" />
      <MHeader title={t("prompt_for_courier")} goBack={true} />
      <MCreateOrderPage />
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

export default CreateOrder;
