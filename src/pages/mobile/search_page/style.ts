import styled from "styled-components";

const MSearchPageStyle = styled.div`
  display: grid;
  width: 100%;
  padding: 64px 16px 32px;
  gap: 13px;

  .top_cont {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 8px;
    margin-bottom: 3px;

    .cancel {
      width: 100%;
      height: 100%;
      text-align: center;
      font-size: 16px;
      font-weight: 400;
      color: var(--static_red);
    }
  }

  h1 {
    font-size: 18px;
    font-weight: 500;
    color: var(--text_primary);
  }

  .results_cont {
    display: grid;
    width: 100%;
    grid-auto-rows: max-content;
    min-height: calc(100vh - 195px);
    padding-left: 16px;
    background-color: var(--card_color);
    border-radius: 8px;
    .item {
      width: 100%;
      height: 52px;
      font-size: 16px;
      font-weight: 400;
      color: var(--text_primary);
      text-align: start;
      border-bottom: 1px solid var(--border_color);
    }
  }
`;

export default MSearchPageStyle;
