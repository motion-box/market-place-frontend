import React from "react";
import BankCardSmallStyle from "./style";
import { BankCardModel } from "../../../models/BankCardModel";
import { useTranslation } from "next-i18next";
import {
  CheckIcon,
  HumoFullIcon,
  OptionIcon,
  UzcardIcon,
} from "../../../resources/icons/CommonIcons";

interface Iprops extends BankCardModel {
  width?: "100%";
  isSelected: boolean;
  onClick: () => void;
  isOption?: true;
}

const BankCardSmall = (props: Iprops) => {
  const { id, width, main, type, number, isSelected, onClick, isOption } =
    props;
  const { t } = useTranslation();

  return (
    <BankCardSmallStyle
      type={type}
      active={isOption || isSelected}
      onClick={onClick}
      width={width}
    >
      <div className="top_cont">
        {type === "UZCARD" ? (
          <UzcardIcon color="static_white50" width="13" height="13" />
        ) : (
          <HumoFullIcon color="static_white50" width="13" height="13" />
        )}
        {main && <div className="main">{t("main_card")}</div>}
      </div>
      <div className="bottom_cont">
        <span className="num">{number}</span>
        {isOption ? (
          <OptionIcon width="24" height="24" color="static_white" />
        ) : (
          <>
            {isSelected && (
              <div className="checkmark">
                <CheckIcon width="15" height="15" color="static_green" />
              </div>
            )}
          </>
        )}
      </div>
    </BankCardSmallStyle>
  );
};

export default BankCardSmall;
