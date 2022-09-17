import styled from "styled-components";

const MMessagesChatRoomPageStyle = styled.div`
  display: grid;
  width: 100%;
  padding-top: 104px;

  .product_btn {
    z-index: 1000;
    position: fixed;
    display: grid;
    width: 100%;
    height: 48px;
    top: 56px;
    background-color: var(--card_color);
    border-top: 1px solid var(--border_color);
    border-bottom: 1px solid var(--border_color);
    padding: 0 16px;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 8px;
    .image_cont {
      width: 48px;
      height: 40px;
      position: relative;
      border-radius: 4px;
      overflow: hidden;
    }
    .text_cont {
      margin-right: 4px;
      display: grid;
      .title {
        text-align: start;
        font-size: 14px;
        font-weight: 400;
        color: var(--select_color);
        overflow: hidden;
        display: -webkit-box;
        line-clamp: 1;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
      }
      .price {
        text-align: start;
        font-size: 16px;
        font-weight: 500;
        color: var(--text_primary);
      }
    }
  }

  .messages_cont {
    padding: 20px 20px 50px;
    display: grid;
    width: 100%;
    /* height: 420px; */
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
    z-index: 1000;
    position: fixed;
    display: grid;
    grid-template-columns: auto 1fr auto;
    bottom: 0;
    width: 100%;
    height: 48px;
    border-top: 1px solid var(--border_color);
    background-color: var(--card_color);
    input {
      width: 100%;
      height: 100%;
      font-size: 14px;
      font-weight: 400;
      color: var(--text_primary);

      ::placeholder {
        font-size: 14px;
        font-weight: 400;
        color: var(--text_secondary);
      }
    }
    .file_btn {
      display: grid;
      width: 52px;
      height: 100%;
      justify-content: start;
      align-items: center;
      padding-left: 16px;
      path {
        transition: 0.3s ease;
      }
      :active {
        path {
          fill: var(--static_yellow);
        }
      }
    }
  }
  .send_btn {
    display: grid;
    width: 52px;
    height: 100%;
    justify-content: end;
    align-items: center;
    padding-right: 16px;
    path {
      transition: 0.3s ease;
    }
    :active {
      path {
        fill: var(--static_green);
      }
    }
  }
`;

export default MMessagesChatRoomPageStyle;
