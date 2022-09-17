import styled from "styled-components";

const ConditionPickerStyle = styled.div`
  display: grid;
  gap: 8px;

  .selector_cont {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 36px;
    gap: 4px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: 48px;
    background-color: var(--card_color);
    border-radius: 24px;
    .item {
      width: 36px;
      height: 36px;
      position: relative;
      z-index: 1;
      span {
        font-size: 14px;
        font-weight: 400;
        color: var(--text_primary);
        z-index: 1;
        transition: 0.3s ease;
      }
      .active_text {
        color: var(--static_white);
      }
      .bg {
        z-index: -1;
        width: 36px;
        height: 36px;
        border-radius: 36px;
        background-color: var(--static_red);
        position: absolute;
        top: 0;
      }
    }
  }
  .selector_cont_disable {
    pointer-events: none;
    .item {
      span {
        color: var(--text_secondary);
      }
    }
  }

  .top_bottom_cont {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: center;
    .text {
      font-size: 16px;
      font-weight: 400;
      color: var(--text_primary);
    }
    .option_btn {
      font-size: 14px;
      font-weight: 400;
      color: var(--static_red);
    }
  }

  @media only screen and (max-width: 500px) {
    width: calc(100vw - 16px);
    margin-left: -16px;
    .selector_cont {
      width: 100vw;
      gap: 0 !important;
      padding: 0 7px;
      justify-content: space-between;
    }
    .top_bottom_cont {
      padding: 0 16px;
      .text {
        font-size: 14px;
      }
    }
    /* margin-left: -16px;
    width: calc(100vw - 16px);
    .selector_cont {
      padding: 0 7px;
      gap: 0 !important;
    }
    .top_bottom_cont {
      .text {
        font-size: 14px;
      }
    } */
  }
`;

export default ConditionPickerStyle;
