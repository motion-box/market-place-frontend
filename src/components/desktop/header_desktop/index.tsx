import Link from "next/link";
import { MainColorIcon } from "../../../resources/icons/ColorIcons";
import LanguagePickerDesktop from "../language_picker_desktop";
import SearchInput from "../../global/search_input";
import HeaderStyle from "./style";
import CreateAnnouncementBtn from "../create_announcement_btn";
import HeaderNavDesktop from "../header_nav_desktop";
import { useTranslation } from "next-i18next";

interface Iprops {}

const HeaderDesktop = (props: Iprops) => {
  const { t } = useTranslation();
  return (
    <HeaderStyle>
      <div className="wrapper">
        <div className="left_cont">
          <Link href="/">
            <a className="logo">
              <MainColorIcon width="36" height="36" />
              <h1>{t("logo")}</h1>
            </a>
          </Link>
          {/* <SearchInput
            placeholder={t("search_announcements")}
            styles={{
              backgroundColor: "bg_color",
            }}
          /> */}
        </div>
        <div className="right_cont">
          <LanguagePickerDesktop />
          <CreateAnnouncementBtn />
          <HeaderNavDesktop />
        </div>
      </div>
    </HeaderStyle>
  );
};

export default HeaderDesktop;
