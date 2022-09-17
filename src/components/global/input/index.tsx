import React, { useEffect, useRef, useState } from "react";
import InputStyle from "./style";
import * as AllCommonIcons from "../../../resources/icons/CommonIcons";
import { ColorsPaletTypes } from "../../../resources/constants/colors";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { FADE_BOTTOM_ANIMATION } from "../../../resources/constants/animations";

interface Iprops {
  text: string;
  setText: (state: string) => void;
  icon?: AllCommonIcons.CommonIconsType;
  iconColor?: ColorsPaletTypes;
  placeholder: string;
  disabled?: true;
  error?: string;
  options?: {
    width?: number | "100%";
    hasBorder?: false;
  };
}

const Input = (props: Iprops) => {
  const {
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
    <InputStyle
      disabled={disabled}
      error={error ? true : false}
      icon={icon ? true : false}
      style={{ width: options?.width || "100%" }}
      hasBorder={options?.hasBorder === false ? false : true}
    >
      <input
        ref={ref}
        value={text}
        onFocus={() => setFocuse(true)}
        onBlur={() => setFocuse(false)}
        onChange={(e) => setText(e.target.value)}
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
      <AnimateSharedLayout>
        {!onFocuse ? (
          !text.length ? (
            <motion.span
              layoutId={`placeholder_${placeholder}`}
              transition={{ duration: 0.1 }}
              className="placeholder_big"
            >
              {placeholder}
            </motion.span>
          ) : (
            <motion.span
              layoutId={`placeholder_${placeholder}`}
              transition={{ duration: 0.1 }}
              className="placeholder_small"
            >
              {placeholder}
            </motion.span>
          )
        ) : (
          <motion.span
            layoutId={`placeholder_${placeholder}`}
            transition={{ duration: 0.1 }}
            className="placeholder_small"
          >
            {placeholder}
          </motion.span>
        )}
      </AnimateSharedLayout>
      <AnimatePresence>
        {errorDialog && <ErrorDialog error={error} />}
      </AnimatePresence>
    </InputStyle>
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

export default Input;
