import styled from "styled-components";

const AccountHeaderStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
  grid-auto-rows: max-content;

  .left_cont {
    display: grid;
    gap: 8px;

    h1 {
      font-size: 28px;
      font-weight: 700;
      color: var(--text_primary);
    }
  }
  .image_cont {
    position: relative;
    width: 72px;
    height: 72px;
    border-radius: 72px;
    overflow: hidden;
  }

  .address {
    grid-column: 1 / 3;
    font-size: 14px;
    font-weight: 400;
    color: var(--text_secondary);
    overflow: hidden;
    display: -webkit-box;
    line-clamp: 1;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }
  .fill_data_cont {
    grid-column: 1 / 3;
    display: grid;
    width: 100%;
    background-color: var(--card_color);
    padding: 20px 16px;
    border-radius: 8px;
    justify-content: center;
    justify-items: center;
    gap: 4px;
    .title {
      font-size: 16px;
      font-weight: 500;
      color: var(--text_primary);
    }
    .subtitle {
      font-size: 16px;
      font-weight: 400;
      color: var(--static_red);
    }
  }
`;

export default AccountHeaderStyle;
