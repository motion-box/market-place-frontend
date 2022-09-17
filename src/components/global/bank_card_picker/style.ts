import styled from "styled-components";

const BankCardPickerStyle = styled.div`
  display: grid;
  gap: 13px;
  border-radius: 8px;
  background-color: var(--card_color);
  padding: 16px 0;
  position: relative;
  .title {
    padding: 0 16px;
    font-size: 18px;
    font-size: 500;
    color: var(--text_primary);
  }
  .cards_carousel {
    padding: 0 16px;
    display: grid;
    grid-auto-flow: column;
    gap: 8px;
    overflow-x: scroll;
    ::-webkit-scrollbar {
      height: 0px;
      display: none;
    }
  }
  .controls_cont {
    width: 100%;
    position: absolute;
    .controll {
      position: absolute;
      width: 36px;
      height: 36px;
      border-radius: 36px;
      background-color: var(--card_color);
      display: grid;
      justify-content: center;
      align-items: center;
      top: 73px;
    }
    .controll_left {
      left: 12px;
      svg {
        transform: rotate(90deg);
      }
    }
    .controll_right {
      right: 12px;
      svg {
        transform: rotate(270deg);
      }
    }
  }
  .description {
    padding: 0 16px;
    font-size: 16px;
    font-size: 400;
    color: var(--select_color);
  }
`;
export default BankCardPickerStyle;
