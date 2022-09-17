import styled from "styled-components";

const QuestionsAndAnswersPageStyle = styled.div`
  display: grid;
  gap: 24px;
  grid-auto-rows: max-content;
  justify-items: center;
  h1 {
    font-size: 36px;
    font-weight: 700;
    color: var(--text_primary);
    text-align: center;
  }
  .container {
    max-width: 888px;
    width: 100%;
    display: grid;
    gap: 8px;
  }
`;

export default QuestionsAndAnswersPageStyle;
