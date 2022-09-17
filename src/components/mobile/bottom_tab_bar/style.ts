import styled from "styled-components";

const BottomTabBarStyle = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 1000;
  display: grid;
  width: 100%;
  height: 74px;
  background-color: var(--card_color);
  border-top: 1px solid var(--border_color);
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  align-items: center;
  gap: 4px;
  padding: 0 8px;
  padding-bottom: 8px;

  .item {
    display: grid;
    justify-content: center;
    justify-items: center;
    gap: 4px;

    .text {
      font-size: 11px;
      font-weight: 400;
      color: var(--text_secondary);
    }
    .text_active {
      color: var(--static_red);
    }
  }
`;

export default BottomTabBarStyle;
