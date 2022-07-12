import styled from "styled-components";
import { motion } from "framer-motion";

const ProductImageCarouselDesktopStyle = styled(motion.div)`
  position: relative;
  width: 100%;
  aspect-ratio: 1.18 / 1;
  overflow: hidden;
  border-radius: 8px;
  .image_wrapper {
    cursor: pointer;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    overflow: hidden;
  }
  span {
    position: absolute;
    pointer-events: none;
    user-select: none;
  }

  .control {
    cursor: pointer;
    z-index: 1;
    position: absolute;
    left: 8px;
    top: 50%;
    transform: translateY(-50%);
    width: 48px;
    height: 48px;
    display: grid;
    justify-content: center;
    align-items: center;
    background-color: var(--mbgt_color);
    border-radius: 8px;
  }
  .next {
    left: auto;
    right: 8px;
    svg {
      transform: rotate(-90deg);
    }
  }
  .prev {
    svg {
      transform: rotate(90deg);
    }
  }
`;

export default ProductImageCarouselDesktopStyle;
