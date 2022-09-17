import styled from "styled-components";

const ProductGridMobileStyle = styled.div`
  display: grid;
  gap: 12px;
  .section_title_cont {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: center;
    .section_title {
      font-size: 18px;
      font-weight: 500;
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
    gap: 8px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: min-content min-content;
  }

  @media only screen and (min-width: 501px) {
    .products_grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media only screen and (min-width: 1001px) {
    .products_grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  @media only screen and (max-width: 320px) {
    .products_grid {
      grid-template-columns: 1fr;
    }
  }
`;

export default ProductGridMobileStyle;
