import React from "react";
import AccountDialogSupportStyle from "./style";
import { useTranslation } from "next-i18next";
import { DIALOG_SLIDE_ANIMATION } from "../../../../../../resources/constants/animations";
import { SmileBoxBigIcon } from "../../../../../../resources/icons/BigIcons";
import { ChevronSmallDownIcon } from "../../../../../../resources/icons/CommonIcons";
import * as AllColorIcons from "../../../../../../resources/icons/ColorIcons";

interface Iprops {
  goBack: (state: boolean) => void;
}

const AccountDialogSupport = ({ goBack }: Iprops) => {
  const { t } = useTranslation();
  return (
    <AccountDialogSupportStyle
      variants={DIALOG_SLIDE_ANIMATION}
      initial="right_hidden"
      animate="visible"
      exit="right_hidden"
      className="support_cont"
    >
      <button className="back_icon" onClick={() => goBack(false)}>
        <ChevronSmallDownIcon />
      </button>
      <div className="box_icon">
        <SmileBoxBigIcon />
      </div>
      <div className="text_cont">
        <span className="title">{t("contact_support")}</span>
        <span className="subtitle">{t("write_us_to_resolve_issue")}</span>
      </div>
      <div className="button_cont">
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
    </AccountDialogSupportStyle>
  );
};

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

export default AccountDialogSupport;
