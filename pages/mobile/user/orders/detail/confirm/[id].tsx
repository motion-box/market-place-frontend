import React from "react";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import MHeader from "../../../../../../src/components/mobile/header_mobile";
import MetaHead from "../../../../../../src/components/global/meta_head";
import MOrderConfirmPage from "../../../../../../src/pages/mobile/user/order_confirm_page";

const ConfirmOrder = () => {
  const { t } = useTranslation();
  return (
    <>
      <MetaHead title={`${t("logo")} | ${t("accept_order")}`} description="" />
      <MHeader title={t("accept_order")} goBack={true} />
      <MOrderConfirmPage />
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
