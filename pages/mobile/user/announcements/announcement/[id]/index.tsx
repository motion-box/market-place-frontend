import { GetServerSideProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MUserAnnouncementPage from "../../../../../../src/pages/mobile/user/user_announcement_page";

const MUserAnnouncementScreen: NextPage = () => {
  return (
    <>
      <MUserAnnouncementPage />
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

export default MUserAnnouncementScreen;
