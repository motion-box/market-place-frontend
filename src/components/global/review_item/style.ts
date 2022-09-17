import styled, { css } from "styled-components";

interface Iprops {
  isMobile?: true;
}

const ReviewItemStyle = styled.div<Iprops>`
  display: grid;
  padding: ${(p) => (p.isMobile ? "12px" : "20px 16px")};
  background-color: var(--card_color);
  border-radius: 8px;
  gap: 12px;

  .title_cont {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    gap: 24px;
    .left_cont {
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: auto 1fr;
      gap: 16px;

      .image_cont {
        position: relative;
        ${(p) =>
          p.isMobile
            ? css`
                width: 48px;
                height: 40px;
              `
            : css`
                width: 72px;
                height: 60px;
              `}
        border-radius: 4px;
        overflow: hidden;
      }
      .text_cont {
        display: grid;
        gap: ${(p) => (p.isMobile ? "0" : "10px")};
        align-items: center;
        align-content: center;
        .title {
          font-size: ${(p) => (p.isMobile ? "14px" : "16px")};
          font-weight: 500;
          color: var(--select_color);
          overflow: hidden;
          max-width: 260px;
          display: -webkit-box;
          line-clamp: 1;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
        }
        .price {
          font-size: 15px;
          font-weight: 500;
          color: var(--text_primary);
        }
      }
    }
    .right_cont {
      display: grid;
      gap: 8px;
      justify-content: end;
      justify-items: end;

      .date {
        font-size: 16px;
        font-weight: 500;
        color: var(--select_color);
      }
    }
  }

  .border {
    border-bottom: 1px solid var(--border_color);
  }

  .review {
    font-size: ${(p) => (p.isMobile ? "14px" : "16px")};
    font-weight: 400;
    color: var(--text_primary);
  }

  .bottom_cont {
    display: grid;
    grid-auto-flow: column;
    gap: 8px;
    align-items: center;
    grid-auto-columns: max-content;
    .date {
      font-size: 12px;
      font-weight: 400;
      color: var(--text_secondary);
    }
  }
`;

export default ReviewItemStyle;
