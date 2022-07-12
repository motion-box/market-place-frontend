import React from "react";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MetaHead from "../../../../src/components/global/meta_head";
import { useTranslation } from "next-i18next";
import MessagesChatRoomPage from "../../../../src/pages/desktop/user/messages_chat_room_page";

const ChatRoom = () => {
  const { t } = useTranslation();
  return (
    <>
      <MetaHead title={`${t("logo")} | ${t("message")}`} description="" />
      <MessagesChatRoomPage />
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

export default ChatRoom;
