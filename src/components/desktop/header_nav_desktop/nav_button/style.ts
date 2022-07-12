import styled from "styled-components";

const NavButtonStyle = styled.div`
  display: grid;

  .nav_button {
    position: relative;
    width: 48px;
    height: 48px;
    border-radius: 12px;
    transition: 0.2s ease;
    :hover {
      background-color: var(--bg_color);
    }
    .icon {
      position: absolute;
      left: 12px;
      top: 12px;
    }
  }
`;

export default NavButtonStyle;
