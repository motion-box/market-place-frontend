import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Button from "../../../../global/button";
import MessageDialogStyle from "./style";

interface Iprops {
  closeDialog: () => void;
}

const MessageDialog = (props: Iprops) => {
  const { closeDialog } = props;
  const { t } = useTranslation();
  const router = useRouter();

  const onLoginClick = () => {
    closeDialog();
    router.push("/login/");
  };
  return (
    <MessageDialogStyle>
      <span className="title">{t("need_sign_in_to_write_message")}</span>
      <Button
        text={t("sign_in")}
        onClick={onLoginClick}
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
