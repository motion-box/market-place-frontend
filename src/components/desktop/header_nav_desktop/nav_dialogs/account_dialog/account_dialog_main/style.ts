import styled from "styled-components";
import { motion } from "framer-motion";

const AccountDialodMainStyle = styled(motion.div)`
  display: grid;
  gap: 24px;
  overflow: hidden;
  .dialog_title {
    width: 374px;
    font-size: 18px;
    font-weight: 500;
    color: var(--text_primary);
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
      grid-template-columns: auto 1fr auto;
      gap: 16px;
      align-items: center;
      .icon_color {
        width: 32px;
        height: 32px;
        border-radius: 8px;
        display: grid;
        justify-content: center;
        align-items: center;
      }
      span {
        font-size: 16px;
        font-weight: 400;
        color: var(--text_primary);
        text-align: start;
      }
      .arrow_cont {
        display: grid;
        grid-auto-flow: column;
        gap: 16px;
        align-items: center;
        .badge {
          color: var(--icon_color);
        }
      }
      :hover {
        background-color: var(--bg_color);
      }
    }
  }
  .logout {
    margin: 0 12px;
    margin-bottom: 12px;
  }
`;

export default AccountDialodMainStyle;
