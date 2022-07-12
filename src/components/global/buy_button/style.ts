import styled from "styled-components";

const BuyButtonStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  width: 100%;
  height: 60px;
  border-radius: 12px;
  background-color: var(--select_color);
  padding: 6px;
  gap: 36px;
  .left_cont {
    display: grid;
    align-items: center;
    .top_cont {
      display: grid;
      grid-auto-flow: column;
      width: fit-content;
      gap: 4px;
      .guarantee_text {
        font-size: 14px;
        font-weight: 400;
        color: var(--static_gray);
      }
      .price_text {
        font-size: 14px;
        font-weight: 400;
        color: var(--static_gray);
      }
    }
    .price {
      padding-left: 20px;
      font-size: 18px;
      font-weight: 500;
      color: var(--card_color);
    }
  }
`;
export default BuyButtonStyle;
