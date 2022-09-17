import React from "react";
import { useTranslation } from "next-i18next";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MetaHead from "../../../src/components/global/meta_head";
import MHeader from "../../../src/components/mobile/header_mobile";
import NiceModal from "@ebay/nice-modal-react";
// import MBoostAnnouncementPage from "../../../src/pages/mobile/boost_announcement_page";
import MInfoMdal, {
  InfoModalProps,
} from "../../../src/components/mobile/modals/m_info_modal";
import MBoostAnnouncementPage from "../../../src/pages/mobile/boost_announcement_page";

const BoostAnnouncementInFifteen = () => {
  const { t } = useTranslation();

  const onInfoClick = () => {
    NiceModal.show(MInfoMdal, {
      icon: "InfoBigIcon",
      title: t("sale_info_title"),
      description: t("sale_info_description"),
    } as InfoModalProps);
  };

  return (
    <>
      <MetaHead
        title={`${t("logo")} | ${t("sell_in_fifteen_min")}`}
        description=""
      />
      <MHeader
        goBack={true}
        background="card_color"
        rightSide={{
          firstBtn: {
            icon: "InfoIcon",
            onClick: () => onInfoClick(),
          },
        }}
      />
      <MBoostAnnouncementPage type="in_fifteen_minutes" />
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

export default BoostAnnouncementInFifteen;
