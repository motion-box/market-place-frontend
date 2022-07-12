import styled from "styled-components";
import { motion } from "framer-motion";
import { ColorsPaletTypes } from "../../../resources/constants/colors";

export interface LikeButtonProps {
  $iconColor?: ColorsPaletTypes;
  $isShadow?: boolean;
  $width?: number;
  $height?: number;
  $backgroundColor?: ColorsPaletTypes;
}

const LikeButtonStyle = styled(motion.button)<LikeButtonProps>`
  display: grid;
  width: ${(p) => `${p.$width || 40}px`};
  height: ${(p) => `${p.$height || 40}px`};
  display: grid;
  position: relative;
  border-radius: 8px;
  background-color: ${(p) =>
    p.$backgroundColor ? `var(--${p.$backgroundColor})` : "transparent"};
  .icon {
    position: absolute;
    width: 100%;
    height: 100%;
    display: grid;
    justify-content: center;
    align-items: center;
    /* transform: translate(-50%, 50%); */
  }
`;

export default LikeButtonStyle;
