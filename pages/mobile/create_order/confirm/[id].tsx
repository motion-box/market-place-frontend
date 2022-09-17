import React from "react";
import { GetServerSideProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MetaHead from "../../../../src/components/global/meta_head";
import MConfirmOrderPage from "../../../../src/pages/mobile/confirm_order_page";
import MHeader from "../../../../src/components/mobile/header_mobile";

const ConfirmOrder = () => {
  const { t } = useTranslation();

  return (
    <>
      <MetaHead title={`${t("logo")} | ${t("create_order")}`} description="" />
      <MHeader title={t("order_details")} goBack={true} />
      <MConfirmOrderPage />
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

export default ConfirmOrder;
