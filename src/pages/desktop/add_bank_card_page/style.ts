import styled from "styled-components";

const AddBankCardPageStyle = styled.div`
  display: grid;
  width: 100%;
  justify-content: center;
  background-color: var(--card_color);
  .page_wrapper {
    display: grid;
  }
  .card_cont {
    z-index: 1;
    overflow: hidden;
    margin-top: 24px;
    background-color: var(--card_color);
    border-radius: 12px;
    width: 560px;
    justify-self: center;
    background-color: var(--bg_color);
    position: relative;
    justify-content: center;
    display: grid;

    .title {
      z-index: 1;
      font-size: 28px;
      font-weight: 700;
      color: var(--text_primary);
      text-align: center;
    }

    .content_cont {
      padding: 48px 0;
      z-index: 2;
      width: 328px;
      height: 100%;
      display: grid;
      justify-self: center;
      justify-content: center;
      grid-auto-rows: max-content;
      gap: 60px;

      .wallet_icon {
        z-index: 1;
        justify-self: center;
      }

      .inputs_cont {
        display: grid;
        gap: 12px;
        width: 328px;
      }
    }

    .image_wrapper {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: -40px;
      z-index: 0;
      .image_cont {
        width: 490px;
        height: 490px;
        user-select: none;
        pointer-events: none;
        position: relative;

        .gradient {
          width: 100%;
          height: 100%;
          position: absolute;
          z-index: 1;
          background: radial-gradient(
            circle,
            rgba(245, 245, 245, 0.3) 0%,
            rgba(245, 245, 245, 1) 100%
          );
        }
        .image {
          width: 100%;
          height: 100%;
          overflow: hidden;
          position: relative;
        }
      }
    }

    .confirm_cont {
      padding: 48px 0;
      z-index: 2;
      width: 328px;
      height: 100%;
      display: grid;
      justify-self: center;
      justify-content: center;
      grid-auto-rows: max-content;
      gap: 60px;

      .title_cont {
        display: grid;
        gap: 12px;
        .description {
          font-size: 18px;
          font-weight: 400;
          color: var(--select_color);
          text-align: center;
        }
      }

      .bottom_cont {
        display: grid;
        gap: 24px;
        margin-top: 40px;
      }
    }
  }
`;

export default AddBankCardPageStyle;
