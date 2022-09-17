import { useTranslation } from "next-i18next";
import React, { useState } from "react";
import { TimeIcon } from "../../../resources/icons/CommonIcons";
import ConfirmTimerStyle from "./style";

interface Iprops {}

const ConfirmTimer = (props: Iprops) => {
  const {} = props;
  const { t } = useTranslation();
  const [timer, setTimer] = useState("2:22");

  return (
    <ConfirmTimerStyle>
      <div className="timer_cont">
        <TimeIcon width="16" height="16" color="static_red" />
        <span className="timer">{timer}</span>
      </div>
      <button className="resend_btn">{t("resend_sms")}</button>
    </ConfirmTimerStyle>
  );
};

export default ConfirmTimer;
