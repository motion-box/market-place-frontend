import styled from "styled-components";
import { motion } from "framer-motion";

const StoriesStyle = styled(motion.div)`
  display: grid;
  width: 100%;
  position: relative;

  .slider {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: min-content;
    gap: 8px;
    overflow-x: scroll;

    ::-webkit-scrollbar {
      height: 0px;
      display: none;
    }
  }

  .item {
    cursor: pointer;
    position: relative;
    width: 84px;
    height: 126px;
    border-radius: 12px;
    overflow: hidden;
    background: rgb(255, 90, 52);
    padding: 2px;
    .image_wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: 10px;
      overflow: hidden;
      background-color: var(--static_white);
      border: 2px solid var(--bg_color);
      img {
        pointer-events: none;
        user-select: none;
      }
    }
  }
  .item.stories {
    background: linear-gradient(
      110deg,
      rgba(255, 90, 52, 1) 0%,
      rgba(244, 113, 0, 1) 40%,
      rgba(255, 226, 0, 1) 100%
    );
  }
  .item.news {
    background: linear-gradient(
      110deg,
      rgba(50, 185, 73, 1) 0%,
      rgba(33, 148, 249, 1) 40%,
      rgba(28, 19, 185, 1) 100%
    );
  }
  .item.read {
    background: var(--border_color);
  }

  .control {
    z-index: 1;
    position: absolute;
    left: -8px;
    display: grid;
    height: 100%;
    align-content: center;
    button {
      position: absolute;
      display: grid;
      justify-content: center;
      align-items: center;
      z-index: 2;
      width: 36px;
      height: 36px;
      top: 50%;
      transform: translateY(-50%);
      background-color: var(--card_color);
      border-radius: 18px;
      transition: 0.2s ease;
      svg {
        transform: rotate(90deg);
      }
    }
    .clipper {
      pointer-events: none;
      position: absolute;
      background-color: black;
      width: 20px;
      height: 100%;
      z-index: 1;
      transition: 0.1s ease;
      background: linear-gradient(
        -90deg,
        var(--bg_gradient_0) 0%,
        var(--bg_gradient_1) 50%
      );
    }
  }
  .right_control {
    left: auto;
    right: 0;
    button {
      right: 0;
      svg {
        transform: rotate(-90deg);
      }
    }
    .right_clipper {
      right: 0;
      background: linear-gradient(
        90deg,
        var(--bg_gradient_0) 0%,
        var(--bg_gradient_1) 50%
      );
    }
  }
  @media only screen and (max-width: 500px) {
    .slider {
      padding: 0 16px;
    }
  }
`;

export default StoriesStyle;
