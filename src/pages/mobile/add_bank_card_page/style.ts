import styled from "styled-components";

const MAddBankCardPageStyle = styled.div`
  display: grid;
  width: 100%;
  min-height: 100vh;
  padding: 56px 16px 32px;

  .page_cont {
    width: 100%;
  }

  .content_cont {
    padding: 48px 0;
    z-index: 2;
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
  .confirm_cont {
    padding: 48px 0;
    z-index: 2;
    height: 100%;
    display: grid;
    justify-self: center;
    justify-items: center;
    grid-auto-rows: max-content;
    gap: 60px;

    .title_cont {
      display: grid;
      gap: 12px;
      text-align: center;
      .title {
        font-size: 24px;
        font-weight: 700;
        color: var(--text_primary);
        white-space: pre-wrap;
      }
      .description {
        font-size: 16px;
        font-weight: 400;
        color: var(--select_color);
        text-align: center;
        white-space: pre-wrap;
      }
    }

    .bottom_cont {
      width: 100%;
      display: grid;
      gap: 24px;
      margin-top: 40px;
    }
  }

  .image_wrapper {
    width: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0px;
    z-index: 0;
    .image_cont {
      width: 100%;
      aspect-ratio: 1 / 1;
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
`;

export default MAddBankCardPageStyle;
