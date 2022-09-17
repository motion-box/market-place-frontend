import React from "react";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import MHeader from "../../../../../../src/components/mobile/header_mobile";
import MetaHead from "../../../../../../src/components/global/meta_head";
import MOrderRefusePage from "../../../../../../src/pages/mobile/user/order_refuse_page";

const RefuseOrder = () => {
  const { t } = useTranslation();
  return (
    <>
      <MetaHead title={`${t("logo")} | ${t("refuse_order")}`} description="" />
      <MHeader title={t("refuse_order")} goBack={true} />
      <MOrderRefusePage />
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

export default RefuseOrder;
