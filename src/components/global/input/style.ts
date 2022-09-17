import styled, { css } from "styled-components";

interface Iprops {
  icon: boolean;
  disabled?: true;
  error?: boolean;
  hasBorder: boolean;
}
const InputStyle = styled.div<Iprops>`
  display: grid;
  pointer-events: ${(props) => (props.disabled ? "none" : "initial")};
  background-color: ${(props) =>
    props.disabled ? "var(--border_color)" : "var(--card_color)"};
  height: 60px;
  border-radius: 8px;
  position: relative;
  ${(props) =>
    props.hasBorder &&
    css<Iprops>`
      border: 1px solid
        ${(props) =>
          props.error ? "var(--static_red)" : "var(--border_color)"};
    `}
  input {
    padding: ${(props) =>
      props.icon ? "22px 46px 0 16px" : "22px 16px 0 16px"};
    font-size: 16px;
    color: ${(props) =>
      props.error ? "var(--static_red)" : "var(--text_primary)"};
  }

  .icon_cont {
    user-select: none;
    pointer-events: none;
    position: absolute;
    right: 16px;
    top: calc(50% - 10px);
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

  .error_dialog {
    display: grid;
    align-items: center;
    z-index: 1;
    position: absolute;
    width: calc(100% + 2px);
    left: 50%;
    transform: translateX(-50%) !important;
    top: 68px;
    height: 50px;
    background-color: var(--card_color);
    border-radius: 8px;
    padding: 0 16px;
    span {
      width: 100%;
      font-size: 16px;
      font-weight: 500;
      color: var(--text_primary);

      overflow: hidden;
      display: -webkit-box;
      line-clamp: 1;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
    }
  }
`;

export default InputStyle;
