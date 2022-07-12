import { useTranslation } from "next-i18next";
import { AddColorIcon } from "../../../resources/icons/ColorIcons";
import CreateAnnouncementBtnStyle from "./style";

interface Iprops {}

const CreateAnnouncementBtn = (props: Iprops) => {
  const { t } = useTranslation();
  return (
    <CreateAnnouncementBtnStyle onClick={() => alert("make order")}>
      <AddColorIcon />
      <span>{t("create_announcement")}</span>
    </CreateAnnouncementBtnStyle>
  );
};

export default CreateAnnouncementBtn;
