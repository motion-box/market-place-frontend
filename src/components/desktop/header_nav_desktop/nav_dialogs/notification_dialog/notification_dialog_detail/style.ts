import styled from "styled-components";
import { motion } from "framer-motion";
const NotificationDialogDetailStyle = styled(motion.div)`
  display: grid;
  /* gap: 24px; */

  .back_icon {
    width: fit-content;
    height: fit-content;
    transform: rotate(90deg);
    path {
      fill: var(--static_red);
    }
  }
  .clipper {
    pointer-events: none;
    width: 100%;
    height: 80px;
    position: absolute;
    bottom: -12px;
    z-index: 100;
    transition: 0.1s ease;
    background: linear-gradient(
      180deg,
      var(--card_gradient_0) 0%,
      var(--card_gradient_1) 90%
    );
  }
  .top_clipper {
    top: 24px;
    transform: rotate(180deg);
  }
  .container {
    display: grid;
    gap: 10px;
    padding: 24px 12px;
    max-height: 604px;
    overflow-y: scroll;
    margin-bottom: -12px;
    ::-webkit-scrollbar {
      width: 0px;
      display: none;
    }

    .date {
      font-size: 14px;
      color: var(--text_secondary);
      font-weight: 400;
    }
    .title {
      font-size: 18px;
      color: var(--text_primary);
      font-weight: 500;
      margin-bottom: 10px;
    }
    .image_cont {
      position: relative;
      width: 100%;
      height: 220px;
      border-radius: 16px;
      overflow: hidden;
      margin-bottom: 6px;
    }
    .description {
      font-size: 16px;
      color: var(--text_primary);
      font-weight: 400;
      margin-bottom: 14px;
    }
  }

  @media only screen and (max-height: 700px) {
    .container {
      max-height: calc(100vh - 124px);
      min-height: 200px;
    }
  }
`;

export default NotificationDialogDetailStyle;
