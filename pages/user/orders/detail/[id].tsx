import React from "react";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import MetaHead from "../../../../src/components/global/meta_head";
import OrderDetailPage from "../../../../src/pages/desktop/user/order_detail_page";

const OrderDetail = () => {
  const { t } = useTranslation();

  return (
    <>
      <MetaHead title={`${t("logo")} | ${t("order_details")}`} description="" />
      <OrderDetailPage />
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

export default OrderDetail;
