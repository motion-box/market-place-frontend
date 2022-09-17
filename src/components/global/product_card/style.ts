import styled from "styled-components";
import { motion } from "framer-motion";

const ProductCardStyle = styled(motion.div)`
  display: grid;
  border-radius: 8px;
  background-color: var(--card_color);
  width: 100%;
  cursor: pointer;
  position: relative;

  .image_cont {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    overflow: hidden;
    background-color: var(--border_color);

    .sale_cont {
      position: absolute;
      left: 4px;
      bottom: 4px;
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: min-content;
      gap: 4px;

      div {
        border-radius: 4px;
        height: 24px;
        padding: 0 8px;
        line-height: 24px;
        font-size: 12px;
        font-weight: 400;
        color: var(--static_white);
      }
      .sale {
        background-color: var(--static_black30);
      }
      .time {
        background-color: var(--static_red50);
      }
    }
  }
  .gray_image {
    filter: grayscale(1) opacity(0.8);
  }
  .content {
    padding: 8px 12px 16px 12px;
    display: grid;
    text-align: start;

    .title {
      font-size: 16px;
      font-weight: 400;
      color: var(--text_primary);
      margin-bottom: 8px;
      overflow: hidden;
      display: -webkit-box;
      line-clamp: 3;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
    }
    .price {
      font-size: 20px;
      font-weight: 500;
      color: var(--text_primary);
      line-height: 25px;
    }
    .old_price {
      width: fit-content;
      margin-top: 2px;
      font-size: 16px;
      font-weight: 400;
      color: var(--select_color);
      line-height: 20px;
      position: relative;
      s {
        left: 0;
        top: 50%;
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: var(--static_red);
      }
    }
    .bottom_cont {
      margin-top: 3px;
      display: grid;
      grid-auto-flow: column;
      justify-content: space-between;

      span {
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
        color: var(--icon_color);
      }
      .expire_date {
        display: grid;
        grid-auto-flow: column;
        align-items: center;
        gap: 6px;
      }
    }
  }
  .corner_button_cont {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
  }

  @media only screen and (max-width: 500px) {
    .image_cont {
      .sale_cont {
        width: calc(100% - 8px);
        justify-content: space-between;
      }
    }
    .content {
      .bottom_cont {
        grid-auto-flow: row;
      }
    }
  }
`;
export default ProductCardStyle;
