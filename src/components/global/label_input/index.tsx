import React, { useEffect, useRef, useState } from "react";
import LabelInputStyle from "./style";
import * as AllCommonIcons from "../../../resources/icons/CommonIcons";
import { ColorsPaletTypes } from "../../../resources/constants/colors";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { FADE_BOTTOM_ANIMATION } from "../../../resources/constants/animations";

interface Iprops {
  label: string;
  text: string;
  setText: (state: string) => void;
  icon?: AllCommonIcons.CommonIconsType;
  iconColor?: ColorsPaletTypes;
  placeholder: string;
  disabled?: true;
  error?: string;
  options?: {
    width?: number | "100%";
  };
}

const LabelInput = (props: Iprops) => {
  const {
    label,
    text,
    setText,
    icon,
    iconColor = "icon_color",
    placeholder,
    disabled,
    error,
    options,
  } = props;
  const ref = useRef(null);
  const [onFocuse, setFocuse] = useState(false);
  const [errorDialog, setErrorDialog] = useState(false);

  useEffect(() => {
    if (error?.length) {
      setErrorDialog(true);
      setTimeout(() => {
        setErrorDialog(false);
      }, 4000);
    } else {
      setErrorDialog(false);
    }
  }, [error]);

  return (
    <LabelInputStyle
      disabled={disabled}
      error={error ? true : false}
      icon={icon ? true : false}
      style={{ width: options?.width || "100%" }}
    >
      <label>{label}</label>
      <input
        ref={ref}
        value={text}
        onFocus={() => setFocuse(true)}
        onBlur={() => setFocuse(false)}
        onChange={(e) => setText(e.target.value)}
        placeholder={placeholder}
      />
      {icon && (
        <div className="icon_cont">
          {React.createElement(AllCommonIcons[icon], {
            width: "20",
            height: "20",
            color: iconColor,
          })}
        </div>
      )}

      <AnimatePresence>
        {errorDialog && <ErrorDialog error={error} />}
      </AnimatePresence>
    </LabelInputStyle>
  );
};

const ErrorDialog = ({ error }: { error?: string }) => {
  return (
    <motion.div
      className="error_dialog modal_shadow"
      variants={FADE_BOTTOM_ANIMATION}
      initial="hidden"
      animate="active"
      exit="hidden"
    >
      <span>{error}</span>
    </motion.div>
  );
};

export default LabelInput;
