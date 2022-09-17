import styled from "styled-components";

const MOrderHeaderStyle = styled.div`
  display: grid;
  gap: 12px;

  .product_cont {
    display: grid;
    width: 100%;
    grid-template-columns: auto 1fr;
    padding: 12px 16px;
    gap: 12px;
    border-radius: 8px;
    background-color: var(--card_color);

    .image_cont {
      position: relative;
      width: 48px;
      height: 40px;
      border-radius: 4px;
      overflow: hidden;
    }
    .text_cont {
      display: grid;
      gap: 4px;
      .title {
        font-size: 14px;
        font-weight: 400;
        color: var(--text_primary);
        overflow: hidden;
        display: -webkit-box;
        line-clamp: 2;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
      }
      .price {
        font-size: 16px;
        font-weight: 500;
        color: var(--text_primary);
      }
    }
  }

  .data_cont {
    display: grid;
    padding: 16px;
    border-radius: 8px;
    background-color: var(--card_color);
    gap: 8px;

    .status_cont {
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: max-content;
      gap: 4px;
      align-items: center;
      span {
        font-size: 14px;
        font-weight: 400;
      }
    }
    .info_cont {
      display: grid;

      .title {
        font-size: 14px;
        font-weight: 400;
        color: var(--text_secondary);
      }
      .value {
        font-size: 14px;
        font-weight: 400;
        color: var(--text_primary);
      }
    }
  }
`;

export default MOrderHeaderStyle;
