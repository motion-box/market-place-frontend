import { useTranslation } from "next-i18next";
import Button from "../../../../global/button";
import MessageDialogStyle from "./style";

interface Iprops {}

const MessageDialog = (props: Iprops) => {
  const { t } = useTranslation();
  return (
    <MessageDialogStyle>
      <span className="title">{t("need_sign_in_to_write_message")}</span>
      <Button
        text={t("sign_in")}
        onClick={() => console.log("login")}
        options={{
          $width: "100%",
          $backgroundColor: "static_red",
          $textColor: "static_white",
        }}
      />
    </MessageDialogStyle>
  );
};
export default MessageDialog;
