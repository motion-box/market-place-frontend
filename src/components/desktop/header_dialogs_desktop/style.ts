import styled from "styled-components";
import { motion } from "framer-motion";

interface Iprops {}

const HeaderDialogsDesktopStyle = styled(motion.div)<Iprops>`
  display: grid;
  position: absolute;
  width: fit-content;
  top: 48px;
  right: -24px;
  padding: 12px;
  padding-top: 24px;
  border-radius: 12px;
  background-color: var(--card_color);
  transition: 0.2s ease;
  overflow: hidden;
  z-index: 1;
  .close_btn {
    z-index: 1;
    position: absolute;
    top: 8px;
    right: 8px;
    width: 32px;
    height: 32px;
    display: grid;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 8px;
    transition: 0.2s ease;
    :hover {
      background-color: var(--bg_color);
    }
  }
`;

export default HeaderDialogsDesktopStyle;
