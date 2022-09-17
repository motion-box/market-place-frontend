import styled from "styled-components";

const MSellerPageStyle = styled.div`
  display: grid;
  width: 100%;
  padding: 64px 0 32px;
  gap: 24px;

  .seller_cont {
    padding: 0 16px;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 8px;
    .left_cont {
      display: grid;
      gap: 8px;
      align-items: center;
      align-content: center;
      padding-right: 4px;
      .title {
        font-size: 28px;
        font-weight: 700;
        color: var(--text_primary);
      }
    }
    .image_cont {
      position: relative;
      width: 72px;
      height: 72px;
      border-radius: 72px;
      overflow: hidden;
    }
    .bottom_cont {
      display: grid;
      grid-column: 1 / 3;
      gap: 2px;
      span {
        font-size: 14px;
        font-weight: 400;
        color: var(--select_color);
      }
    }
  }

  .last_reviews_cont {
    display: grid;
    gap: 12px;
    .titler {
      padding: 0 16px;
      display: grid;
      grid-auto-flow: column;
      justify-content: space-between;
      align-items: center;
      span {
        font-size: 18px;
        font-weight: 500;
        color: var(--text_primary);
      }
      button {
        font-size: 14px;
        font-weight: 400;
        color: var(--static_red);
      }
    }
    .scroll_cont {
      width: 100vw;
      overflow-x: scroll;
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: calc(100vw - 64px);
      gap: 8px;
      padding: 0 16px;
      ::-webkit-scrollbar {
        width: 0px;
        display: none;
      }
    }
  }

  .announcements_cont {
    display: grid;
    gap: 14px;
    .titler {
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: max-content;
      gap: 8px;
      padding: 0 16px;
      .title {
        font-size: 18px;
        font-weight: 700;
        color: var(--text_primary);
      }
      .amount {
        font-size: 18px;
        font-weight: 400;
        color: var(--text_secondary);
      }
    }
    .categories {
      display: grid;
      width: 100vw;
      overflow-x: scroll;
      grid-auto-flow: column;
      gap: 4px;
      padding: 0 16px;
      ::-webkit-scrollbar {
        width: 0px;
        display: none;
      }
      .item {
        height: 40px;
        padding: 0 16px;
        background-color: var(--card_color);
        border-radius: 8px;
        font-size: 14px;
        font-weight: 400;
        line-height: 40px;
        color: var(--text_primary);
        white-space: nowrap;
      }
    }
    .products_grid_cont {
      padding: 0 16px;
    }
  }

  @media only screen and (min-width: 501px) {
    .last_reviews_cont {
      .scroll_cont {
        grid-auto-columns: calc(50vw - 64px);
      }
    }
  }
`;

export default MSellerPageStyle;
