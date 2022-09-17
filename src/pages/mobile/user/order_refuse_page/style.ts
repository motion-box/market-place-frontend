import styled from "styled-components";

const MOrderRefusePageStyle = styled.div`
  display: grid;
  width: 100%;
  padding: 80px 16px;
  position: relative;
  gap: 12px;

  .title {
    font-size: 18px;
    font-weight: 500;
    color: var(--text_primary);
  }

  textarea {
    margin-top: 4px;
    height: 120px;
    padding: 12px 16px;
    outline: none;
    resize: none;
    border: 1px solid var(--border_color);
    border-radius: 8px;
    font-size: 16px;
    color: var(--text_primary);
    background-color: var(--card_color);
    ::placeholder {
      font-size: 16px;
      color: var(--select_color);
    }
  }

  .bottom_cont {
    margin-top: 4px;
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
  }

  .selector {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 4px;
    .selector_item {
      height: 34px;
      background-color: var(--card_color);
      border-radius: 6px;
      padding: 0 16px;
      color: var(--text_primary);
      font-weight: 500;
      font-size: 14px;
    }

    .active_item {
      background-color: var(--select_color);
      color: var(--card_color);
      font-weight: 500;
      font-size: 14px;
    }
  }
`;

export default MOrderRefusePageStyle;
