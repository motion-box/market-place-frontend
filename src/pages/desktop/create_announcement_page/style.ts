import styled from "styled-components";

const CreateAnnouncementPageStyle = styled.div`
  display: grid;
  width: 100%;
  background-color: var(--card_color);
  justify-items: center;

  .page_wrapper {
    display: grid;
    gap: 24px;
    grid-auto-rows: max-content;
    justify-items: center;
  }
  h1 {
    font-size: 36px;
    font-weight: 700;
    color: var(--text_primary);
  }
  .card_cont {
    width: 100%;
    max-width: 888px;
    padding: 48px 0;
    background-color: var(--bg_color);
    border-radius: 12px;
    display: grid;
    justify-content: center;

    .card {
      display: grid;
      width: 408px;
      gap: 24px;
    }
  }
`;

export default CreateAnnouncementPageStyle;
