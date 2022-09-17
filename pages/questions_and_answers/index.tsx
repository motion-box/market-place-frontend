import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MetaHead from "../../src/components/global/meta_head";
import QuestionsAndAnswersPage from "../../src/pages/desktop/questions_and_answers_page";

const QuestionsAndAnswers: NextPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <MetaHead
        title={`${t("logo")} | ${t("q&a")}`}
        description="Ожидайте, мы скоро откроемся"
      />
      <QuestionsAndAnswersPage />
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
