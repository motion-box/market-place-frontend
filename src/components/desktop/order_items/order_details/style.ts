import { motion } from "framer-motion";
import styled from "styled-components";

const OrderDetailsStyle = styled(motion.div)`
  display: grid;
  width: 100%;
  justify-content: center;

  .seller_cont {
    display: grid;
    gap: 120px;
    .new_order_card {
      display: grid;
      width: 368px;
      padding: 16px 20px;
      background-color: var(--card_color);
      border-radius: 8px;
      gap: 13px;
      .title {
        font-size: 18px;
        font-weight: 500;
        color: var(--text_primary);
      }
      .line {
        border-bottom: 1px solid var(--border_color);
      }
      .curier_cont {
        display: grid;
        grid-auto-flow: column;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 3px;
        span {
          font-size: 16px;
          font-weight: 400;
          color: var(--text_primary);
        }
      }
    }
  }

  .buyer_cont {
    display: grid;
    gap: 48px;
    .delivered {
      display: grid;
      gap: 16px;
    }
  }

  .pickup {
    width: 408px;
    display: grid;
    gap: 48px;
    .pickup_card {
      display: grid;
      gap: 12px;
      background-color: var(--card_color);
      border-radius: 8px;
      padding: 24px;
      .title_cont {
        display: grid;
        grid-auto-flow: column;
        justify-content: space-between;
        gap: 8px;
        .title {
          font-size: 16px;
          font-weight: 400;
          color: var(--text_primary);
        }
        .time_cont {
          padding: 0 8px;
          height: 24px;
          background-color: var(--static_green);
          border-radius: 4px;

          line-height: 24px;
          font-size: 12px;
          color: var(--static_white);
          font-weight: 400;
        }
      }
      .description {
        font-size: 16px;
        font-weight: 400;
        color: var(--select_color);
        margin-bottom: 12px;
      }
    }
  }

  .steps_cont {
    display: grid;
    width: 368px;
    padding: 24px 16px;
    background-color: var(--card_color);
    border-radius: 8px;
    gap: 16px;
    margin-bottom: 68px;

    .step_card {
      display: grid;
      grid-auto-flow: column;
      justify-content: space-between;
      .left_cont {
        display: grid;
        gap: 4px;
        .title {
          font-size: 16px;
          font-weight: 500;
          color: var(--text_primary);
        }
        .date {
          font-size: 14px;
          font-weight: 400;
          color: var(--select_color);
        }
      }
      .disable {
        .title,
        .date {
          color: var(--text_secondary);
        }
      }
      .right_cont {
      }
    }
  }
  .steps_no_margin {
    margin-bottom: 0;
  }

  @media only screen and (max-width: 1000px) {
    width: 100%;
    justify-content: normal;
    /* justify-items: center; */
    .seller_cont {
      .new_order_card {
        width: 100%;
      }
    }
    .pickup {
      width: 100%;
      .pickup_card {
        .title_cont {
          .title {
            font-size: 14px;
          }
        }
        .description {
          font-size: 14px;
        }
      }
    }
    .steps_cont {
      width: 100%;
    }
  }
`;

export default OrderDetailsStyle;
