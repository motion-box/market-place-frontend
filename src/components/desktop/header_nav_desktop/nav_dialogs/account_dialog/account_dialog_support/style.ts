import styled from "styled-components";
import { motion } from "framer-motion";

const AccountDialogSupportStyle = styled(motion.div)`
  display: grid;
  gap: 24px;
  overflow: hidden;

  .back_icon {
    width: fit-content;
    height: fit-content;
    transform: rotate(90deg);
    path {
      fill: var(--static_red);
    }
  }
  .box_icon {
    justify-self: center;
  }
  .text_cont {
    display: grid;
    padding: 0 12px;
    text-align: center;
    gap: 10px;
    .title {
      font-size: 24px;
      font-weight: 700;
      color: var(--text_primary);
    }
    .subtitle {
      font-size: 16px;
      font-weight: 400;
      color: var(--select_color);
    }
  }
  .button_cont {
    display: grid;
    padding: 0 12px;
    padding-bottom: 12px;
    gap: 8px;

    .link_item {
      width: 100%;
      height: 60px;
      display: grid;
      align-items: center;
      grid-template-columns: 1fr auto;
      padding: 0 20px;
      border-radius: 8px;
      background-color: var(--bg_color);
      border: 1px solid var(--bg_color);
      transition: 0.2s ease;
      text-decoration: none;
      span {
        color: var(--text_primary);
        transition: 0.2s ease;
      }
      :hover {
        border: 1px solid var(--border_color);
      }
      :active {
        transform: scale(0.98);
      }
    }
  }
`;

export default AccountDialogSupportStyle;
