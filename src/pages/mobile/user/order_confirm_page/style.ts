import styled from "styled-components";

const MOrderConfirmPageStyle = styled.div`
  display: grid;
  width: 100%;
  justify-content: center;
  justify-items: center;
  padding: 104px 16px 32px;
  gap: 48px;
  .top_cont {
    display: grid;
    gap: 12px;
    .title {
      font-size: 28px;
      font-weight: 700;
      color: var(--text_primary);
      text-align: center;
    }
    .description {
      font-size: 18px;
      font-weight: 400;
      color: var(--text_primary);
      text-align: center;
    }
  }
  .bottom_cont {
    width: 100%;
    display: grid;
    gap: 24px;
  }
`;

export default MOrderConfirmPageStyle;
