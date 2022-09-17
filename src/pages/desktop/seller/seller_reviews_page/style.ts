import styled from "styled-components";

const SellerReviewsPageStyle = styled.div`
  display: grid;
  width: 100%;
  background-color: var(--card_color);
  .reviews_cont {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
`;

export default SellerReviewsPageStyle;
