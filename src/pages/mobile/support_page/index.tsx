import React from "react";
import MSupportPageStyle from "./style";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { SmileBoxBigIcon } from "../../../resources/icons/BigIcons";
import * as AllColorIcons from "../../../resources/icons/ColorIcons";

interface PageProps {}

const MSupportPage = (props: PageProps) => {
  const {} = props;
  const { t } = useTranslation();
  // write_to_telegram
  // write_a_letter
  // call_support

  return (
    <MSupportPageStyle>
      <div className="image_wrapper">
        <div className="image_cont">
          <div className="gradient" />
          <div className="image">
            <Image
              src="/images/login_card_bg.png"
              layout="fill"
              objectFit="contain"
              priority={true}
            />
          </div>
        </div>
      </div>

      <div className="content_cont">
        <SmileBoxBigIcon width="128" height="128" />
        <h1 className="title">{t("contact_support")}</h1>
        <p className="subtitle">{t("write_us_to_resolve_issue")}</p>
        <div className="buttons_cont">
          <LinkItem
            text="write_to_telegram"
            icon="TelegramColorIcon"
            href="https://telegram.me/joinchat/AAAAAEEdc-qam7052mnXKA"
          />
          <LinkItem
            text="write_a_letter"
            icon="MessageColorIcon"
            href="mailto:test@gmail.com"
          />
          <LinkItem
            text="call_support"
            icon="PhoneColorIcon"
            href="tel:+998909191304"
          />
        </div>
      </div>
    </MSupportPageStyle>
  );
};

export default MSupportPage;

interface LinkItemProps {
  text: string;
  icon: AllColorIcons.ColorIconsType;
  href: string;
}
const LinkItem = ({ text, icon, href }: LinkItemProps) => {
  const { t } = useTranslation();
  return (
    <a
      className="link_item"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="name">{t(text)}</span>
      {React.createElement(AllColorIcons[icon])}
    </a>
  );
};
