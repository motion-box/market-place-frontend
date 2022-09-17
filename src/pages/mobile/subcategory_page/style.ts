import styled from "styled-components";

const MSubcategoryPageStyle = styled.div`
  display: grid;
  width: 100%;
  .filter_cont {
    width: 100%;
    top: 56px;
    position: fixed;
    background-color: var(--bg_color);
    z-index: 1000;
    padding-bottom: 8px;
  }

  .subcategories_cont {
    width: 100%;
    top: 56px;
    position: fixed;
    background-color: var(--bg_color);
    z-index: 1000;
    padding-bottom: 8px;
    .scroller {
      display: grid;
      grid-auto-columns: max-content;
      grid-auto-flow: column;
      overflow-x: scroll;
      padding: 0 16px;
      gap: 4px;
      .item {
        display: grid;
        height: 40px;
        width: fit-content;
        gap: 4px;
        align-items: center;
        background-color: var(--card_color);
        border-radius: 8px;
        padding: 0 16px;
        span {
          inline-size: max-content;
          font-size: 14px;
          font-weight: 400;
          color: var(--select_color);
        }
      }
    }
  }

  .page_container {
    padding: 122px 16px 32px;
  }
`;

export default MSubcategoryPageStyle;
