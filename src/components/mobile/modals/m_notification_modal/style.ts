import styled from "styled-components";

const MNotifcationModalStyle = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  backdrop-filter: brightness(40%);
  background-color: var(--static_black30);
  align-items: flex-end;

  .container {
    position: relative;
    display: grid;
    width: 100%;
    max-height: 98vh;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    grid-auto-rows: max-content;
    gap: 20px;
    justify-items: center;
    align-items: center;
    background: var(--card_color);
    position: relative;
    overflow: hidden;
    overflow-y: scroll;

    .close_btn {
      position: fixed;
      background-color: var(--card_color);
      display: grid;
      justify-content: center;
      align-items: center;
      border-radius: 30px;
      width: 30px;
      height: 30px;
      z-index: 1;
      margin: 0;
      top: 8px;
      right: 8px;
    }
    .main_cont {
      display: grid;
      width: 100%;
      height: 100%;
      gap: 24px;

      .image_cont {
        position: relative;
        width: 100%;
        aspect-ratio: 2 / 1.2;
      }

      .date {
        padding: 0 16px;
        font-size: 14px;
        font-weight: 400;
        color: var(--text_secondary);
      }
      .text_cont {
        display: grid;
        gap: 12px;
        padding: 0 16px;
        .title {
          font-size: 18px;
          font-weight: 500;
          color: var(--text_primary);
        }
        .description {
          font-size: 16px;
          font-weight: 400;
          color: var(--text_primary);
        }
      }

      .button_cont {
        padding: 0 16px 32px 16px;
      }
    }
  }
`;

export default MNotifcationModalStyle;
