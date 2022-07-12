import styled, { css } from "styled-components";

interface Iprops {
  type: "you" | "companion" | "market";
  has_image?: boolean;
}

export const MarketItemStyle = styled.div<Iprops>`
  display: grid;
  width: 328px;
  background-color: var(--card_color);
  border-radius: 12px;
  padding: 16px;
  justify-self: center;
  margin: 8px 0;

  .date {
    font-size: 12px;
    font-weight: 400;
    color: var(--text_secondary);
    text-align: center;
  }
  .title {
    font-size: 16px;
    font-weight: 400;
    color: var(--text_primary);
    text-align: center;
  }
  .price {
    font-size: 20px;
    font-weight: 500;
    color: var(--text_primary);
    text-align: center;
    margin: 8px 0;
  }

  .buttons_cont {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    gap: 8px;
  }
`;

export const ChatItemStyle = styled.div<Iprops>`
  display: grid;

  .item_cont {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    max-width: 516px;
    width: fit-content;
    height: fit-content;
    position: relative;
    overflow: hidden;
    padding: 16px 16px 9px;
    display: grid;

    ${(props) =>
      props.has_image &&
      css`
        width: 296px;
        height: 240px;
        padding: 16px 16px 5px;
        background-color: var(--card_color) !important;
      `}

    .message {
      font-size: 16px;
      font-weight: 400;
    }

    .image_wrapper {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
      .image {
        position: relative;
        width: 100%;
        height: 100%;
      }
    }
    .bottom_cont {
      display: grid;
      width: fit-content;
      margin: 0;
      grid-auto-flow: column;
      justify-content: end;
      align-items: center;
      justify-self: end;
      gap: 4px;
      ${(props) =>
        props.has_image &&
        css`
          align-self: end;
          border-radius: 8px;
          background-color: rgba(0, 0, 0, 0.1);
          height: 22px;
          padding: 0 6px;
        `}

      span {
        font-size: 12px;
        font-weight: 400;
      }
    }
  }

  ${(props) =>
    props.type === "you" &&
    css`
      .item_cont {
        background-color: var(--static_red);
        border-bottom-left-radius: 16px;
        border-bottom-right-radius: 4px;
        justify-self: end;

        .message {
          color: var(--static_white);
        }

        .bottom_cont {
          span {
            color: var(--static_white50);
          }
        }
      }
    `}

  ${(props) =>
    props.type === "companion" &&
    css`
      .item_cont {
        background-color: var(--card_color);
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 16px;

        .message {
          color: var(--text_primary);
        }

        .bottom_cont {
          span {
            color: var(--text_secondary);
          }
        }
      }
    `}
`;
