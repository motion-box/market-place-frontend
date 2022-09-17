import React from "react";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import MHeader from "../../../../../../src/components/mobile/header_mobile";
import MetaHead from "../../../../../../src/components/global/meta_head";
import MOrderRatePage from "../../../../../../src/pages/mobile/user/order_rate_page";

const RateOrder = () => {
  const { t } = useTranslation();
  return (
    <>
      <MetaHead title={`${t("logo")} | ${t("rate_order")}`} description="" />
      <MHeader title={t("rate_order")} goBack={true} />
      <MOrderRatePage />
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

export default RateOrder;
