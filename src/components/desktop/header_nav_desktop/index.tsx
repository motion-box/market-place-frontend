import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";
import { ColorIconsType } from "../../../resources/icons/ColorIcons";
import HeaderDialogsDesktop from "../header_dialogs_desktop";
import NavButton from "./nav_button";
import AccountDialog from "./nav_dialogs/account_dialog";
import MessageDialog from "./nav_dialogs/message_dialog";
import NotificationDialog from "./nav_dialogs/notification_dialog";
import HeaderNavDesktopStyle from "./style";

interface Iprops {}

interface ButtonModel {
  id: number;
  idleIcon: ColorIconsType;
  activeIcon: ColorIconsType;
}
const navButtons: ButtonModel[] = [
  { id: 0, idleIcon: "BellOutlineIcon", activeIcon: "BellColorIcon" },
  { id: 1, idleIcon: "MessageOutlineIcon", activeIcon: "MessageColorIcon" },
  { id: 2, idleIcon: "HeartOutlineIcon", activeIcon: "HeartColorIcon" },
  { id: 3, idleIcon: "UserOutlineIcon", activeIcon: "UserColorIcon" },
];

const HeaderNavDesktop = (props: Iprops) => {
  const [activeButton, setActiveButton] = useState<number | false>(false);
  const router = useRouter();

  const onButtonClick = (index: number) => {
    if (index === 2) {
      setActiveButton(false);
      router.push("/user/favorites?active=0");
      return;
    }
    setActiveButton(index !== activeButton ? index : false);
  };
  const closeDialog = () => {
    setActiveButton(false);
  };

  return (
    <HeaderNavDesktopStyle>
      {navButtons.map((item) => (
        <NavButton
          key={item.id}
          {...item}
          isDialog={activeButton}
          setDialog={() => onButtonClick(item.id)}
        />
      ))}

      <AnimatePresence>
        {activeButton === 0 ? (
          <HeaderDialogsDesktop
            key="notification"
            isDialog={activeButton === 0}
            setDialog={() => setActiveButton(false)}
          >
            <NotificationDialog />
          </HeaderDialogsDesktop>
        ) : null}
        {activeButton === 1 ? (
          <HeaderDialogsDesktop
            key="message"
            isDialog={activeButton === 1}
            setDialog={() => setActiveButton(false)}
          >
            <MessageDialog closeDialog={closeDialog} />
          </HeaderDialogsDesktop>
        ) : null}
        {activeButton === 3 ? (
          <HeaderDialogsDesktop
            key="acount"
            isDialog={activeButton === 3}
            setDialog={() => setActiveButton(false)}
          >
            <AccountDialog closeDialog={closeDialog} />
          </HeaderDialogsDesktop>
        ) : null}
      </AnimatePresence>
    </HeaderNavDesktopStyle>
  );
};

export default HeaderNavDesktop;
