import styled from "styled-components";
import { ColorsPaletTypes } from "../../../resources/constants/colors";

export interface ShareButtonModel {
  $width?: number;
  $height?: number;
  $backgroundColor?: ColorsPaletTypes;
  $iconColor?: ColorsPaletTypes;
}

const ShareButtonStyle = styled.button<ShareButtonModel>`
  display: grid;
  width: ${(p) => `${p.$width || 48}px`};
  height: ${(p) => `${p.$height || 48}px`};
  background-color: ${(p) =>
    p.$backgroundColor ? `var(--${p.$backgroundColor})` : "transparent"};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  transition: 0.2s ease;
  :active {
    transform: scale(0.95);
  }
`;

export default ShareButtonStyle;
