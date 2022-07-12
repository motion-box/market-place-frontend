import styled from "styled-components";

const ProductsGridDesktopStyle = styled.section`
  display: grid;
  gap: 24px;
  .section_title_cont {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: center;
    .section_title {
      font-size: 28px;
      font-weight: 700;
      color: var(--text_primary);
    }
    .see_all {
      display: grid;
      grid-auto-flow: column;
      gap: 4px;
      text-decoration: none;
      span {
        font-size: 16px;
        font-weight: 500;
        color: var(--static_red);
      }
      svg {
        transform: rotate(-90deg);
      }
    }
  }
  .products_grid {
    display: grid;
    gap: 24px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export default ProductsGridDesktopStyle;
