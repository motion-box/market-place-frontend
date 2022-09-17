import styled from "styled-components";

const OrderHeaderStyle = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr auto;
  align-items: center;
  gap: 16px;
  padding: 12px;
  padding-right: 50px;
  border-radius: 8px;
  background-color: var(--card_color);

  .product_cont {
    display: grid;
    grid-auto-flow: column;
    gap: 16px;
    grid-template-columns: auto 1fr;
    align-items: center;
    .image_cont {
      position: relative;
      width: 72px;
      height: 72px;
      border-radius: 4px;
      overflow: hidden;
    }
    .text_cont {
      display: grid;
      gap: 5px;
      align-items: center;
      .title {
        font-size: 18px;
        font-weight: 500;
        color: var(--text_primary);
        overflow: hidden;
        display: -webkit-box;
        line-clamp: 2;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
      }
      .price {
        font-size: 16px;
        font-weight: 400;
        color: var(--text_primary);
      }
    }
  }

  .data_cont {
    display: grid;
    grid-auto-flow: column;
    justify-content: center;
    justify-items: center;
    gap: 8px;
    .left_cont {
      display: grid;
      gap: 5px;
      span {
        /* text-align: end; */
        font-size: 16px;
        font-weight: 400;
        color: var(--select_color);
      }
    }
    .right_cont {
      display: grid;
      gap: 5px;
      span {
        font-size: 16px;
        font-weight: 400;
        color: var(--text_primary);
      }
    }
  }
  .status_cont {
    display: grid;
    gap: 5px;
    .status_type {
      grid-auto-columns: max-content;
      display: grid;
      grid-auto-flow: column;
      align-items: center;
      gap: 8px;
      font-size: 16px;
      font-weight: 400;
    }
    .order_date {
      font-size: 16px;
      font-weight: 400;
      color: var(--select_color);
    }
  }
`;

export default OrderHeaderStyle;
