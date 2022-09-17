import styled from "styled-components";

const AccordionItemStyle = styled.div`
  display: grid;
  overflow: hidden;
  background-color: var(--card_color);
  border-radius: 12px;
  .title_cont {
    padding: 24px;
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
    cursor: pointer;
    h2 {
      user-select: none;
      font-weight: 700;
      font-size: 20px;
      color: var(--text_primary);
    }
    .chevron {
      transition: 0.3s;
    }
    .chevron_active {
      transform: rotate(180deg);
    }
    svg {
      path {
        stroke: var(--text50);
      }
    }
  }
  p {
    padding: 0 24px;
    max-width: calc(100% - 74px);
    height: 0;
    user-select: none;
    font-size: 16px;
    font-weight: 400;
    color: var(--text_primary);
  }
`;

export default AccordionItemStyle;
