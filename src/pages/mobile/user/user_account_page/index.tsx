import React from "react";
import MUserAccountPageStyle from "./style";
import { useTranslation } from "next-i18next";
import AccountHader from "../../../../components/mobile/account_header";
import { sellerData } from "../../../../resources/testSellers";
import * as AllColorIcons from "../../../../resources/icons/ColorIcons";
import * as AllCommonIcons from "../../../../resources/icons/CommonIcons";
import { ColorsPaletTypes } from "../../../../resources/constants/colors";
import AccountNavButton from "../../../../components/mobile/account_nav_button";
import { useRouter } from "next/router";

interface PageProps {}

type ItemsModel = {
  icon: AllCommonIcons.CommonIconsType | AllColorIcons.ColorIconsType;
  text: string;
  iconColor: ColorsPaletTypes;
  badge?: number;
  route?: string;
};

const firstItems: ItemsModel[] = [
  {
    icon: "UserOutlineIcon",
    text: "personal_data",
    iconColor: "static_gray",
    route: "/mobile/user/profile?status=0",
  },
  {
    icon: "WalletIcon",
    text: "bank_cards",
    iconColor: "static_green",
    route: "/mobile/user/bank_cards?status=0",
  },
  {
    icon: "MegaphoneIcon",
    text: "my_announcements",
    iconColor: "static_blue",
    badge: 4,
    route: "/mobile/user/announcements?status=0",
  },
  {
    icon: "ChatIcon",
    text: "reviews",
    iconColor: "static_purple",
    badge: 28,
    route: "/mobile/user/reviews?status=0",
  },
  {
    icon: "TimeIcon",
    text: "orders",
    iconColor: "static_yellow",
    route: "/mobile/user/orders?status=0",
  },
  {
    icon: "WarningTriangleIcon",
    text: "black_list",
    iconColor: "static_black",
    route: "/mobile/user/black_list?status=0",
  },
];
const secondItems: ItemsModel[] = [
  {
    icon: "InfoIcon",
    text: "q_a",
    iconColor: "static_pantone",
    route: "/mobile/questions_and_answers",
  },
  {
    icon: "SupportIcon",
    text: "contact_support",
    iconColor: "static_red",
    route: "/mobile/support",
  },
];

const user = sellerData[0];

const MUserAccountPage = (props: PageProps) => {
  const {} = props;
  const router = useRouter();

  const onItemClick = (route: string) => {
    router.push(route);
  };

  return (
    <MUserAccountPageStyle>
      <AccountHader
        user_name={`${user.first_name} ${user.last_name}`}
        rate={user.rate}
        address={user.address}
        image_url={user.photo}
      />
      <div className="buttons_cont">
        {firstItems.map((item) => (
          <AccountNavButton
            key={item.icon}
            {...item}
            onItemClick={() => onItemClick(item.route || "")}
          />
        ))}
      </div>
      <div className="buttons_cont">
        {secondItems.map((item) => (
          <AccountNavButton
            key={item.icon}
            {...item}
            onItemClick={() => onItemClick(item.route || "")}
          />
        ))}
      </div>
    </MUserAccountPageStyle>
  );
};

export default MUserAccountPage;
