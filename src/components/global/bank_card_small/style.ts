import styled, { css } from "styled-components";

interface Iprops {
  width?: "100%";
  type: "UZCARD" | "HUMO" | string;
  active: boolean;
}

const BankCardSmallStyle = styled.div<Iprops>`
  display: grid;
  width: ${(p) => (p.width ? p.width : "268px")};
  height: 77px;
  border-radius: 8px;
  padding: 8px;
  align-content: space-between;
  transition: 0.3s ease;
  cursor: pointer;

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
  ${(props) =>
    !props.active &&
    css`
      opacity: 0.5;
    `}

  .top_cont {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    svg {
      margin-top: 8px;
      margin-left: 8px;
    }
    .main {
      width: fit-content;
      padding: 0 8px;
      line-height: 20px;
      height: 20px;
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0.2);
      color: var(--static_white);
      font-size: 10px;
    }
  }
  .bottom_cont {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: end;
    .num {
      margin-left: 8px;
      margin-bottom: 8px;
      font-size: 20px;
      font-weight: 500;
      color: var(--static_white);
    }

    .checkmark {
      width: 20px;
      height: 20px;
      background-color: var(--static_white);
      border-radius: 20px;
      display: grid;
      justify-content: center;
      align-items: center;
      padding-left: 1px;
    }
  }
`;

export default BankCardSmallStyle;
