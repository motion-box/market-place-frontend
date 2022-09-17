import styled from "styled-components";

const FinishAnnouncementPageStyle = styled.div`
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
    justify-items: center;
    gap: 24px;
    .card_title_cont {
      display: grid;
      gap: 8px;
      .card_title {
        font-size: 28px;
        font-weight: 700;
        color: var(--text_primary);
        text-align: center;
      }
      .card_subtitle {
        font-size: 18px;
        font-weight: 400;
        color: var(--text_primary);
      }
    }
    .card {
      display: grid;
      width: 408px;
      gap: 24px;

      .booster_item {
        display: grid;
        width: 100%;
        background-color: var(--card_color);
        border-radius: 12px;
        padding: 20px 24px;
        position: relative;
        overflow: hidden;
        z-index: 1;
        gap: 8px;
        text-decoration: none;
        transition: 0.3s ease;
        :active {
          transform: scale(0.98);
        }
        .title_cont {
          display: grid;
          gap: 4px;
          .title {
            font-size: 24px;
            font-weight: 700;
            color: var(--text_primary);
            text-align: start;
          }
          .description {
            font-size: 16px;
            font-weight: 400;
            color: var(--select_color);
            text-align: start;
          }
        }
        .price {
          font-size: 18px;
          font-weight: 500;
          color: var(--text_primary);
          text-align: start;
        }
        .circles {
          position: absolute;
          left: -54px;
          top: -55.5px;
          z-index: -1;
        }
      }
    }
  }
`;

export default FinishAnnouncementPageStyle;
