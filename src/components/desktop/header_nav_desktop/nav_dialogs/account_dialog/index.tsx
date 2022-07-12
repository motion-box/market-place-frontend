import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import AccountDialogStyle from "./style";
import AccountDialogMain from "./account_dialog_main";
import AccountDialogSupport from "./account_dialog_support";

interface Iprops {
  closeDialog: () => void;
}

const AccountDialog = ({ closeDialog }: Iprops) => {
  const [activeTab, setActiveTab] = useState<string | boolean>(false);
  return (
    <AccountDialogStyle>
      <AnimatePresence exitBeforeEnter>
        {activeTab === false ? (
          <AccountDialogMain
            key="main"
            setActiveTab={setActiveTab}
            closeDialog={closeDialog}
          />
        ) : (
          <AccountDialogSupport key="support" goBack={setActiveTab} />
        )}
      </AnimatePresence>
    </AccountDialogStyle>
  );
};

export default AccountDialog;
