import styled from "styled-components";

const ProductDataMobileStyle = styled.div`
  display: grid;
  width: 100%;
  background-color: var(--card_color);
  grid-auto-rows: max-content;

  .top_cont {
    display: grid;
    grid-auto-rows: max-content;
    gap: 8px;
    padding: 16px;
    .title {
      font-size: 16px;
      font-weight: 400;
      color: var(--text_primary);
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
    .address_cont {
      display: grid;
      width: 100%;
      grid-auto-flow: column;
      justify-content: space-between;
      span {
        font-size: 14px;
        font-weight: 400;
        color: var(--text_secondary);
      }
    }
    .guarantee {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 8px;
      align-items: center;
      span {
        font-size: 14px;
        font-weight: 400;
        color: var(--select_color);
      }
    }
    .buttons_cont {
      display: grid;
      grid-auto-flow: column;
      gap: 8px;
    }
  }

  .info_cont {
    display: grid;
    width: 100%;
    padding: 16px;
    background-color: var(--bg_color);
    gap: 12px;

    .title {
      font-size: 18px;
      font-weight: 500;
      color: var(--text_primary);
    }

    .stats {
      border-top: 1px solid var(--border_color);
      padding-top: 12px;
      padding-bottom: 12px;
      display: grid;
      grid-auto-flow: column;
      justify-content: space-between;
      span {
        font-size: 14px;
        font-weight: 400;
        color: var(--text_secondary);
      }
      button {
        font-size: 14px;
        font-weight: 400;
        color: var(--text_secondary);
      }
    }

    .info_bottom {
      display: grid;
      gap: 24px;
      .map_cont {
        position: relative;
        display: grid;
        width: calc(100% + 32px);
        margin-left: -16px;
        height: 120px;
        background-color: var(--card_color);
        align-items: center;

        p {
          text-align: start;
          z-index: 1;
          margin-left: 16px;
          max-width: 50%;
          font-size: 16px;
          font-weight: 500;
          color: var(--static_black);
          overflow: hidden;
          display: -webkit-box;
          line-clamp: 4;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
        }
        .gradient {
          position: absolute;
          width: 80%;
          height: 100%;
          background: linear-gradient(
            270deg,
            var(--card_gradient_0) 0%,
            var(--card_gradient_1) 60%
          );
        }
      }
    }
  }

  .recommend_cont {
    display: grid;
    padding: 24px 16px 88px;
    gap: 24px;
    background-color: var(--bg_color);

    .seller_announcements {
      display: grid;
      grid-auto-flow: column;
      justify-content: space-between;
      align-items: center;
      .titler {
        font-size: 18px;
        font-weight: 500;
        color: var(--text_primary);
      }
      button {
        font-size: 16px;
        font-weight: 500;
        color: var(--static_red);
      }
    }
    .same_cont {
      display: grid;
      gap: 16px;
      .titler {
        font-size: 18px;
        font-weight: 500;
        color: var(--text_primary);
      }
    }
  }

  @media only screen and (min-width: 501px) {
    .info_cont {
      .info_bottom {
        grid-auto-flow: column;
        align-items: center;

        .map_cont {
          width: 100%;
          margin: 0;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid var(--border_color);
        }
      }
    }
  }
`;

export default ProductDataMobileStyle;
