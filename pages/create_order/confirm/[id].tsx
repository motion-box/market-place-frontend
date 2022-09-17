import React from "react";
import { GetServerSideProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MetaHead from "../../../src/components/global/meta_head";
import ConfirmOrderPage from "../../../src/pages/desktop/confirm_order_page";

const ConfirmOrder = () => {
  const { t } = useTranslation();

  return (
    <>
      <MetaHead title={`${t("logo")} | ${t("create_order")}`} description="" />
      <ConfirmOrderPage />
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
