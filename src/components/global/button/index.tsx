import React from "react";
import ButtonStyle, { ButtonOptionsType } from "./style";
import * as ColorIcons from "../../../resources/icons/ColorIcons";
import * as CommonIcons from "../../../resources/icons/CommonIcons";
const AllIcons = { ...ColorIcons, ...CommonIcons };

interface Iprops {
  text: string;
  icon?: ColorIcons.ColorIconsType | CommonIcons.CommonIconsType;
  onClick: () => void;
  disabled?: boolean;
  options?: ButtonOptionsType;
}

const Button = (props: Iprops) => {
  const { text, icon, onClick, disabled, options } = props;
  return (
    <ButtonStyle
      {...options}
      disabled={disabled}
      onClick={() => !disabled && onClick()}
    >
      <span>{text}</span>
      {icon ? (
        <>
          {React.createElement(AllIcons[icon], {
            color: options?.$iconColor || "icon_color",
          })}
        </>
      ) : null}
    </ButtonStyle>
  );
};

export default Button;
