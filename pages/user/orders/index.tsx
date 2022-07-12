import React from "react";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MetaHead from "../../../src/components/global/meta_head";
import { useTranslation } from "next-i18next";
import UserOrdersPage from "../../../src/pages/desktop/user/user_orders_page";

const UserMessages = () => {
  const { t } = useTranslation();
  return (
    <>
      <MetaHead title={`${t("logo")} | ${t("announcements")}`} description="" />
      <UserOrdersPage />
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
