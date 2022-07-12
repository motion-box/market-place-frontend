import styled from "styled-components";

const UserPageContStyle = styled.div`
  display: grid;
  position: relative;
  justify-items: center;
  min-height: calc(100vh - 388px);
  grid-auto-rows: max-content;

  .top_cont {
    min-width: 1000px;
    max-width: 1440px;
    width: 100%;
    padding: 0 84px;
    display: grid;
    gap: 24px;
    h1 {
      font-size: 36px;
      font-weight: 700;
      color: var(--text_primary);
    }
    .page_selector_cont {
      width: 100%;
      overflow: hidden;
      position: relative;

      .page_selector {
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: max-content;
        overflow-x: scroll;
        gap: 24px;
        height: 100%;
        button {
          width: fit-content;
          height: 30px;
          position: relative;
          z-index: 1;
          display: grid;

          span {
            font-size: 14px;
            color: var(--text_primary);
            text-transform: uppercase;
          }
          div {
            position: absolute;
            bottom: 0px;
            z-index: 120;
            width: 100%;
            height: 2px;
            background-color: var(--text_primary);
          }
        }
      }
    }
  }
  .big_underline {
    margin-top: -2px;
    width: 100%;
    height: 2px;
    background-color: var(--border_color);
  }

  .page_content_cont {
    display: grid;
    min-width: 1000px;
    max-width: 1440px;
    width: 100%;
    height: 100%;
    padding: 40px 84px 48px;

    .page_content {
      background-color: var(--bg_color);
      padding: 24px;
      border-radius: 12px;
      display: grid;
      justify-items: center;
      align-content: center;
      height: 100%;

      .slider_cont {
        position: relative;
        margin-bottom: 20px;
        width: 100%;
        height: 0;

        .slider {
          position: absolute;
          top: -44px;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
  }

  .placeholder {
    display: grid;
    max-width: 600px;
    justify-content: center;
    justify-items: center;
    gap: 12px;
    padding: 56px 0;

    svg {
      margin-bottom: 12px;
    }

    h3 {
      font-size: 28px;
      font-weight: 700;
      color: var(--text_primary);
      text-align: center;
    }
    p {
      font-size: 18px;
      color: var(--select_color);
      font-weight: 400;
      text-align: center;
    }
    .button_cont {
      height: 60px;
    }
  }
`;

export default UserPageContStyle;
