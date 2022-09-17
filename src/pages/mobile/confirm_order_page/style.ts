import styled from "styled-components";

const MConfirmOrderPageStyle = styled.div`
  display: grid;
  padding: 64px 16px 32px;
  gap: 8px;
  .info_card {
    display: grid;
    padding: 16px;
    border-radius: 8px;
    background-color: var(--card_color);
    gap: 8px;

    .info_card_item {
      display: grid;
      position: relative;
      .title {
        font-size: 14px;
        font-weight: 400;
        color: var(--select_color);
      }
      .text {
        font-size: 16px;
        font-weight: 400;
        color: var(--text_primary);
      }
      .want_btn {
        position: absolute;
        right: 0;
        top: 0;
        font-size: 14px;
        font-weight: 400;
        color: var(--static_red);
        transition: 0.3s ease;
        :active {
          transform: scale(0.95);
        }
      }
    }

    .product_cont {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 12px;
      .image_cont {
        position: relative;
        width: 96px;
        height: 82px;
        overflow: hidden;
        border-radius: 8px;
      }
      .text_cont {
        display: grid;
        grid-auto-rows: max-content;
        align-content: space-between;
        .title {
          font-size: 14px;
          font-weight: 400;
          color: var(--text_primary);
          overflow: hidden;
          display: -webkit-box;
          margin-bottom: 8px;
          line-clamp: 2;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
        }
        .price {
          font-size: 20px;
          font-weight: 500;
          color: var(--text_primary);
          line-height: 25px;
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
            top: 50%;
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: var(--static_red);
          }
        }
      }
    }
    p {
      font-size: 16px;
      font-weight: 400;
      color: var(--text_primary);
    }
  }
`;

export default MConfirmOrderPageStyle;
