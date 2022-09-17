import styled from "styled-components";

const ReviewModalStyle = styled.div`
  display: grid;
  width: 100%;
  max-width: 456px;
  height: 600px;
  padding: 48px 25px 36px;
  background-color: var(--card_color);
  border-radius: 12px;
  position: relative;
  gap: 24px;
  grid-template-rows: auto 1fr auto;
  overflow: hidden;

  .step_cont {
    display: grid;
    height: 100%;
    gap: 38px;
    grid-template-rows: auto auto 1fr;

    .title_cont {
      display: grid;
      gap: 12px;
      justify-content: center;
      .title {
        font-size: 28px;
        font-weight: 700;
        color: var(--text_primary);
        text-align: center;
      }
      .description {
        font-size: 18px;
        font-weight: 400;
        color: var(--text_primary);
        text-align: center;
      }
    }

    .like_cont {
      display: grid;
      grid-auto-flow: column;
      justify-content: center;
      gap: 96px;
      .cont {
        display: grid;
        gap: 8px;
        justify-items: center;
        button {
          position: relative;
          width: 76px;
          height: 76px;
          border-radius: 76px;
          background-color: var(--card_color);
          transition: 0.3s ease;
          path {
            transition: 0.3s ease;
          }
        }
        .dislike_btn {
          svg {
            position: absolute;
            left: 20px;
            top: 22px;
          }
        }
        .like_btn {
          svg {
            position: absolute;
            left: 20px;
            top: 18px;
          }
        }
        .active_dislike {
          background-color: var(--static_red);
        }
        .active_like {
          background-color: var(--static_green);
        }
        span {
          font-size: 14px;
          font-weight: 400;
          color: var(--text_primary);
        }
      }
    }
  }

  .progress_cont {
    width: 100%;
    height: 4px;
    display: grid;
    grid-auto-flow: column;
    gap: 4px;

    .progress {
      width: 100%;
      height: 100%;
      position: relative;
      z-index: 1;

      .line {
        width: 100%;
        height: 100%;
        z-index: 1;
        border-radius: 2px;
        background-color: var(--icon_color);
      }
      .bg {
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 2px;
        background-color: var(--border_color);
      }
    }
  }

  .stars_cont {
    display: grid;
    grid-auto-flow: column;
    justify-self: center;
    gap: 16px;
    position: relative;

    .active_stars {
      pointer-events: none;
      justify-self: center;
      position: absolute;
      left: 0;
      top: 0;
      display: grid;
      grid-auto-flow: column;
      gap: 16px;
    }
  }

  .comment_cont {
    display: grid;
    gap: 4px;
    grid-template-rows: auto 1fr;
    span {
      font-size: 14px;
      font-weight: 400;
      color: var(--select_color);
    }
    textarea {
      background-color: var(--card_color);
      font-size: 16px;
      font-weight: 400;
      color: var(--text_primary);
      width: 100%;
      height: 100%;
      border: 1px solid var(--border_color);
      border-radius: 8px;
      padding: 14px 16px;
      outline: none;
      resize: none;
      ::placeholder {
        font-size: 16px;
        font-weight: 400;
        color: var(--select_color);
      }
    }
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

export default ReviewModalStyle;
