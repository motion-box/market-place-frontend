import styled from "styled-components";
import { ColorsPaletTypes } from "../../../resources/constants/colors";

interface Iprops {
  backgroundColor?: ColorsPaletTypes;
  textColor?: ColorsPaletTypes;
  placeholderColor?: ColorsPaletTypes;
  height?: 48 | 60;
}

const SearchInputStyle = styled.div<Iprops>`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr auto;
  background-color: ${(p) => `var(--${p.backgroundColor || "icon_color"})`};
  height: ${(p) => `${p.height || 48}px`};
  border-radius: 8px;
  position: relative;

  svg {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
  input {
    padding-left: 56px;
    padding-right: 20px;
    width: 100%;
    color: ${(p) => `var(--${p.textColor || "text_primary"})`};
  }
  input::placeholder {
    color: ${(p) => `var(--${p.placeholderColor || "select_color"})`};
  }
`;

export default SearchInputStyle;
