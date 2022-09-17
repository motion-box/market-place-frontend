import styled from "styled-components";

const ImagePreviewStyle = styled.div`
  position: relative;
  display: grid;
  justify-items: center;
  padding: 0 84px;
  min-width: 1000px;
  max-width: 1440px;
  height: 100vh;
  width: 100%;

  .number_cont {
    padding: 0 8px;
    background-color: rgba(255, 255, 255, 0.12);
    height: 26px;
    display: grid;
    align-items: center;
    border-radius: 4px;
    color: var(--static_white);
    position: absolute;
    top: 24px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 14px;
  }
  .close_button {
    width: 48px;
    height: 48px;
    display: grid;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 24px;
    right: 24px;
  }
  .image_cont {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: auto 1fr auto;
    position: relative;
    align-items: center;
    gap: 24px;
    margin-top: 74px;
    width: 100%;
    height: calc(100vh - 180px);
    .image_preview {
      position: relative;
      width: 100%;
      height: 100%;
      .image_wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        span {
        }
        overflow: hidden;
      }
      span {
        position: absolute;
        pointer-events: none;
        user-select: none;
      }
    }
    .control {
      cursor: pointer;
      z-index: 10;
      width: 48px;
      height: 48px;
      display: grid;
      justify-content: center;
      align-items: center;
      background-color: var(--static_black);
      border-radius: 8px;
    }
    .next {
      svg {
        transform: rotate(-90deg);
      }
    }
    .prev {
      svg {
        transform: rotate(90deg);
      }
    }
  }
  .buy_button_cont {
    min-width: 500px;
  }

  @media only screen and (max-width: 1000px) {
    min-width: 360px;
    position: relative;
    background-color: var(--static_black);
    padding: 0;

    .number_cont {
      position: fixed;
    }
    .close_button {
      position: fixed;
      z-index: 10;
      top: 12px;
      right: 0px;
    }
    .image_cont {
      margin: 0;
      position: fixed;
      top: 50%;
      transform: translateY(-50%);
      height: 60vh;
      grid-template-columns: 1fr;
    }

    .buy_button_cont {
      z-index: 10;
      min-width: 0px;
      position: fixed;
      width: 100%;
      bottom: 0;
      padding: 0 8px 12px;
    }
  }
`;

export default ImagePreviewStyle;
