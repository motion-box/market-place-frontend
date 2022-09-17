import React from "react";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MetaHead from "../../../../src/components/global/meta_head";
import { useTranslation } from "next-i18next";
import NiceModal from "@ebay/nice-modal-react";
import MHeader from "../../../../src/components/mobile/header_mobile";
import MAnnouncementsArchivePage from "../../../../src/pages/mobile/user/announcements_archive_page";
import MAnnouncementsActionsModal from "../../../../src/components/mobile/modals/m_announcements_actions_modal";

const UserAnnouncements = () => {
  const { t } = useTranslation();

  const showActions = () => {
    NiceModal.show(MAnnouncementsActionsModal);
  };

  return (
    <>
      <MetaHead
        title={`${t("logo")} | ${t("announcements_archive")}`}
        description=""
      />
      <MHeader
        title={t("announcements_archive")}
        titleType="small"
        goBack={true}
        rightSide={{
          firstBtn: {
            icon: "OptionIcon",
            onClick: () => showActions(),
          },
        }}
      />
      <MAnnouncementsArchivePage />
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

export default UserAnnouncements;
