import styled from "styled-components";
import { motion } from "framer-motion";

const ProductDescriptionTabStyle = styled(motion.div)`
  display: grid;
  max-width: 400px;
  gap: 12px;

  .table {
    display: grid;
    gap: 8px;
  }
  .category {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    /* justify-content: space-between; */
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
  p {
    color: var(--text_primary);
  }
`;

export default ProductDescriptionTabStyle;
