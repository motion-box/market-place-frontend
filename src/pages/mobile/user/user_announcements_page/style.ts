import styled from "styled-components";

const UserAnnouncementsPageStyle = styled.div`
  display: grid;
  width: 100%;
  padding: 64px 0 32px;
  gap: 12px;

  .top_cont {
    padding: 0 16px;
  }

  .cards_cont {
    display: grid;
    background-color: var(--card_color);
    border-radius: 8px;
    padding-top: 4px;
    padding-left: 16px;

    .product_item {
      padding: 12px 16px 12px 0;
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: auto 1fr;
      border-bottom: 1px solid var(--border_color);
      gap: 12px;
      .image_cont {
        position: relative;
        width: 96px;
        height: 82px;
        border-radius: 8px;
        overflow: hidden;
      }
      .right_cont {
        display: grid;
        gap: 4px;
        .title {
          font-size: 13px;
          font-weight: 400;
          color: var(--text_primary);
          text-align: start;
          overflow: hidden;
          display: -webkit-box;
          line-clamp: 2;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
        }
        .center_cont {
          display: grid;
          grid-auto-flow: column;
          justify-content: space-between;
          align-items: center;
          .price_cont {
            display: grid;
            grid-auto-rows: max-content;

            .price {
              font-size: 20px;
              font-weight: 500;
              color: var(--text_primary);
              line-height: 25px;
              text-align: start;
            }
            .old_price {
              width: fit-content;
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

          .sale {
            display: grid;
            align-items: center;
            width: fit-content;
            height: 23px;
            padding: 0 8px;
            border-radius: 4px;
            background-color: var(--static_red50);
            font-size: 12px;
            font-weight: 400;
            color: var(--static_white);
          }
        }
        .bottom_cont {
          display: grid;
          width: 100%;
          grid-auto-flow: column;
          justify-content: space-between;
          .date {
            font-size: 12px;
            font-weight: 400;
            color: var(--text_secondary);
            text-align: start;
          }
          .additional_cont {
            display: grid;
            grid-auto-flow: column;
            gap: 4px;
            align-items: center;
            span {
              color: var(--text_secondary);
            }
          }
        }
      }
    }
    .product_item_last {
      border-bottom: 1px solid transparent;
    }
  }
`;

export default UserAnnouncementsPageStyle;
