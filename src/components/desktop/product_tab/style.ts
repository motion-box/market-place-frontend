import styled from "styled-components";
import { motion } from "framer-motion";

const ProductTabStyle = styled.div`
  display: grid;
  gap: 16px;

  .tabs_cont {
    width: 100%;
    height: 27px;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    gap: 20px;
    border-bottom: 2px solid var(--border_color);

    .tab_cont {
      cursor: pointer;
      position: relative;
      span {
        font-size: 14px;
        line-height: 16px;
        font-weight: 500;
        text-transform: uppercase;
      }
    }
  }
  .content {
  }
`;

export const LineStyle = styled(motion.div)`
  width: 100%;
  height: 3px;
  top: 25px;
  background-color: var(--text_primary);
  position: absolute;
`;

export default ProductTabStyle;
