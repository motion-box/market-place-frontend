import styled from "styled-components";

const MPickupModalStyle = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  backdrop-filter: brightness(40%);
  background-color: var(--static_black30);
  align-items: flex-end;

  .container {
    position: relative;
    display: grid;
    width: 100%;
    max-height: 98vh;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    padding: 48px 16px 36px 16px;
    grid-auto-rows: max-content;
    gap: 12px;
    align-items: center;
    background: var(--card_color);
    overflow-y: scroll;

    .top_cont {
      display: grid;
      gap: 12px;
      h1 {
        font-size: 18px;
        font-weight: 500;
        color: var(--text_primary);
      }
      p {
        font-size: 16px;
        font-weight: 400;
        color: var(--text_primary);
      }
    }
    .map {
      width: calc(100% + 32px);
      margin-left: -16px;
      height: 240px;
      background-color: var(--bg_color);
    }

    .address_cont {
      display: grid;
      gap: 4px;
      .name {
        font-size: 16px;
        font-weight: 400;
        color: var(--text_primary);
      }
      .distance {
        font-size: 16px;
        font-weight: 500;
        color: var(--text_primary);
      }
    }
    .button_cont {
      margin-top: 12px;
      display: grid;
      width: 100%;
      gap: 16px;
    }
    .close_button {
      position: absolute;
      right: 8px;
      top: 8px;
      width: 30px;
      height: 30px;
    }
  }
`;

export default MPickupModalStyle;
