import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import NotificationDialogMain from "./notification_dialog_main";
import NotificationDialogDetail from "./notification_dialog_detail";
import NotificationDialogStyle from "./style";

interface Iprops {}

const NotificationDialog = (props: Iprops) => {
  const [activeTab, setActiveTab] = useState<string | boolean>(false);
  return (
    <NotificationDialogStyle>
      <AnimatePresence exitBeforeEnter>
        {activeTab === false ? (
          <NotificationDialogMain
            onItemClick={setActiveTab}
            key="notification"
          />
        ) : (
          <NotificationDialogDetail
            key="notification_item"
            goBack={setActiveTab}
          />
        )}
      </AnimatePresence>
    </NotificationDialogStyle>
  );
};

export default NotificationDialog;
