import styled from "styled-components";

const MSellerReviewPageStyle = styled.div`
  display: grid;
  width: 100%;

  .seller_cont {
    border-top: 1px solid var(--bg_color);
    z-index: 100;
    position: fixed;
    display: grid;
    gap: 8px;
    background-color: var(--card_color);
    top: 56px;
    width: 100%;
    height: 56px;
    padding: 0 16px;
    align-items: center;
    grid-template-columns: auto 1fr auto;

    .image_cont {
      position: relative;
      width: 40px;
      height: 40px;
      border-radius: 40px;
      overflow: hidden;
    }
    span {
      font-size: 16px;
      font-weight: 500;
      color: var(--text_primary);
    }
  }

  .content_cont {
    display: grid;
    gap: 8px;
    background-color: var(--bg_color);
    padding: 120px 16px 32px;
  }
`;

export default MSellerReviewPageStyle;
