import styled from "styled-components";

const MFinishAnnouncementPageStyle = styled.div`
  display: grid;
  padding: 88px 16px 32px;
  gap: 24px;

  .top_cont {
    display: grid;
    gap: 12px;
    justify-content: center;
    justify-items: center;
    .title {
      font-size: 24px;
      font-weight: 700;
      color: var(--text_primary);
      text-align: center;
    }
    .description {
      font-size: 16px;
      font-weight: 400;
      color: var(--text_primary);
      text-align: center;
    }
  }

  .cards_cont {
    display: grid;
    gap: 12px;
  }

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
`;

export default MFinishAnnouncementPageStyle;
