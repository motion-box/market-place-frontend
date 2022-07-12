import styled from "styled-components";

const ChatHeaderDesktopStyle = styled.div`
  display: grid;
  z-index: 99;
  width: 100%;
  background-color: var(--card_color);
  border: 1px solid var(--border_color);
  border-radius: 8px;
  grid-auto-flow: column;
  grid-template-columns: auto 1fr;
  gap: 16px;
  padding: 12px;
  align-items: center;

  .image_cont {
    position: relative;
    width: 72px;
    height: 72px;
    border-radius: 4px;
    overflow: hidden;
  }

  .title_cont {
    display: grid;
    gap: 3px;
    grid-auto-rows: max-content;
    .title {
      font-size: 18px;
      font-weight: 500;
      color: var(--text_primary);
      overflow: hidden;
      display: -webkit-box;
      line-clamp: 1;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
    }
    .price_cont {
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: max-content;
      gap: 12px;

      .price {
        font-size: 20px;
        font-weight: 500;
        color: var(--text_primary);
        line-height: 25px;
      }
      .old_price {
        width: fit-content;
        margin-top: 2px;
        font-size: 16px;
        font-weight: 400;
        color: var(--select_color);
        line-height: 20px;
        position: relative;
        s {
          left: 0;
          top: 40%;
          position: absolute;
          width: 100%;
          height: 2px;
          background-color: var(--static_red);
        }
      }
    }
  }
  .author_cont {
    display: grid;
    grid-auto-flow: column;
    gap: 40px;
    align-items: center;

    .author,
    .date {
      font-size: 16px;
      font-weight: 400;
      color: var(--select_color);
    }

    .options_cont {
      position: relative;

      .option_button {
        width: 40px;
        height: 40px;
        display: grid;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .dialog {
    position: absolute;
    display: grid;
    width: 376px;
    right: -5px;
    top: -15px;
    background-color: var(--card_color);
    padding: 24px;
    border-radius: 12px;
    gap: 24px;

    .close_button {
      position: absolute;
      top: 8px;
      right: 8px;
      width: 30px;
      height: 30px;
      display: grid;
      justify-content: center;
      align-items: center;
    }
    .dialog_title {
      font-size: 18px;
      font-weight: 500;
      color: var(--text_primary);
    }

    .options_cont {
      display: grid;
      gap: 8px;
    }
  }
`;

export default ChatHeaderDesktopStyle;
