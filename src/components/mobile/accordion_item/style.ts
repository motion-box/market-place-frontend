import styled from "styled-components";

interface Iprops {
  lastElement: boolean;
}
const AccordionItemStyle = styled.div<Iprops>`
  display: grid;
  overflow: hidden;
  border-bottom: ${(p) =>
    !p.lastElement ? `1px solid var(--border_color)` : ""};
  .title_cont {
    padding: 16px 16px 16px 0;
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    h2 {
      user-select: none;
      font-weight: 500;
      font-size: 16px;
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
    padding-right: 16px;
    width: 100%;
    height: 0;
    user-select: none;
    font-size: 14px;
    font-weight: 400;
    color: var(--text_primary);
  }
`;

export default AccordionItemStyle;
