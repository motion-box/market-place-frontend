import styled from "styled-components";

const MSearchCategoryPageStyle = styled.div`
  display: grid;
  width: 100%;
  padding: 64px 16px 90px 16px;
  gap: 12px;

  .categories_cont {
    display: grid;
    gap: 5px;
    grid-template-columns: repeat(3, 1fr);

    .item {
      display: grid;
      border-radius: 8px;
      background-color: var(--card_color);
      padding: 8px;
      gap: 5px;
      .image_cont {
        position: relative;
        height: 80px;
      }
      .name {
        font-size: 12px;
        font-weight: 400;
        color: var(--text_primary);
        text-align: center;
      }
    }
  }

  @media only screen and (min-width: 501px) {
    .categories_cont {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default MSearchCategoryPageStyle;
