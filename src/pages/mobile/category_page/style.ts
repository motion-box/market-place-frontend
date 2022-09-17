import styled from "styled-components";

const MCategoryPageStyle = styled.div`
  display: grid;
  width: 100%;
  padding: 64px 16px 32px;
  gap: 20px;

  .top_cont {
    width: 100%;
    display: grid;
    gap: 5px;
    justify-items: center;
    .image_cont {
      position: relative;
      width: 100%;
      height: 160px;
      margin-bottom: 3px;
    }
    h1 {
      font-size: 28px;
      font-weight: 700;
      color: var(--text_primary);
    }
    .subtitle {
      font-size: 16px;
      font-weight: 500;
      color: var(--static_red);
    }
  }

  .buttons_cont {
    display: grid;
    gap: 5px;

    .big_buttons_cont {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 5px;
      .item {
        display: grid;
        border-radius: 8px;
        background-color: var(--card_color);
        padding: 8px;
        gap: 5px;
        .image_cont {
          position: relative;
          height: 80px;
        }
        span {
          font-size: 12px;
          font-weight: 400;
          color: var(--text_primary);
          text-align: center;
        }
      }
    }
    .small_buttons_cont {
      display: grid;
      background-color: var(--card_color);
      border-radius: 8px;
      padding-left: 16px;
      .item {
        display: grid;
        width: 100%;
        height: 52px;
        grid-template-columns: 1fr auto;
        padding-right: 12px;
        align-items: center;
        border-bottom: 1px solid var(--border_color);

        span {
          font-size: 16px;
          font-weight: 400;
          color: var(--text_primary);
        }

        svg {
          transform: rotate(270deg);
        }
      }

      .last_item {
        border-bottom: none;
      }
    }
  }
`;

export default MCategoryPageStyle;
