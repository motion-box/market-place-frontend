import React from "react";
import ButtonStyle, { ButtonOptionsType } from "./style";
import * as ColorIcons from "../../../resources/icons/ColorIcons";
import * as CommonIcons from "../../../resources/icons/CommonIcons";
const AllIcons = { ...ColorIcons, ...CommonIcons };

interface Iprops {
  text: string;
  icon?: ColorIcons.ColorIconsType | CommonIcons.CommonIconsType;
  onClick: () => void;
  options?: ButtonOptionsType;
}

const Button = (props: Iprops) => {
  const { text, icon, onClick, options } = props;
  return (
    <ButtonStyle {...options} onClick={onClick}>
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
