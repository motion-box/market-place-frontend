import React from "react";
import Link from "next/link";
import * as AllColorIcons from "../../../resources/icons/ColorIcons";
import FooterDesktopStyle from "./style";
import {
  AppStoreBigIcon,
  PlayMarketBigIcon,
} from "../../../resources/icons/BigIcons";
import { useTranslation } from "next-i18next";

interface Iprops {}

const urlsData = [
  [
    { id: 0, text: "help", link: "#" },
    { id: 1, text: "paid_services", link: "#" },
    { id: 2, text: "term_of_use", link: "#" },
    { id: 3, text: "privacy_policy", link: "#" },
  ],
  [
    { id: 0, text: "how_sell_buy", link: "#" },
    { id: 1, text: "safety_rules", link: "#" },
    { id: 2, text: "site_map", link: "#" },
    { id: 3, text: "feedback", link: "#" },
  ],
];
interface SupportModel {
  id: number;
  icon: AllColorIcons.ColorIconsType;
  link: string;
}
const supporData: SupportModel[] = [
  {
    id: 0,
    icon: "TelegramColorIcon",
    link: "https://telegram.me/joinchat/AAAAAEEdc-qam7052mnXKA",
  },
  { id: 1, icon: "MessageColorIcon", link: "mailto:test@gmail.com" },
  { id: 2, icon: "PhoneColorIcon", link: "tel:+998909191304" },
];

const FooterDesktop = (props: Iprops) => {
  const { t } = useTranslation();
  const {} = props;

  const mapItems = urlsData.map((arr, index) => (
    <div key={index} className="items_cont">
      {arr.map((item) => (
        <Link key={item.id} href={item.link}>
          <a>{t(item.text)}</a>
        </Link>
      ))}
    </div>
  ));

  const mapSupport = supporData.map((item) => (
    <a
      key={item.id}
      className="support_btn"
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={item.link}
    >
      {React.createElement(AllColorIcons[item.icon])}
    </a>
  ));

  return (
    <FooterDesktopStyle>
      <div className="wrapper">
        <div className="left_cont">
          <div className="items_block">{mapItems}</div>
          <div className="support_cont">{mapSupport}</div>
        </div>
        <div className="right_cont">
          <span className="title">{t("marketplace_tashkent")}</span>
          <div className="app_stores">
            <span className="subtitle">{t("download_mobile_app")}:</span>
            <div className="icons">
              <a
                href="https://www.apple.com/ru/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="app-store"
              >
                <AppStoreBigIcon />
              </a>
              <a
                href="https://play.google.com/store/apps"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="play-market"
              >
                <PlayMarketBigIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </FooterDesktopStyle>
  );
};
export default FooterDesktop;
