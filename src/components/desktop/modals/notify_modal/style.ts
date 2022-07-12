import styled from "styled-components";

const NotifyModalStyle = styled.div`
  display: grid;
  width: 100%;
  max-width: 624px;
  background-color: var(--card_color);
  border-radius: 12px;
  padding: 36px 24px;
  position: relative;
  gap: 12px;

  h1 {
    font-size: 24px;
    color: var(--text_primary);
    font-weight: 700;
  }
  h2 {
    margin-top: 2px;
    font-size: 28px;
    color: var(--text_primary);
    font-weight: 700;
  }
  div {
    display: grid;
    gap: 5px;
  }
  span {
    font-size: 18px;
    color: var(--text_primary);
    font-weight: 400;
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

export default NotifyModalStyle;
