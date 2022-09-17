import styled from "styled-components";

const ConfirmOrderPageStyle = styled.div`
  display: grid;
  gap: 8px;
  .info_card {
    display: grid;
    padding: 16px;
    border-radius: 8px;
    background-color: var(--card_color);
    gap: 8px;

    .info_card_item {
      display: grid;
      position: relative;
      .title {
        font-size: 14px;
        font-weight: 400;
        color: var(--select_color);
      }
      .text {
        font-size: 16px;
        font-weight: 400;
        color: var(--text_primary);
      }
      .want_btn {
        position: absolute;
        right: 0;
        top: 0;
        font-size: 14px;
        font-weight: 400;
        color: var(--static_red);
        transition: 0.3s ease;
        :active {
          transform: scale(0.95);
        }
      }
    }
  }
`;

export default ConfirmOrderPageStyle;
