import styled, { css } from "styled-components";
import { ColorsPaletTypes } from "../../../resources/constants/colors";

interface Iprops {
  background?: ColorsPaletTypes;
}

const MHeaderStyle = styled.div<Iprops>`
  position: fixed;
  z-index: 1000;
  display: grid;
  width: 100%;
  height: 56px;
  padding: 0 16px;
  align-items: center;
  grid-auto-flow: column;
  background-color: ${(p) => `var(--${p.background})`};

  .container {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
  }

  .header_big_title,
  .header_small_title {
    color: var(--text_primary);
    overflow: hidden;
    display: -webkit-box;
    line-clamp: 1;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }

  .header_big_title {
    font-size: 28px;
    font-weight: 700;
  }
  .header_small_title {
    font-size: 18px;
    font-weight: 500;
  }

  .left_side,
  .right_side {
    min-width: 30px;
    display: grid;
    grid-auto-flow: column;
    gap: 16px;
  }

  .header_button {
    display: grid;
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
  }
`;

export default MHeaderStyle;
