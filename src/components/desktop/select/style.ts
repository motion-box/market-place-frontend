import styled from "styled-components";

interface Iprops {
  disabled?: true;
}

const SelectStyle = styled.div<Iprops>`
  width: 100%;
  position: relative;
  pointer-events: ${(props) => (props.disabled ? "none" : "initial")};

  .selector_cont {
    display: grid;
    width: 100%;
    height: 60px;
    border-radius: 8px;
    border: 1px solid var(--border_color);
    background-color: ${(props) =>
      props.disabled ? "var(--border_color)" : "var(--card_color)"};
    grid-template-columns: 1fr auto;
    gap: 8px;
    cursor: pointer;

    .text_cont {
      position: relative;
      .text {
        font-size: 16px;
        font-weight: 400;
        color: var(--text_primary);
        padding-left: 16px;
        padding-top: 30px;
      }
    }

    .chevron {
      width: 16px;
      height: 16px;
      transform: rotate(90deg);
      margin-right: 16px;
      margin-top: 22px;
      transition: 0.3s ease;
    }
    .chevron_active {
      transform: rotate(270deg);
    }
  }
  .all_items_cont {
    position: relative;
  }
  .options_cont {
    width: calc(100% + 80px);
    z-index: 10;
    display: grid;
    position: absolute;
    top: 52px;
    left: -15px;
    background-color: var(--card_color);
    padding: 24px 24px 0;
    border-radius: 12px;
    gap: 4px;
    overflow: hidden;

    .title {
      font-size: 18px;
      font-weight: 500;
      color: var(--text_primary);
      margin-bottom: 16px;
    }

    .items_cont {
      max-height: 300px;
      overflow-y: scroll;
      padding-bottom: 24px;
      ::-webkit-scrollbar {
        height: 0px;
        display: none;
      }
      .option_item {
        width: 100%;
        display: grid;
        height: 44px;
        grid-template-columns: 1fr auto;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid var(--border_color);
        span {
          text-align: start;
          font-size: 16px;
          font-size: 400;
          color: var(--text_primary);
          line-height: 44px;
        }
      }
      .last_item {
        border-bottom: none;
      }
    }
  }

  .clipper {
    pointer-events: none;
    width: 100%;
    height: 80px;
    position: absolute;
    bottom: 0px;
    z-index: 100;
    transition: 0.1s ease;
    background: linear-gradient(
      180deg,
      var(--card_gradient_0) 0%,
      var(--card_gradient_1) 90%
    );
  }
  .top_clipper {
    top: 0;
    transform: rotate(180deg);
  }

  .placeholder_big {
    pointer-events: none;
    user-select: none;
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    color: var(--text_secondary);
    position: absolute;
    left: 16px;
    top: calc(50% - 10px);
  }
  .placeholder_small {
    pointer-events: none;
    user-select: none;
    font-size: 14px;
    line-height: 16px;
    font-weight: 400;
    color: var(--select_color);
    position: absolute;
    left: 16px;
    top: 10px;
  }
`;

export default SelectStyle;
