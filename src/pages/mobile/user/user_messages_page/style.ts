import styled from "styled-components";

const MUserMessagesPageStyle = styled.div`
  width: 100%;
  display: grid;
  padding-top: 64px;
  padding-bottom: 90px;

  .page_cont {
    display: grid;
    padding: 0 16px;
    gap: 12px;
    .messages_cont {
      display: grid;
      gap: 8px;
    }
  }
`;

export default MUserMessagesPageStyle;
