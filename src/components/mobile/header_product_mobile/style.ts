import styled from "styled-components";
import { ColorsPaletTypes } from "../../../resources/constants/colors";

interface Iprops {
  background: ColorsPaletTypes;
}

const MHeaderProductStyle = styled.div<Iprops>`
  position: fixed;
  z-index: 1000;
  display: grid;
  width: 100%;
  height: 56px;
  grid-auto-flow: column;
  grid-template-columns: auto 1fr auto;
  gap: 16px;
  padding: 0 16px;
  align-items: center;
  background-color: ${(p) => `var(--${p.background})`};
  .product_cont {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: auto 1fr;
    gap: 8px;
    .image_cont {
      position: relative;
      width: 48px;
      height: 40px;
      border-radius: 4px;
      overflow: hidden;
    }
    .text_cont {
      display: grid;
      .title {
        font-size: 14px;
        font-weight: 400;
        color: var(--select_color);
        overflow: hidden;
        display: -webkit-box;
        line-clamp: 1;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
      }
      .price {
        font-size: 16px;
        font-weight: 500;
        color: var(--text_primary);
      }
    }
  }

  .right_side {
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

export default MHeaderProductStyle;
