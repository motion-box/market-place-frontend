import styled from "styled-components";

const MFilterModalStyle = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  backdrop-filter: brightness(40%);
  background-color: var(--static_black30);
  align-items: flex-end;

  .container {
    display: grid;
    width: 100%;
    max-height: 98vh;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    padding: 0 16px 36px 16px;
    grid-auto-rows: max-content;
    gap: 8px;
    justify-items: center;
    align-items: center;
    background: var(--card_color);

    .top_cont {
      position: relative;
      display: grid;
      width: 100%;
      grid-auto-flow: column;
      justify-content: space-between;

      .clear {
        height: 48px;
        line-height: 48px;
        font-size: 16px;
        font-weight: 400;
        color: var(--static_red50);
      }
      .crear_active {
        color: var(--static_red);
      }
      .title {
        position: absolute;
        left: 50%;
        line-height: 48px;
        transform: translateX(-50%);
        font-size: 18px;
        font-weight: 500;
        color: var(--text_primary);
      }
      .close_btn {
        display: grid;
        width: 32px;
        height: 48px;
        justify-content: center;
        align-items: center;
        margin-right: -8px;
      }
    }
    .sarch_cont {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 8px;

      .cancel {
        height: 100%;
        font-size: 16px;
        font-weight: 400;
        color: var(--static_red);
      }
    }
  }
`;

export default MFilterModalStyle;
