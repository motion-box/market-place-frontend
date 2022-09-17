import styled from "styled-components";

const BoostAnnouncementPageStyle = styled.div`
  display: grid;
  width: 100%;
  justify-items: center;
  padding: 56px 0 32px;

  .top_container {
    display: grid;
    width: 100%;
    background-color: var(--card_color);
    justify-content: center;
    position: relative;

    .icon_cont {
      position: absolute;
      z-index: 1;
      left: 50%;
      top: 55px;
      transform: translateX(-50%);
    }
    .circles {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    .title_cont {
      padding: 0 16px;
      display: grid;
      width: 100%;
      gap: 12px;
      margin-top: 150px;

      h1 {
        font-size: 24px;
        font-weight: 700;
        color: var(--text_primary);
        text-align: center;
      }
      p {
        font-size: 16px;
        font-weight: 400;
        color: var(--text_primary);
        padding-bottom: 20px;
        border-bottom: 1px solid var(--border_color);
      }
    }

    .product_cont {
      display: grid;
      grid-auto-flow: column;
      padding: 16px;
      gap: 8px;

      .image_cont {
        width: 48px;
        height: 40px;
        overflow: hidden;
        border-radius: 4px;
        position: relative;
      }

      .text_cont {
        display: grid;
        .title {
          font-size: 14px;
          font-weight: 400;
          color: var(--text_secondary);
          overflow: hidden;
          display: -webkit-box;
          line-clamp: 1;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
        }
      }
      .price_cont {
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: max-content;
        gap: 12px;

        .price {
          font-size: 16px;
          font-weight: 500;
          color: var(--text_primary);
          line-height: 25px;
        }
        .old_price {
          width: fit-content;
          margin-top: 2px;
          font-size: 16px;
          font-weight: 400;
          color: var(--select_color);
          line-height: 20px;
          position: relative;
          s {
            left: 0;
            top: 40%;
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: var(--static_red);
          }
        }
      }
    }
  }

  .inputs_cont {
    display: grid;
    background-color: var(--bg_color);
    padding: 16px;
    gap: 12px;
  }
`;

export default BoostAnnouncementPageStyle;
