import styled from "styled-components";

const MUserProfilePageStyle = styled.div`
  display: grid;
  width: 100%;
  justify-items: center;
  padding: 64px 16px 32px;
  gap: 12px;

  .inputs_cont {
    width: 100%;
    border-radius: 8px;
    background-color: var(--card_color);

    .line {
      margin-left: 16px;
      border-bottom: 1px solid var(--border_color);
    }

    .select_btn {
      svg {
        width: 18px;
        height: 18px;
      }
    }
  }
`;

export default MUserProfilePageStyle;
