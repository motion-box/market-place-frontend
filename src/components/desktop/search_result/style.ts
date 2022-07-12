import styled from "styled-components";
import { motion } from "framer-motion";
const SearchResultStyle = styled(motion.div)`
  position: absolute;
  top: 62px;
  display: grid;
  width: 100%;
  /* height: 100px; */
  background-color: var(--card_color);
  z-index: 2;
  border-radius: 12px;
  padding: 24px;
  padding-bottom: 7px;
  gap: 10px;

  .result_title {
    text-align: start;
    font-size: 18px;
    font-weight: 500;
    color: var(--text_primary);
  }

  .results_cont {
    display: grid;

    .result_item {
      display: grid;
      align-items: center;
      height: 50px;
      font-size: 16px;
      line-height: 20px;
      color: var(--text_primary);
      font-weight: 400;
      text-align: start;
    }
  }
`;

export default SearchResultStyle;
