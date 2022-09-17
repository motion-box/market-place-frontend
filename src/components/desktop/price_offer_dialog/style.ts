import styled from "styled-components";
import { motion } from "framer-motion";

const PriceOfferDialogStyle = styled(motion.div)`
  position: absolute;
  z-index: 100;
  display: grid;
  width: 376px;
  border-radius: 12px;
  background-color: var(--card_color);
  padding: 24px;
  gap: 16px;
  top: 40px;
  left: calc(50% - 188px);

  .dialog_title {
    font-size: 18px;
    font-weight: 500;
    color: var(--text_primary);
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    height: 48px;
    border: 1px solid var(--border_color);
    border-radius: 8px;
    font-size: 16px;
    font-weight: 400;
    color: var(--text_primary);
    text-align: center;
    ::placeholder {
      font-size: 16px;
      font-weight: 400;
      color: var(--text_secondary);
      text-align: center;
    }
  }

  .close_btn {
    position: absolute;
    top: 8px;
    right: 8px;
  }
`;

export default PriceOfferDialogStyle;
