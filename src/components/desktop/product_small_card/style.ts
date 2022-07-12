import styled from "styled-components";

const ProductSmallCardStyle = styled.div`
  display: grid;
  width: 624px;
  background-color: var(--card_color);
  border: 1px solid var(--border_color);
  border-radius: 8px;
  grid-auto-flow: column;
  grid-template-columns: auto 1fr;
  gap: 16px;
  padding: 12px;

  .image_cont {
    position: relative;
    width: 72px;
    height: 72px;
    border-radius: 4px;
    overflow: hidden;
  }

  .content_cont {
    display: grid;
    gap: 3px;
    grid-auto-rows: max-content;
    .title {
      font-size: 18px;
      font-weight: 500;
      color: var(--text_primary);
    }
    .price_cont {
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: max-content;
      gap: 12px;

      .price {
        font-size: 20px;
        font-weight: 500;
        color: var(--text_primary);
        line-height: 25px;
      }
      .old_price {
        width: fit-content;
        margin-top: 2px;
        font-size: 16px;
        font-weight: 400;
        color: var(--select_color);
        line-height: 20px;
        position: relative;
        s {
          left: 0;
          top: 40%;
          position: absolute;
          width: 100%;
          height: 2px;
          background-color: var(--static_red);
        }
      }
    }
  }
`;

export default ProductSmallCardStyle;
