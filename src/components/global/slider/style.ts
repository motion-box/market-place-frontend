import styled from "styled-components";

const SliderStyle = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  height: 40px;
  border-radius: 8px;
  background-color: var(--border_color);
  padding: 2px 3px 2px 4px;

  button {
    width: fit-content;
    padding: 0 36px;
    position: relative;
    z-index: 1;

    span {
      font-size: 16px;
      font-weight: 500;
      color: var(--text_primary);
      z-index: 5;
    }
    .bg {
      width: calc(100% + 3px);
      height: 100%;
      border-radius: 6px;
      background-color: var(--card_color);
      position: absolute;
      left: -2px;
      top: 0;
      z-index: -1;
    }
    .border {
      width: 1px;
      height: 16px;
      background-color: var(--icon_color);
      position: absolute;
      top: 12px;
      right: 0;
      z-index: -3;
      transform: translateY(-1px);
    }
  }
`;

export default SliderStyle;
