import styled from "styled-components";

const ProductImageCarouselMobileStyle = styled.div`
  display: grid;
  grid-auto-flow: column;
  width: 100vw;
  /* aspect-ratio: 1 / 0.8; */
  position: relative;

  .carousel {
    display: grid;
    grid-auto-flow: column;
    gap: 8px;
    width: 100%;
    height: 100%;
    padding: 0 16px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      width: 0px;
      display: none;
    }
    button {
      position: relative;
      width: 80vw;
      height: 80vw;
      border-radius: 8px;
      max-width: 400px;
      max-height: 400px;
      overflow: hidden;
    }
  }

  .sale_cont {
    pointer-events: none;
    position: absolute;
    display: grid;
    width: 100%;
    grid-auto-flow: column;
    justify-content: space-between;
    padding: 0 28px;
    bottom: 16px;
    .left_cont {
      display: grid;
      grid-auto-flow: column;
      gap: 4px;
      div {
        padding: 0 8px;
        height: 26px;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 400;
        color: var(--static_white);
        line-height: 26px;
      }
      .sale {
        background-color: var(--static_modal_bg);
      }
      .sale_time {
        background-color: var(--static_red50);
      }
    }
    .amount {
      padding: 0 8px;
      height: 26px;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 400;
      color: var(--static_white);
      line-height: 26px;
      background-color: var(--static_modal_bg);
    }
  }
`;

export default ProductImageCarouselMobileStyle;
