import styled from "styled-components";

const RatingStarsStyle = styled.div`
  width: 78px;
  position: relative;
  .front_cont {
    display: grid;
    grid-auto-flow: column;
    gap: 2px;
    position: absolute;
    overflow: hidden;
  }
  .back_cont {
    display: grid;
    grid-auto-flow: column;
    gap: 2px;
  }
`;

export default RatingStarsStyle;
