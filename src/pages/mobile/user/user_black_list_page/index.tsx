import React, { useMemo } from "react";
import MUserBlackListPageStyle from "./style";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import SellerCard from "../../../../components/global/seller_card";
import { sellerData } from "../../../../resources/testSellers";
import NiceModal from "@ebay/nice-modal-react";
import MBlackListActionsModal from "../../../../components/mobile/modals/m_blacklist_actions_modal";

interface PageProps {}

const sellersDate = [
  "online",
  "5 часов назад",
  "3 часа назад",
  "2 дня назад",
  "1 месяц назад",
];

const MUserBlackListPage = (props: PageProps) => {
  const {} = props;
  const { t } = useTranslation();
  const router = useRouter();

  const sellers = useMemo(
    () =>
      sellerData.map((item, index) => ({
        data: item,
        online: sellersDate[index],
        onCardClick: () => NiceModal.show(MBlackListActionsModal),
      })),
    []
  );

  return (
    <MUserBlackListPageStyle>
      {sellers.map((item) => (
        <SellerCard key={item.data.id} {...item} />
      ))}
    </MUserBlackListPageStyle>
  );
};

export default MUserBlackListPage;
