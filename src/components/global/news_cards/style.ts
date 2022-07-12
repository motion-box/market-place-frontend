import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const NewsCardsStyle = styled(motion.div)`
  display: grid;
  width: 328px;
  height: 106px;
  position: relative;
`;
interface CardProps {
  grad1: string;
  grad2: string;
}
export const NewsCardStyle = styled(motion.div)<CardProps>`
  z-index: 1;
  position: absolute;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  padding: 16px;
  user-select: none;
  align-items: center;
  background: ${(p) =>
    `linear-gradient(135deg, ${p.grad1} 0%, ${p.grad2} 100%)`};
  .left_cont {
    display: grid;
    user-select: none;
    .title {
      font-size: 18px;
      font-weight: 700;
      color: var(--static_white);
    }
    .description {
      font-size: 14px;
      font-weight: 400;
      color: #e8e8e8;
    }
  }
  .colse_btn {
    position: absolute;
    top: 8px;
    right: 8px;
  }

  :hover {
    cursor: grab;
  }
`;

export default NewsCardsStyle;
