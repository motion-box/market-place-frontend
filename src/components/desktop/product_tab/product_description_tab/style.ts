import styled from "styled-components";
import { motion } from "framer-motion";

interface Iprops {
  $isMobile?: true;
}

const ProductDescriptionTabStyle = styled(motion.div)<Iprops>`
  display: grid;
  max-width: ${(p) => !p.$isMobile && "400px"};
  gap: 12px;

  .table {
    display: grid;
    gap: 8px;
    max-width: 400px;
  }
  .category {
    width: 100%;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
  .tilte {
    font-size: 16px;
    font-weight: 400;
    color: var(--select_color);
  }
  .description {
    font-size: 16px;
    font-weight: 400;
    color: var(--text_primary);
  }

  .condition_cont {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 5px;

    .grad_cont {
      width: 130px;
      height: 4px;
      background-color: red;
      border-radius: 2px;
      background: linear-gradient(
        90deg,
        rgba(211, 36, 36, 1) 0%,
        rgba(255, 186, 0, 1) 50%,
        rgba(24, 186, 36, 1) 100%
      );
      position: relative;
    }
    .circle {
      width: 12px;
      height: 12px;
      border-radius: 6px;
      background-color: var(--card_color);
      border: 2px solid red;
      position: absolute;
      left: 2px;
      top: -4px;
    }
  }

  .description_cont {
    display: grid;
    height: 100px;
    overflow: hidden;
    position: relative;
    p {
      color: var(--text_primary);
      line-height: 20px;
    }
    .clipper {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 60px;
      z-index: 1;
      transition: 0.1s ease;
      background: ${(p) =>
        !p.$isMobile
          ? `linear-gradient(
        180deg,
        var(--card_gradient_0) 0%,
        var(--card_gradient_1) 70%
      )`
          : `linear-gradient(
        180deg,
        var(--bg_gradient_0) 0%,
        var(--bg_gradient_1) 70%
      )`};
      display: grid;
      justify-content: end;
      align-items: end;

      .expand_btn {
        font-size: 16px;
        line-height: 20px;
        font-weight: 500;
        color: var(--static_red);
      }
    }
    .reduce_btn {
      justify-self: end;
      font-size: 16px;
      line-height: 20px;
      font-weight: 500;
      color: var(--static_red);
    }
  }
  .description_cont_expanded {
    height: auto;
    overflow: visible;
  }
  @media only screen and (max-width: 500px) {
    .category {
      grid-template-columns: 1fr 1.5fr;
    }
    .tilte,
    .description {
      font-size: 14px;
    }
    p {
      font-size: 14px;
    }
  }
`;

export default ProductDescriptionTabStyle;
