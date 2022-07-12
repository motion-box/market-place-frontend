import styled from "styled-components";
import { motion } from "framer-motion";

const NotificationDialogMainStyle = styled(motion.div)`
  display: grid;
  position: relative;
  .dialog_title {
    width: 374px;
    font-size: 18px;
    font-weight: 500;
    color: var(--text_primary);
    padding-left: 12px;
    line-height: 24px;
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
      var(--card_gradient_1) 80%
    );
  }
  .top_clipper {
    top: 24px;
    transform: rotate(180deg);
  }
  .items_cont {
    overflow-y: scroll;
    max-height: 608px;
    margin-bottom: -12px;
    padding: 24px 12px;
    display: grid;
    gap: 10px;
    ::-webkit-scrollbar {
      width: 0px;
      display: none;
    }

    .item {
      padding: 12px;
      border-radius: 8px;
      background-color: var(--bg_color);
      display: grid;
      gap: 4px;
      position: relative;

      .date {
        font-size: 16px;
        font-weight: 400;
        color: var(--text_secondary);
        text-align: start;
      }
      .text {
        font-size: 16px;
        font-weight: 500;
        color: var(--text_primary);
        text-align: start;
        overflow: hidden;
        display: -webkit-box;
        line-clamp: 5;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
      }
      .dot {
        position: absolute;
        top: 20px;
        left: -4px;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background-color: var(--static_red);
      }
    }
  }
  @media only screen and (max-height: 700px) {
    .items_cont {
      max-height: calc(100vh - 120px);
      min-height: 200px;
    }
  }
`;

export default NotificationDialogMainStyle;
