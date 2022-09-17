import React, { useEffect, useState } from "react";
import MAddBankCardPageStyle from "./style";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { WalletBigIcon } from "../../../resources/icons/BigIcons";
import MaskInput from "../../../components/global/mask_input";
import Button from "../../../components/global/button";
import ConfirmInput from "../../../components/global/confirm_input";
import ConfirmTimer from "../../../components/global/confim_timer";
import NiceModal from "@ebay/nice-modal-react";
import MessageModal, {
  MessageModalProps,
} from "../../../components/desktop/modals/message_modal";

interface PageProps {}

const MAddBankCardPage = (props: PageProps) => {
  const {} = props;
  const { t } = useTranslation();
  const [page, setPage] = useState<"page" | "Confirm">("page");
  const [bankCard, setBankCard] = useState("");
  const [cardDate, setCardDate] = useState("");
  const [cardType, setCardType] = useState<"UzcardIcon" | "HumoIcon">();

  useEffect(() => {
    const cardType = bankCard.split(" ");
    if (cardType.length > 1) {
      switch (cardType[0]) {
        case "8600":
          setCardType("UzcardIcon");
          break;
        case "9860":
          setCardType("HumoIcon");
          break;
        default:
          setCardType(undefined);
          break;
      }
    } else {
      setCardType(undefined);
    }
  }, [bankCard]);

  const showModal = () => {
    console.log("first");
    NiceModal.show(MessageModal, {
      icon: "CardBigIcon",
      title: t("adding_bank_card_success_title"),
      description: t("adding_bank_card_success_description"),
      button: {
        name: t("back_to_account"),
        route: "/user/bank_cards",
      },
      allowBlur: true,
    } as MessageModalProps);
  };

  return (
    <MAddBankCardPageStyle>
      {page === "page" && (
        <div className="page_cont">
          <div className="image_wrapper">
            <div className="image_cont">
              <div className="gradient" />
              <div className="image">
                <Image
                  src="/images/create_card_bg.png"
                  layout="fill"
                  objectFit="cover"
                  priority={true}
                />
              </div>
            </div>
          </div>
          <div className="content_cont">
            <div className="wallet_icon">
              <WalletBigIcon width="128" height="128" />
            </div>
            <div className="inputs_cont">
              <MaskInput
                text={bankCard}
                setText={setBankCard}
                mask="9999 9999 9999 9999"
                icon={cardType}
                iconColor="static_red"
                placeholder="Номер карты"
              />
              <MaskInput
                text={cardDate}
                setText={setCardDate}
                mask="99/99"
                placeholder="Срок действия"
                options={{
                  width: 160,
                }}
              />
              <div className="spacer" />
              <Button
                text={t("continue")}
                onClick={() => setPage("Confirm")}
                options={{
                  $width: "100%",
                  $backgroundColor: "static_red",
                  $textColor: "static_white",
                }}
              />
            </div>
          </div>
        </div>
      )}
      {page === "Confirm" && (
        <div>
          <div className="confirm_cont">
            <div className="title_cont">
              <h1 className="title">{t("adding_bank_card_sms_title")}</h1>
              <p className="description">
                {t("adding_bank_card_sms_description", {
                  number: "+99890 919 13 04",
                })}
              </p>
            </div>
            <ConfirmInput />
            <div className="bottom_cont">
              <ConfirmTimer />
              <Button
                text={t("continue")}
                onClick={showModal}
                options={{
                  $width: "100%",
                  $backgroundColor: "static_red",
                  $textColor: "static_white",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </MAddBankCardPageStyle>
  );
};

export default MAddBankCardPage;
