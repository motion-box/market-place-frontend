import styled from "styled-components";
import { motion } from "framer-motion";

const LanuagePickerStyle = styled(motion.div)`
  display: grid;
  position: relative;
  height: 48px;
  align-items: center;

  .title {
    text-transform: capitalize;
    font-size: 16px;
    line-height: 48px;
    font-weight: 500;
    color: var(--text_primary);
    cursor: pointer;
    user-select: none;
    height: 100%;
    padding: 0 12px;
    border-radius: 12px;
    transition: 0.2s ease;
    :hover {
      background-color: var(--bg_color);
    }
  }

  .dialog_wrapper {
    display: grid;
    gap: 24px;
    .dialog_title {
      font-size: 18px;
      font-weight: 500;
      color: var(--text_primary);
      width: 200px;
      padding-left: 12px;
      line-height: 24px;
    }
    .item_cont {
      display: grid;
      gap: 8px;
      .item {
        height: 48px;
        border-radius: 12px;
        transition: 0.2s ease;
        display: grid;
        padding: 0 12px;
        grid-template-columns: auto 1fr;
        gap: 16px;
        align-items: center;
        text-decoration: none;
        span {
          font-size: 16px;
          font-weight: 400;
          color: var(--text_primary);
          text-align: start;
        }
        :hover {
          background-color: var(--bg_color);
        }
      }
    }
  }
`;

export default LanuagePickerStyle;
