import styled from "styled-components";

const CategoryDropDownStyle = styled.div`
  height: 40px;
  display: grid;
  align-items: center;
  background-color: var(--card_color);
  border-radius: 8px;
  position: relative;
  .dropdown_button {
    height: 100%;
    padding: 0 10px 0 16px;
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    gap: 4px;

    span {
      font-size: 16px;
      color: var(--select_color);
    }
  }
  .dropdown {
    z-index: 10;
    position: absolute;
    width: 375px;
    top: 36px;
    left: -8px;
    padding: 24px;
    border-radius: 12px;
    background-color: var(--card_color);
    display: grid;
    gap: 16px;

    .titler {
      display: grid;
      grid-auto-flow: column;
      justify-content: space-between;
      align-items: center;

      span {
        font-size: 18px;
        font-weight: 500;
        color: var(--text_primary);
      }
      button {
        font-size: 16px;
        color: var(--static_red);
        transition: 0.5s ease;
        :active {
          transform: scale(0.95);
        }
      }
    }
  }
`;

export default CategoryDropDownStyle;
