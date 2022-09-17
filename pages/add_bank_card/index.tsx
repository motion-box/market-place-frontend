import { GetServerSideProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MetaHead from "../../src/components/global/meta_head";
import AddBankCardPage from "../../src/pages/desktop/add_bank_card_page";

const AddBankCard: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <MetaHead
        title={`Молл | ${t("adding_bank_card")}`}
        description="Ожидайте, мы скоро откроемся"
      />
      <AddBankCardPage />
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

export default AddBankCard;
