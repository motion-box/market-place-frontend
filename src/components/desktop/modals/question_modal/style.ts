import styled from "styled-components";

const QuestionModalStyle = styled.div`
  display: grid;
  width: 100%;
  max-width: 456px;
  background-color: var(--card_color);
  border-radius: 12px;
  padding: 36px 24px;
  position: relative;
  gap: 12px;
  justify-items: center;

  h1 {
    font-size: 28px;
    font-weight: 700;
    color: var(--text_primary);
    text-align: center;
  }

  .buttons_cont {
    display: grid;
    grid-auto-flow: column;
    gap: 16px;
    grid-template-columns: 76px 94px;
  }

  .close_button {
    position: absolute;
    right: 8px;
    top: 8px;
    width: 30px;
    height: 30px;
    display: grid;
    justify-content: center;
    align-items: center;
    transition: 0.3s ease;
    border-radius: 15px;
    :hover {
      background-color: var(--bg_color);
    }
  }
`;

export default QuestionModalStyle;
