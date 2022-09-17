import styled from "styled-components";

const OrderCardStyle = styled.a`
  display: grid;
  grid-auto-flow: column;
  gap: 16px;
  padding: 12px;
  background-color: var(--card_color);
  border-radius: 8px;
  align-items: center;
  grid-template-columns: auto 1fr;
  cursor: pointer;

  .image_cont {
    position: relative;
    width: 72px;
    height: 60px;
    border-radius: 4px;
    overflow: hidden;
  }

  .content_cont {
    display: grid;
    grid-template-columns: 1fr 0.8fr;

    .product_cont {
      display: grid;
      gap: 5px;
      margin-right: 62px;
      .title {
        font-size: 18px;
        font-weight: 500;
        color: var(--text_primary);
      }
      .price {
        font-size: 16px;
        font-weight: 400;
        color: var(--text_primary);
      }
    }
    .status_cont {
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: 1fr 1fr;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      .status_type {
        display: grid;
        align-items: center;
        position: relative;
        gap: 4px;
        grid-auto-rows: max-content;

        .status_card {
          grid-auto-columns: max-content;
          display: grid;
          grid-auto-flow: column;
          align-items: center;
          gap: 8px;
          font-size: 16px;
          font-weight: 400;
        }
        .description {
          display: grid;
          grid-auto-flow: column;
          width: 140px;
          div {
            left: -62px;
            position: absolute;
            height: 25px;
            background-color: var(--static_green);
            padding: 0 8px;
            border-radius: 4px;
            font-size: 14px;
            font-weight: 400;
            line-height: 25px;
            color: var(--static_white);
          }
          span {
            font-size: 16px;
            font-weight: 400;
            color: var(--text_secondary);
          }
        }
      }
      .status_description {
        font-size: 16px;
        font-weight: 400;
        color: var(--text_secondary);
      }
    }
  }

  @media only screen and (max-width: 1000px) {
    background-color: transparent;
    border-radius: 0;
    gap: 12px;
    padding: 16px 16px 16px 0;
    border-bottom: 1px solid var(--border_color);
    align-items: start;
    .image_cont {
      width: 96px;
      height: 82px;
    }
    .content_cont {
      grid-auto-flow: row;
      grid-template-columns: 1fr;
      gap: 5px;
      .product_cont {
        margin-right: 0;
        .title {
          font-size: 13px;
          font-weight: 400;
          overflow: hidden;
          display: -webkit-box;
          line-clamp: 1;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
        }
        .price {
          font-weight: 500;
        }
      }
      .status_cont {
        grid-auto-flow: row;
        grid-template-columns: 1fr;

        .status_type {
          .status_card {
            font-size: 12px;
          }
          .description {
            width: 100%;
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-between;
            gap: 16px;

            div {
              position: relative;
              left: 0;
            }
            span {
              font-size: 14px;
            }
          }
        }
        .status_description {
          font-size: 14px;
        }
      }
    }
  }
`;

export default OrderCardStyle;
