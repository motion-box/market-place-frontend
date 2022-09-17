import React from "react";
import MOrderConfirmPageStyle from "./style";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Button from "../../../../components/global/button";
import ConfirmTimer from "../../../../components/global/confim_timer";
import ConfirmInput from "../../../../components/global/confirm_input";

interface PageProps {}

const MOrderConfirmPage = (props: PageProps) => {
  const {} = props;
  const { t } = useTranslation();
  const router = useRouter();

  const onContinueClick = () => {
    router.replace("/mobile/user/orders");
  };

  return (
    <MOrderConfirmPageStyle>
      <div className="top_cont">
        <h1 className="title">{t("adding_bank_card_sms_title")}</h1>
        <span className="description">
          {t("adding_bank_card_sms_description", {
            number: router.query.phone?.toString().replaceAll("_", " "),
          })}
        </span>
      </div>
      <ConfirmInput />
      <div className="bottom_cont">
        <ConfirmTimer />
        <Button
          text={t("continue")}
          onClick={onContinueClick}
          options={{
            $width: "100%",
            $textColor: "static_white",
            $backgroundColor: "static_red",
          }}
        />
      </div>
    </MOrderConfirmPageStyle>
  );
};

export default MOrderConfirmPage;
