import React from "react";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MetaHead from "../../../../../src/components/global/meta_head";
import { useTranslation } from "next-i18next";
import MMessagesChatRoomPage from "../../../../../src/pages/mobile/user/messages_chat_room_page";

const MChatRoom = () => {
  const { t } = useTranslation();
  return (
    <>
      <MetaHead title={`${t("logo")} | ${t("message")}`} description="" />
      <MMessagesChatRoomPage />
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

export default MChatRoom;
