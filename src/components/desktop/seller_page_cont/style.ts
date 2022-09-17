import styled from "styled-components";

const SellerPageContStyle = styled.div`
  display: grid;
  position: relative;
  justify-items: center;
  min-height: calc(100vh - 388px);
  grid-auto-rows: max-content;
  gap: 24px;
  .seller_cont {
    display: grid;
    width: 100%;
    min-width: 1000px;
    max-width: 1440px;
    padding: 120px 84px 0;
    grid-template-columns: auto 1fr;
    gap: 16px;
    .image_cont {
      position: relative;
      width: 60px;
      height: 60px;
      border-radius: 30px;
      overflow: hidden;
    }
    .text_cont {
      display: grid;
      gap: 4px;
      grid-auto-rows: max-content;
      .title_cont {
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: max-content;
        gap: 16px;
        align-items: center;
        .name {
          font-size: 28px;
          font-weight: 700;
          color: var(--text_primary);
          margin-right: 8px;
        }
        button {
          display: grid;
          width: 36px;
          height: 36px;
          justify-content: center;
          align-items: center;
          transition: 0.3s ease;
          border-radius: 8px;
          :hover {
            background-color: var(--bg_color);
          }
        }
      }
      .description_cont {
        display: grid;
        gap: 4px;
        margin-top: 8px;
        span {
          font-size: 16px;
          font-weight: 400;
          color: var(--select_color);
        }
      }
    }
  }
  .page_selector_cont {
    width: 100%;
    overflow: hidden;
    position: relative;
    display: grid;
    justify-items: center;

    .page_selector {
      min-width: 1000px;
      width: 100%;
      max-width: 1440px;
      padding: 0 84px;
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

  .page_content_cont {
    display: grid;
    min-width: 1000px;
    max-width: 1440px;
    width: 100%;
    height: 100%;
    padding: 0 84px 48px;

    .page_content {
      background-color: var(--bg_color);
      padding: 24px;
      border-radius: 12px;
      display: grid;
      justify-items: center;
      align-content: center;
      height: 100%;
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

  .big_underline {
    margin-top: -2px;
    width: 100%;
    height: 2px;
    background-color: var(--border_color);
  }
`;

export default SellerPageContStyle;
