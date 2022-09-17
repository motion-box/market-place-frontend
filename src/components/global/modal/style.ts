import styled, { css } from "styled-components";

interface Iprops {
  $allowBlur?: true;
}

const ModalStyle = styled.div<Iprops>`
  background-color: var(--static_modal_bg);
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(p) =>
    p.$allowBlur &&
    css`
      backdrop-filter: blur(4px);
    `}
`;

export default ModalStyle;
