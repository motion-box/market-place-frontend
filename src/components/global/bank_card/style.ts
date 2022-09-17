import styled, { css } from "styled-components";

interface Iprops {
  type: "UZCARD" | "HUMO" | string;
}

const BankCardStyle = styled.div<Iprops>`
  display: grid;
  width: 100%;
  aspect-ratio: 1 / 0.6;
  align-content: space-between;
  border-radius: 8px;
  padding: 24px;
  position: relative;
  ${(props) =>
    props.type === "UZCARD"
      ? css`
          background: rgb(113, 13, 157);
          background: linear-gradient(
            45deg,
            rgba(113, 13, 157, 1) 0%,
            rgba(36, 144, 211, 1) 100%
          );
        `
      : css`
          background: rgb(204, 169, 18);
          background: linear-gradient(
            45deg,
            rgba(204, 169, 18, 1) 0%,
            rgba(211, 36, 36, 1) 100%
          );
        `}

  .top_container {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    height: fit-content;
    button {
      height: 24px;
    }
  }
  .bottom_container {
    display: grid;
    height: fit-content;
    gap: 4px;
    .main {
      width: fit-content;
      padding: 0 8px;
      line-height: 25px;
      height: 25px;
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0.2);
      color: var(--static_white);
      font-size: 14px;
    }
    .num {
      font-size: 36px;
      font-weight: 500;
      color: var(--static_white);
    }
  }

  .dialog_cont {
    width: 376px;
    padding: 24px;
    display: grid;
    gap: 24px;
    position: absolute;
    top: 8px;
    right: 8px;
    background-color: var(--card_color);
    border-radius: 8px;
    z-index: 90;

    .close_btn {
      position: absolute;
      top: 8px;
      right: 8px;
    }

    .title {
      font-size: 18px;
      font-weight: 500;
      color: var(--text_primary);
    }

    .buttons_block {
      display: grid;
      gap: 8px;
    }
  }

  @media only screen and (max-width: 1440px) {
    .bottom_container {
      .num {
        font-size: 2.2vw;
      }
    }
  }
  @media only screen and (max-width: 1000px) {
    .bottom_container {
      .num {
        font-size: 22px;
      }
    }
  }
`;

export default BankCardStyle;
