import styled from "styled-components";

const ProductsCarouselStyle = styled.div`
  display: grid;
  gap: 24px;
  .section_title_cont {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: center;
    .section_title {
      font-size: 28px;
      font-weight: 700;
      color: var(--text_primary);
    }
    .see_all {
      display: grid;
      grid-auto-flow: column;
      gap: 4px;
      text-decoration: none;
      span {
        font-size: 16px;
        font-weight: 500;
        color: var(--static_red);
      }
      svg {
        transform: rotate(-90deg);
      }
    }
  }
  .carousel_cont {
    display: grid;
    height: fit-content;
    position: relative;
    ::-webkit-scrollbar {
      height: 0px;
      display: none;
    }

    .carousel {
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: 1fr;
      gap: 24px;
      overflow-x: scroll;
      ::-webkit-scrollbar {
        height: 0px;
        display: none;
      }
      .product_card {
        width: calc((100vw - 168px) / 4 - 18px);
        @media only screen and (min-width: 1441px) {
          width: calc((100vw - (100vw - 1440px) - 168px) / 4 - 18px);
        }
        @media only screen and (max-width: 1000px) {
          width: calc((1000px - 168px) / 4 - 18px);
        }
      }
    }

    .control {
      position: absolute;
      z-index: 10;
      width: 36px;
      height: 36px;
      border-radius: 18px;
      background-color: var(--card_color);
      display: grid;
      justify-content: center;
      align-items: center;
      top: 50%;
      transform: translateY(-50%);
      transition: 0.5s ease;
      :active {
        transform: scale(0.95) translateY(-50%);
      }
    }
    .control_left {
      left: -52px;
      svg {
        transform: rotate(90deg);
      }
    }
    .control_right {
      right: -52px;
      svg {
        transform: rotate(270deg);
      }
    }
  }
`;

export default ProductsCarouselStyle;
