import styled from "styled-components";
import { ColorsPaletTypes } from "../../../resources/constants/colors";

interface Iprops {
  background: ColorsPaletTypes;
}

const MHeaderSearchStyle = styled.div<Iprops>`
  position: fixed;
  z-index: 1000;
  display: grid;
  width: 100%;
  height: 56px;
  grid-auto-flow: column;
  align-items: center;
  padding: 0 16px;
  grid-template-columns: auto 1fr;
  gap: 16px;
  background-color: ${(p) => `var(--${p.background})`};

  .input_cont {
    display: grid;
    grid-auto-flow: column;
    background-color: var(--card_color);
    height: 36px;
    position: relative;
    /* padding: 0 26px 0 38px; */
    align-items: center;
    border: 1px solid var(--border_color);
    border-radius: 8px;
    grid-template-columns: 1fr auto;

    .search_icon {
      position: absolute;
      left: 12px;
      top: 9px;
      pointer-events: none;
    }

    input {
      height: 100%;
      padding: 0 0 0 38px;
      font-size: 14px;
      font-weight: 400;
      color: var(--text_primary);
      ::placeholder {
        font-size: 14px;
        font-weight: 400;
        color: var(--text_secondary);
      }
    }

    .close_btn {
      display: grid;
      width: 34px;
      height: 34px;
      justify-content: center;
      align-items: center;
    }
  }

  .header_button {
    display: grid;
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
  }
`;

export default MHeaderSearchStyle;
