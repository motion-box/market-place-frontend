import styled from "styled-components";

const MCreateAnnouncementPageStyle = styled.div`
  display: grid;
  width: 100%;
  padding: 80px 0 32px;

  .inputs_container {
    margin-top: 24px;
    padding: 0 16px;
    display: grid;
    gap: 24px;

    .selector_cont {
      display: grid;
      gap: 4px;
      .top_cont {
        display: grid;
        grid-auto-flow: column;
        justify-content: space-between;

        label {
          font-size: 14px;
          font-weight: 400;
          color: var(--text_primary);
        }
        button {
          font-size: 14px;
          font-weight: 400;
          color: var(--static_red);
        }
      }
      svg {
        width: 18px;
        height: 18px;
      }
    }
  }
`;

export default MCreateAnnouncementPageStyle;
