import styled from "styled-components";

const CreatOrderPageStyle = styled.div`
  display: grid;
  gap: 24px;
  .inputs_title {
    text-align: center;
    font-size: 28px;
    font-weight: 700;
    color: var(--text_primary);
  }
  .inputs_cont {
    display: grid;
    gap: 12px;
  }
  .inputs_line {
    display: grid;
    grid-auto-flow: column;
    gap: 12px;
  }
  button {
    width: 100%;
  }
`;

export default CreatOrderPageStyle;
