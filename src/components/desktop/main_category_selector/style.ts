import styled from "styled-components";
import { motion } from "framer-motion";
const MainCategorySelectorStyle = styled(motion.div)`
  display: grid;
  position: relative;
  width: 100%;
  /* height: 386px; */
  /* overflow: hidden; */
  border-radius: 16px;

  .content_cont {
    z-index: 1;
    position: relative;
    padding: 48px;
    display: grid;
    gap: 48px;
    grid-template-rows: auto 1fr;

    .title {
      font-size: 36px;
      font-weight: 700;
      color: var(--static_white);
      text-align: center;
    }
    .content {
      position: relative;
      display: grid;
      gap: 16px;
      grid-auto-rows: min-content;

      .categories {
        display: grid;
        grid-auto-flow: column;
        gap: 12px;
        grid-auto-columns: 1fr;

        button {
          height: 120px;
          background-color: var(--card_color);
          border-radius: 8px;
          position: relative;
          padding: 12px;
          display: grid;
          grid-auto-rows: 1fr auto;
          gap: 12px;

          .image_cont {
            position: relative;
            width: 100%;
            height: 100%;
          }
          .name {
            font-size: 14px;
            color: var(--text_primary);
            font-weight: 400;
            overflow: hidden;
            display: -webkit-box;
            line-clamp: 2;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }

  .background_cont {
    z-index: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 16px;
    user-select: none;
    pointer-events: none;
    svg {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 50%;
      top: 120%;
      transform: translate(-50%, -50%) scale(4.2);
    }
  }
`;

export default MainCategorySelectorStyle;
