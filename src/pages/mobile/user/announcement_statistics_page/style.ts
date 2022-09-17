import styled from "styled-components";

const AnnouncementStatisticsPageStyle = styled.div`
  display: grid;
  width: 100%;
  padding: 64px 0 0;
  gap: 12px;

  .top_cont {
    padding: 0 16px;
  }

  .page_cont {
    display: grid;
    gap: 24px;
    justify-items: center;
    width: 100%;
    background-color: var(--card_color);
    border-radius: 8px;
    padding: 24px 20px;
  }

  button {
    color: var(--text_primary);
  }
`;

export default AnnouncementStatisticsPageStyle;
