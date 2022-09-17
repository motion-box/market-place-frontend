import { useTranslation } from "next-i18next";
import Link from "next/link";
import { AddColorIcon } from "../../../resources/icons/ColorIcons";
import CreateAnnouncementBtnStyle from "./style";

interface Iprops {}

const CreateAnnouncementBtn = (props: Iprops) => {
  const { t } = useTranslation();

  return (
    <Link href="/create_announcement/">
      <CreateAnnouncementBtnStyle>
        <AddColorIcon />
        <span>{t("create_announcement")}</span>
      </CreateAnnouncementBtnStyle>
    </Link>
  );
};

export default CreateAnnouncementBtn;
