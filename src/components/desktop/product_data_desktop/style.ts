import styled from "styled-components";
import { motion } from "framer-motion";

const ProductDataDesktopStyle = styled(motion.div)`
  display: grid;
  grid-auto-rows: min-content;
  gap: 12px;

  .top_cont {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    span {
      font-size: 14px;
      font-weight: 400;
      color: var(--select_color);
    }
  }
  .title {
    font-size: 28px;
    color: var(--text_primary);
    font-weight: 700;
  }
  .amount_guarantee_cont {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    gap: 12px;
    .amount {
      padding: 0 8px;
      height: 25px;
      font-size: 14px;
      line-height: 25px;
      background-color: var(--bgt_color);
      border-radius: 4px;
      color: var(--static_white);
    }
    .guarantee_cont {
      display: grid;
      grid-auto-flow: column;
      gap: 8px;
      align-items: center;

      span {
        font-size: 14px;
        font-weight: 400;
        color: var(--select_color);
      }
    }
  }
  .line {
    border-bottom: 1px solid var(--border_color);
  }
  .price_cont {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    align-items: center;
    gap: 12px;
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
    .sale_cont {
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: max-content;
      gap: 8px;
    }
    div {
      border-radius: 4px;
      height: 24px;
      padding: 0 8px;
      line-height: 24px;
      font-size: 14px;
      font-weight: 400;
      color: var(--static_white);
    }
    .sale {
      background-color: var(--bgt_color);
    }
    .time {
      background-color: var(--static_red50);
    }
  }
  .buttons_cont {
    position: relative;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    gap: 8px;
  }
  .product_general {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    .general_text {
      font-size: 13px;
      font-weight: 400;
      color: var(--icon_color);
      text-decoration: none;
    }
  }
`;

export default ProductDataDesktopStyle;
