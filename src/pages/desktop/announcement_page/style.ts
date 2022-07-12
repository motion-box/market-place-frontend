import styled from "styled-components";

const AnnouncementPageStyle = styled.div`
  display: grid;
  width: 100%;
  gap: 48px;
  justify-items: center;
  .product_wrapper {
    width: 100%;
    display: grid;
    background-color: var(--card_color);
    justify-items: center;
    .page_wrapper {
      display: grid;
      grid-template-columns: 1.5fr 1fr;
      gap: 36px;
    }
  }
  .recomendations {
    display: grid;
    margin-bottom: 48px;
    gap: 48px;
  }
`;

export default AnnouncementPageStyle;
