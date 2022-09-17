import styled from "styled-components";

const AccountNavButtonStyle = styled.div`
  height: 48px;
  border-radius: 12px;
  transition: 0.2s ease;
  display: grid;
  padding: 0 12px;
  grid-template-columns: auto 1fr auto;
  gap: 16px;
  align-items: center;
  .icon_color {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    display: grid;
    justify-content: center;
    align-items: center;
  }
  span {
    font-size: 16px;
    font-weight: 400;
    color: var(--text_primary);
    text-align: start;
  }
  .arrow_cont {
    display: grid;
    grid-auto-flow: column;
    gap: 16px;
    align-items: center;
    .badge {
      color: var(--icon_color);
    }
  }
`;

export default AccountNavButtonStyle;
