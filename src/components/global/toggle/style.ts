import styled from "styled-components";

const ToggleStyle = styled.button`
  display: grid;
  width: 36px;
  height: 36px;
  position: relative;
  align-items: center;

  .path {
    width: 100%;
    height: 12px;
    border-radius: 6px;
    background-color: var(--grid_border_color);
    transition: 0.3s ease;
  }
  .path_active {
    background-color: var(--static_red30);
  }
  .circle {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: var(--icon_color);
    transition: 0.3s ease;
    transform: translateX(0%);
  }
  .circle_active {
    background-color: var(--static_red);
    transform: translateX(calc(100% - 4px));
  }
`;

export default ToggleStyle;
