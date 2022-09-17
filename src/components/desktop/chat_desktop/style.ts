import styled from "styled-components";

const ChatDesktopStyle = styled.div`
  display: grid;
  width: 100%;
  max-width: 880px;
  height: 450px;
  justify-self: center;
  position: relative;

  .messages_cont {
    padding: 20px 20px 50px;
    display: grid;
    width: 100%;
    height: 420px;
    overflow-y: scroll;
    gap: 8px;

    .date_cont {
      width: fit-content;
      height: 34px;
      justify-self: center;
      background-color: var(--card_color);
      border-radius: 18px;
      margin: 6px 0;
      padding: 0 20px;

      font-size: 14px;
      font-weight: 500;
      color: var(--text_primary);
      line-height: 34px;
      text-align: center;
    }
  }

  .chat_input {
    position: absolute;
    bottom: 0px;
    left: 20px;
    width: calc(100% - 40px);
    height: 60px;
    border-radius: 30px;
    border: 1px solid var(--border_color);
    background-color: var(--card_color);
    z-index: 1;
    display: grid;
    grid-template-columns: auto 1fr auto;

    input {
      font-size: 16px;
      font-weight: 400;
      color: var(--text_primary);
      ::placeholder {
        font-size: 16px;
        font-weight: 400;
        color: var(--text_secondary);
      }
    }

    button {
      display: grid;
      justify-content: center;
      align-items: center;
    }
    .file {
      padding: 15px 16px 15px 20px;
      transition: 0.3s;
      path {
        transition: 0.3s;
      }
      :hover {
        path {
          fill: var(--static_yellow);
        }
      }
    }
    .send {
      padding: 15px 20px 15px 16px;
      path {
        transition: 0.3s;
      }
      :hover {
        path {
          fill: var(--static_green);
        }
      }
    }
  }
`;

export default ChatDesktopStyle;
