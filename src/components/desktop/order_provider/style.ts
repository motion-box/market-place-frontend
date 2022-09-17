import styled from "styled-components";

const OrderProviderStyle = styled.div`
  display: grid;
  width: 100%;
  justify-items: center;
  background-color: var(--card_color);

  .page_wrapper {
    display: grid;
    gap: 24px;
    grid-auto-rows: max-content;
    justify-items: center;
  }

  h1 {
    font-size: 36px;
    font-weight: 700;
    color: var(--text_primary);
  }

  .card_cont {
    width: 100%;
    max-width: 888px;
    padding: 24px 24px 48px 24px;
    border-radius: 12px;
    background-color: var(--bg_color);
    display: grid;
    gap: 48px;
    justify-items: center;

    .header {
      width: 100%;
      padding: 12px 20px 12px 12px;
      background-color: var(--card_color);
      border-radius: 8px;
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      gap: 16px;

      .image_cont {
        position: relative;
        width: 72px;
        height: 72px;
        border-radius: 4px;
        overflow: hidden;
      }

      .text_cont {
        display: grid;
        gap: 3px;
        align-items: center;

        .title {
          font-size: 18px;
          font-weight: 500;
          color: var(--text_primary);
        }
        .price_cont {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: max-content;
          align-items: center;
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
              top: 50%;
              position: absolute;
              width: 100%;
              height: 2px;
              background-color: var(--static_red);
            }
          }
        }
      }
      .author {
        font-size: 16px;
        font-weight: 400;
        color: var(--select_color);
      }
    }

    .card {
      display: grid;
      width: 408px;
      gap: 24px;
    }
  }
`;

export default OrderProviderStyle;
