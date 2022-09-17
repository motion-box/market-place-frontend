import React from "react";
import { GetServerSideProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MetaHead from "../../../src/components/global/meta_head";
import MHeader from "../../../src/components/mobile/header_mobile";
import MUserAccountPage from "../../../src/pages/mobile/user/user_account_page";
import NiceModal from "@ebay/nice-modal-react";
import MAccountActionsModal from "../../../src/components/mobile/modals/m_account_actions_modal";

const MUserAccount = () => {
  const { t } = useTranslation();

  const onOptionClick = () => {
    NiceModal.show(MAccountActionsModal);
  };

  return (
    <>
      <MetaHead title={`${t("logo")} | ${t("my_account")}`} description="" />
      <MHeader
        title={`${t("my_account")}`}
        titleType="small"
        goBack={true}
        rightSide={{
          firstBtn: {
            icon: "OptionIcon",
            onClick: () => onOptionClick(),
          },
        }}
      />
      <MUserAccountPage />
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

export default MUserAccount;
