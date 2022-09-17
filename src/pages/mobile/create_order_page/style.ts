import styled from "styled-components";

const MCreateOrderPageStyle = styled.div`
  display: grid;
  width: 100%;
  padding: 64px 16px 32px;
  gap: 16px;

  .container {
    border-radius: 8px;
    background-color: var(--card_color);

    .border_cont {
      width: 100%;
      padding-left: 16px;
      div {
        border-top: 1px solid var(--border_color);
      }
    }
  }
`;

export default MCreateOrderPageStyle;
