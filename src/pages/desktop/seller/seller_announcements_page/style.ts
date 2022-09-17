import styled from "styled-components";

const SellerAnnouncementsPageStyle = styled.div`
  display: grid;
  width: 100%;
  background-color: var(--card_color);

  .products_cont {
    display: grid;
    gap: 24px;
    .tags_cont {
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: max-content;
      gap: 12px;
      .tag_item {
        height: 42px;
        padding: 0 16px;
        background-color: var(--card_color);
        border-radius: 8px;

        line-height: 42px;
        font-size: 16px;
        font-weight: 400;
        color: var(--select_color);
      }
    }
  }
`;

export default SellerAnnouncementsPageStyle;
