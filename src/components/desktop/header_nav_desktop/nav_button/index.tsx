import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NavButtonStyle from "./style";
import * as ColorIcons from "../../../../resources/icons/ColorIcons";
import { ColorsPaletTypes } from "../../../../resources/constants/colors";
import { FADE_SCALE_ANIMATION } from "../../../../resources/constants/animations";

interface Iprops {
  idleIcon: ColorIcons.ColorIconsType;
  activeIcon: ColorIcons.ColorIconsType;
  id: number;
  isDialog: number | false;
  setDialog: () => void;
}

const NavButton = (props: Iprops) => {
  const { idleIcon, activeIcon, id, isDialog, setDialog } = props;

  return (
    <NavButtonStyle>
      <button
        className="nav_button"
        onClick={() => setDialog()}
        aria-label="navigation-button"
      >
        <AnimatePresence initial={false}>
          {isDialog === id ? (
            <IconWrapper icon={activeIcon} />
          ) : (
            <IconWrapper icon={idleIcon} color="text_primary" />
          )}
        </AnimatePresence>
      </button>
      {isDialog === id ? <div /> : null}
    </NavButtonStyle>
  );
};

interface IconWrapperProps {
  icon: ColorIcons.ColorIconsType;
  color?: ColorsPaletTypes;
}
const IconWrapper = ({ icon, color }: IconWrapperProps) => {
  return (
    <motion.div
      className="icon"
      variants={FADE_SCALE_ANIMATION}
      initial="hidden"
      animate="active"
      exit="hidden"
      key={icon}
    >
      {React.createElement(ColorIcons[icon], { color: color || undefined })}
    </motion.div>
  );
};
export default NavButton;
