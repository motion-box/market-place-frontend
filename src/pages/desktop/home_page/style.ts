import styled from "styled-components";

const HomePageStyle = styled.div`
  display: grid;
  gap: 24px;
  .first_row {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 32px;
    align-items: center;
  }
  .color_palet {
    .item {
      display: flex;
      gap: 20px;
      div {
        width: 50px;
        height: 50px;
      }
    }
  }
`;

export default HomePageStyle;
