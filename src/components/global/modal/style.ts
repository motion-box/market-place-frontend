import styled from "styled-components";

const ModalStyle = styled.div`
  background-color: var(--static_modal_bg);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ModalStyle;
