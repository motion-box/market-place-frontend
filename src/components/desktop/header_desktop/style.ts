import styled from "styled-components";
const HeaderStyle = styled.header`
  z-index: 100;
  left: 0;
  position: fixed;
  display: grid;
  width: 100%;
  height: 72px;
  background-color: var(--card_color);
  border-bottom: 1px solid var(--border_color);
  justify-items: center;
  align-items: center;

  .wrapper {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 36px;
  }
  .left_cont {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: auto 1fr;
    gap: 90px;
    align-items: center;
  }
  .logo {
    width: fit-content;
    display: grid;
    grid-auto-flow: column;
    gap: 12px;
    text-decoration: none;
    align-items: center;
    h1 {
      color: var(--text_primary);
    }
  }
  .right_cont {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: end;
    gap: 16px;
  }
`;

export default HeaderStyle;
