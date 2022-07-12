import styled from "styled-components";

const MessageModalStyle = styled.div`
  display: grid;
  width: 100%;
  max-width: 456px;
  background-color: var(--card_color);
  border-radius: 12px;
  padding: 0 24px 36px;
  position: relative;
  gap: 24px;
  justify-items: center;

  .icon_cont {
    position: relative;
    height: 64px;
    width: 128px;
    svg {
      position: absolute;
      top: -64px;
    }
  }

  .text_cont {
    display: grid;
    gap: 12px;
    h1 {
      font-size: 28px;
      font-weight: 700;
      color: var(--text_primary);
      text-align: center;
    }

    span {
      font-size: 18px;
      font-weight: 400;
      color: var(--text_primary);
      text-align: center;
    }
  }

  .buttons_cont {
    width: 100%;
    display: grid;
    gap: 8px;
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

export default MessageModalStyle;
