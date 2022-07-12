import React from "react";
import AccountDialodMainStyle from "./style";
import { ColorsPaletTypes } from "../../../../../../resources/constants/colors";
import { useTranslation } from "next-i18next";
import * as AllCommonIcons from "../../../../../../resources/icons/CommonIcons";
import * as AllColorIcons from "../../../../../../resources/icons/ColorIcons";
import { DIALOG_SLIDE_ANIMATION } from "../../../../../../resources/constants/animations";
import Button from "../../../../../global/button";
import { useRouter } from "next/router";
const AllIcons = { ...AllCommonIcons, ...AllColorIcons };

interface Iprops {
  setActiveTab: (state: string | boolean) => void;
  closeDialog: () => void;
}

const items: {
  icon: AllCommonIcons.CommonIconsType | AllColorIcons.ColorIconsType;
  text: string;
  iconColor: ColorsPaletTypes;
  badge?: number;
  route?: string;
}[] = [
  {
    icon: "UserOutlineIcon",
    text: "personal_data",
    iconColor: "static_gray",
    route: "/user/profile?status=0",
  },
  {
    icon: "WalletIcon",
    text: "bank_cards",
    iconColor: "static_green",
    route: "/user/bank_cards?status=0",
  },
  {
    icon: "MegaphoneIcon",
    text: "my_announcements",
    iconColor: "static_blue",
    badge: 4,
    route: "/user/announcements?status=0",
  },
  {
    icon: "ChatIcon",
    text: "reviews",
    iconColor: "static_purple",
    badge: 28,
    route: "/user/reviews?status=0",
  },
  {
    icon: "TimeIcon",
    text: "orders",
    iconColor: "static_yellow",
    route: "/user/orders?status=0",
  },
  {
    icon: "WarningTriangleIcon",
    text: "black_list",
    iconColor: "static_black",
    route: "/user/black_list?status=0",
  },
  {
    icon: "InfoIcon",
    text: "q_a",
    iconColor: "static_pantone",
    route: "/user/announcements?status=0",
  },
  {
    icon: "SupportIcon",
    text: "contact_support",
    iconColor: "static_red",
  },
];

const AccountDialogMain = (props: Iprops) => {
  const { setActiveTab, closeDialog } = props;
  const { t } = useTranslation();
  const router = useRouter();

  const goToPage = (path: string) => {
    router.push(path);
    closeDialog();
  };

  return (
    <AccountDialodMainStyle
      variants={DIALOG_SLIDE_ANIMATION}
      initial="visible"
      animate="visible"
      exit="left_hiden"
    >
      <span className="dialog_title">{t("account")}</span>
      <div className="item_cont">
        {items.map((item) => (
          <Item
            key={item.text}
            {...item}
            onItemClick={() =>
              item.route
                ? goToPage(item.route)
                : setActiveTab(item.icon === "SupportIcon" ? item.icon : false)
            }
          />
        ))}
      </div>
      <div className="logout">
        <Button
          text={t("logout")}
          icon="LogoutIcon"
          onClick={() => console.log("logout")}
          options={{
            $width: "100%",
            $borderColor: "border_color",
            $hoverBackgroundColor: "static_red",
            $textAlign: "start",
            $textColor: "text_primary",
            $hoverTextColor: "static_white",
            $hoverIconColor: "static_white",
          }}
        />
      </div>
    </AccountDialodMainStyle>
  );
};

interface ItemProps {
  icon: AllCommonIcons.CommonIconsType | AllColorIcons.ColorIconsType;
  iconColor: ColorsPaletTypes;
  text: string;
  onItemClick?: () => void;
  badge?: number;
}

const Item = ({ icon, iconColor, text, badge, onItemClick }: ItemProps) => {
  const { t } = useTranslation();
  return (
    <button className="item" onClick={onItemClick}>
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
    </button>
  );
};

export default AccountDialogMain;
