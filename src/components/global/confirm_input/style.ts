import styled from "styled-components";

const ConfirmInputStyle = styled.div`
  display: grid;
  position: relative;
  z-index: 1;
  width: 320px;
  height: 72px;
  input {
    font-size: 30px;
    font-weight: 700;
    color: var(--text_primary);
    z-index: 1;
    width: 100%;
    height: 100%;
    width: 50px;
    height: 72px;
    border-radius: 8px;
    background-color: var(--card_color);
    border: 1px solid var(--border_color);
    text-align: center;
    line-height: 72px;
    font-size: 30px;
    font-weight: 700;
    color: var(--text_primary);

    ::placeholder {
      font-size: 30px;
      /* font-weight: 700; */
      color: var(--text_secondary);
    }

    :focus {
      outline: 5px red;
    }
    /* opacity: 0; */
    /* border: 1px solid red; */
    /* pointer-events: none; */
  }

  .bg_cont {
    /* z-index: -1; */
    /* user-select: none; */
    /* pointer-events: none; */
    position: absolute;
    top: 0;
    display: grid;
    grid-auto-flow: column;
    gap: 4px;
  }
`;
export default ConfirmInputStyle;
