import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { ColorsPaletTypes } from "../../../resources/constants/colors";

export interface ButtonOptionsType {
  $backgroundColor?: ColorsPaletTypes;
  $width?: "fit-content" | "100%";
  $height?: number;
  $borderColor?: ColorsPaletTypes;
  $borderRadius?: 8 | 12;
  $hoverBackgroundColor?: ColorsPaletTypes;
  $textAlign?: "start" | "center";
  $textColor?: ColorsPaletTypes;
  $buttonPaddings?: string;
  $hoverTextColor?: ColorsPaletTypes;
  $iconColor?: ColorsPaletTypes;
  $hoverIconColor?: ColorsPaletTypes;
  $hoverBorderColor?: ColorsPaletTypes;
}

const ButtonStyle = styled(motion.button)<ButtonOptionsType>`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  transition: 0.2s ease;
  position: relative;
  overflow: hidden;
  padding: ${(p) => p.$buttonPaddings || "0 20px"};

  width: ${(p) => p.$width || "fit-content"};
  height: ${(p) => `${p.$height || 48}px`};
  background-color: ${(p) => `var(--${p.$backgroundColor})` || "transparent"};
  border-radius: ${(p) => p.$borderRadius || "8px"};
  ${(p) =>
    p.$borderColor &&
    css`
      border: ${`1px solid var(--${p.$borderColor})`};
    `}

  span {
    font-size: 16px;
    font-weight: 400;
    color: ${(p) => `var(--${p.$textColor || "text_primary"})`};
    text-align: ${(p) => p.$textAlign || "center"};
  }
  span,
  svg,
  path {
    z-index: 1;
    transition: 0.2s ease;
  }

  :hover {
    ${(p) =>
      p.$hoverBackgroundColor &&
      css`
        background-color: ${`var(--${p.$hoverBackgroundColor})`};
      `}
    ${(p) =>
      p.$borderColor &&
      css`
        border: ${`1px solid var(--${
          p.$hoverBorderColor || p.$hoverBackgroundColor
        })`};
      `}
    ${(p) =>
      p.$hoverTextColor &&
      css`
        span {
          color: ${`var(--${p.$hoverTextColor})`};
        }
      `}
    ${(p) =>
      p.$hoverIconColor &&
      css`
        path {
          fill: ${`var(--${p.$hoverIconColor})`};
        }
      `}
  }
  :active {
    transform: scale(0.98);
  }
`;

export default ButtonStyle;
