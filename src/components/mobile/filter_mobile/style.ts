import styled from "styled-components";

const FilterMobileStyle = styled.div`
  display: grid;
  width: 100%;

  .scroller {
    width: 100%;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    overflow-x: scroll;
    padding: 0 16px;
    gap: 4px;

    .item {
      display: grid;
      height: 40px;
      grid-template-columns: 1fr auto;
      grid-auto-columns: max-content;
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
`;

export default FilterMobileStyle;
