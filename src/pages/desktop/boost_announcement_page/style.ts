import styled from "styled-components";

const BoostAnnouncementPageStyle = styled.div`
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

  .card_cont {
    width: 100%;
    max-width: 888px;
    padding: 48px 0;
    background-color: var(--bg_color);
    border-radius: 12px;
    display: grid;
    /* justify-content: center; */
    justify-items: center;
    gap: 24px;
    position: relative;

    .card_top_cont {
      display: grid;
      width: 100%;
      max-width: 624px;
      grid-template-columns: 1fr auto;
      gap: 24px;
      .left_side {
        display: grid;
        gap: 13px;
        .title_cont {
          display: grid;
          grid-auto-flow: column;
          gap: 16px;
          grid-template-columns: max-content;
          h1 {
            font-size: 28px;
            font-weight: 700;
            color: var(--text_primary);
          }
          button {
            width: 36px;
            height: 36px;
            display: grid;
            justify-content: center;
            align-items: center;
          }
        }
        .description {
          font-size: 18px;
          font-weight: 400;
          color: var(--text_primary);
        }
      }
      .right_cont {
        width: 192px;
        position: relative;
        display: grid;
        justify-content: center;
        align-items: center;
        padding-bottom: 15px;
        .icon {
          z-index: 1;
          position: absolute;
          top: 55px;
          left: 60px;
        }
        .circles {
          position: absolute;
          top: 0;
        }
      }
    }

    .product_card {
      z-index: 1;
      display: grid;
      width: 100%;
      max-width: 624px;
      grid-template-columns: auto 1fr;
      background-color: var(--card_color);
      border-radius: 8px;
      border: 1px solid var(--border_color);
      gap: 16px;
      padding: 12px 24px 12px 12px;
      align-items: center;

      .image_cont {
        position: relative;
        width: 72px;
        height: 72px;
        border-radius: 4px;
        overflow: hidden;
      }
      .text_cont {
        display: grid;
        gap: 3px;
        .title {
          font-size: 18px;
          font-weight: 500;
          color: var(--text_primary);
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
          font-size: 20px;
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

    .card {
      display: grid;
      width: 100%;
      max-width: 408px;
      gap: 12px;
    }

    .close_btn {
      width: 36px;
      height: 36px;
      position: absolute;
      display: grid;
      justify-content: center;
      align-items: center;
      left: 48px;
      top: 48px;
    }
  }
`;

export default BoostAnnouncementPageStyle;
