import styled from "styled-components";

const MUserReviewsPageStyle = styled.div`
  display: grid;
  padding: 64px 16px 32px;
  gap: 8px;

  @media only screen and (min-width: 501px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default MUserReviewsPageStyle;
