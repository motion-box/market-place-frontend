import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MetaHead from "../../../src/components/global/meta_head";
import MQuestionsAndAnswersPage from "../../../src/pages/mobile/questions_and_answers_page";
import MHeader from "../../../src/components/mobile/header_mobile";

const QuestionsAndAnswers: NextPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <MetaHead
        title={`${t("logo")} | ${t("q&a")}`}
        description="Ожидайте, мы скоро откроемся"
      />
      <MHeader title={t("q_a")} titleType="small" goBack={true} />
      <MQuestionsAndAnswersPage />
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

export default QuestionsAndAnswers;
