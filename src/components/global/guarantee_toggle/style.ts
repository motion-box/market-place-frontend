import styled from "styled-components";

const GuaranteeToggleStyle = styled.div`
  width: 100%;
  height: 64px;
  background-color: var(--card_color);
  border-radius: 8px;
  padding: 12px 16px;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr auto;
  align-items: center;

  .text_cont {
    display: grid;
    gap: 3px;
    .title {
      font-size: 16px;
      font-weight: 400;
      color: var(--text_primary);
    }
    .description {
      font-size: 14px;
      font-weight: 400;
      color: var(--text_secondary);
    }
  }
`;
export default GuaranteeToggleStyle;
