import React from "react";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MetaHead from "../../../../src/components/global/meta_head";
import { useTranslation } from "next-i18next";
import MHeader from "../../../../src/components/mobile/header_mobile";
import MUserOrdersPage from "../../../../src/pages/mobile/user/user_orders_page";

const UserOrders = () => {
  const { t } = useTranslation();
  return (
    <>
      <MetaHead title={`${t("logo")} | ${t("orders")}`} description="" />
      <MHeader title={`${t("orders")}`} titleType="small" goBack={true} />
      <MUserOrdersPage />
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

export default UserOrders;
