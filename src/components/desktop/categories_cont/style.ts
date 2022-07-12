import styled from "styled-components";
import { motion } from "framer-motion";
const CategoriesContStyle = styled(motion.div)`
  display: grid;
  position: relative;
  width: 100%;
  height: 386px;

  .background_cont {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 16px;
    /* object-position: top left; */
    svg {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 50%;
      top: 120%;
      transform: translate(-50%, -50%) scale(4.2);
      /* left: -150%; */
      /* top: -100%; */
      /* transform: translate(-100%, -100%); */
    }
  }
`;

export default CategoriesContStyle;
