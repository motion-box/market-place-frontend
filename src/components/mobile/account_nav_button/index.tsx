import React from "react";
import AccountNavButtonStyle from "./style";
import * as AllCommonIcons from "../../../resources/icons/CommonIcons";
import * as AllColorIcons from "../../../resources/icons/ColorIcons";
import { ColorsPaletTypes } from "../../../resources/constants/colors";
import { useTranslation } from "next-i18next";
const AllIcons = { ...AllColorIcons, ...AllCommonIcons };

interface ItemProps {
  icon: AllCommonIcons.CommonIconsType | AllColorIcons.ColorIconsType;
  iconColor: ColorsPaletTypes;
  text: string;
  onItemClick?: () => void;
  badge?: number;
}

const AccountNavButton = ({
  icon,
  iconColor,
  text,
  badge,
  onItemClick,
}: ItemProps) => {
  const { t } = useTranslation();
  return (
    <AccountNavButtonStyle onClick={onItemClick}>
      <div
        className="icon_color"
        style={{ backgroundColor: `var(--${iconColor})` }}
      >
        {React.createElement(AllIcons[icon], {
          width: "20",
          height: "20",
          color: "static_white",
        })}
      </div>
      <span>{t(text)}</span>
      <div className="arrow_cont">
        {badge ? <span className="badge">{badge}</span> : null}
        <AllCommonIcons.ChevronBigLeftIcon width="18" height="18" />
      </div>
    </AccountNavButtonStyle>
  );
};

export default AccountNavButton;
