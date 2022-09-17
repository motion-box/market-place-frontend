import styled from "styled-components";

const UserProfilePageStyle = styled.div`
  display: grid;
  width: 100%;
  background-color: var(--card_color);
  padding: 116px 0 0;

  .content_wrapper {
    width: 100%;
    padding: 0 36px 0 24px;
    display: grid;
    gap: 48px;
    justify-items: center;

    .columns_cont {
      z-index: 10;
      width: 100%;
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: auto 1fr 1fr 1fr;
      gap: 48px;
      .column {
        display: grid;
        gap: 12px;
        grid-auto-rows: max-content;
        .titler {
          font-size: 18px;
          font-weight: 500;
          color: var(--text_primary);
          margin-bottom: 8px;
        }
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    .content_wrapper {
      .columns_cont {
        grid-auto-flow: row;
        grid-template-columns: 0.5fr 1fr;
      }
    }
  }
`;

export default UserProfilePageStyle;
