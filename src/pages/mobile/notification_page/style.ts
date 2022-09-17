import styled from "styled-components";

const MNotificationPageStyle = styled.div`
  display: grid;
  padding: 64px 16px 32px;
  gap: 8px;

  .item {
    position: relative;
    display: grid;
    padding: 16px 12px;
    border-radius: 8px;
    background-color: var(--card_color);
    gap: 4px;
    text-align: start;
    .date {
      font-size: 14px;
      font-weight: 400;
      color: var(--select_color);
    }
    .title {
      font-size: 16px;
      font-weight: 500;
      color: var(--text_primary);
    }

    .badge {
      position: absolute;
      left: -4px;
      top: 21px;
      width: 8px;
      height: 8px;
      background-color: var(--static_red);
      border-radius: 8px;
    }
  }
`;

export default MNotificationPageStyle;
