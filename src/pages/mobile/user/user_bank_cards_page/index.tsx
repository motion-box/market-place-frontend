import React from "react";
import MUserBankCardPageStyle from "./style";
import { useTranslation } from "next-i18next";
import BankCardSmall from "../../../../components/global/bank_card_small";
import NiceModal from "@ebay/nice-modal-react";
import Button from "../../../../components/global/button";
import MCardActionsModal from "../../../../components/mobile/modals/m_card_actions_modal";
import { useRouter } from "next/router";

interface PageProps {}

const card = [
  {
    id: 0,
    main: true,
    type: "UZCARD",
    number: "8600 **** **** 2015",
  },
  {
    id: 1,
    main: false,
    type: "HUMO",
    number: "9860 **** **** 1986",
  },
];

const MUserBankCardPage = (props: PageProps) => {
  const {} = props;
  const { t } = useTranslation();
  const router = useRouter();

  const onBankCardClick = (id: number) => {
    NiceModal.show(MCardActionsModal);
  };

  const mapCards = card.map((item, index) => (
    <BankCardSmall
      key={item.id}
      width="100%"
      {...item}
      isOption={true}
      isSelected={false}
      onClick={() => onBankCardClick(index)}
    />
  ));

  return (
    <MUserBankCardPageStyle>
      <div className="cards_cont">{mapCards}</div>
      <Button
        text={t("add_bank_card")}
        onClick={() => router.push("/mobile/add_bank_card")}
        options={{
          $width: "100%",
          $backgroundColor: "static_red",
          $textColor: "static_white",
        }}
      />
    </MUserBankCardPageStyle>
  );
};

export default MUserBankCardPage;
