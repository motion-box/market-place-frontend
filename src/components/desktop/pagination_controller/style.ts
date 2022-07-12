import styled from "styled-components";

const PaginationControllerStyle = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 8px;
  background-color: var(--card_color);
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  .numbers_cont {
    display: grid;
    grid-auto-flow: column;
    gap: 4px;
    .number_button {
      width: 48px;
      height: 48px;
      position: relative;
      border-radius: 8px;
      transition: 0.3s ease;
      font-size: 16px;
      font-weight: 500;
      color: var(--text_primary);
      :hover {
        background-color: var(--border_color);
      }

      span {
        position: absolute;
        width: 24px;
        height: 2px;
        background-color: var(--static_red);
        left: 12px;
        bottom: 8px;
      }
    }

    .dots {
      width: 48px;
      height: 48px;
      text-align: center;
      line-height: 48px;
      font-size: 16px;
      font-weight: 500;
      color: var(--text_primary);
    }
  }

  .control {
    width: 48px;
    height: 48px;
    border-radius: 8px;
    display: grid;
    justify-content: center;
    align-items: center;
    transition: 0.3s ease;
    :hover {
      background-color: var(--bg_color);
    }
  }
  .control_left {
    svg {
      transform: rotate(90deg);
    }
  }
  .control_right {
    svg {
      transform: rotate(270deg);
    }
  }
  .disabled {
    opacity: 0.5;
    :hover {
      background-color: transparent;
    }
  }
`;

export default PaginationControllerStyle;
