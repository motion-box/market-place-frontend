import { GetServerSideProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MetaHead from "../../../src/components/global/meta_head";
import MAnnouncementPage from "../../../src/pages/mobile/announcement_page";

const AnnouncementScreen: NextPage = () => {
  return (
    <>
      <MetaHead
        title="Молл | Продукт"
        description="Ожидайте, мы скоро откроемся"
      />
      <MAnnouncementPage />
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

export default AnnouncementScreen;
