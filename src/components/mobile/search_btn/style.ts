import styled from "styled-components";

const MSearchBtnStyle = styled.button`
  display: grid;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  border: 1px solid var(--border_color);
  background-color: var(--card_color);
  grid-auto-flow: column;
  grid-template-columns: auto 1fr;
  gap: 8px;
  align-items: center;
  padding: 0 16px;
  span {
    text-align: start;
    font-size: 16px;
    font-weight: 400;
    color: var(--text_secondary);
  }
`;

export default MSearchBtnStyle;
