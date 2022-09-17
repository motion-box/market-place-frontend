import styled from "styled-components";

const MPriceOfferModalStyle = styled.div`
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
    padding: 12px 16px 36px 16px;
    grid-auto-rows: max-content;
    gap: 20px;
    justify-items: center;
    align-items: center;
    background: var(--card_color);

    .title {
      font-size: 18px;
      font-weight: 500;
      color: var(--text_primary);
    }
    .close_btn {
      position: absolute;
      right: 8px;
      top: 8px;
      width: 30px;
      height: 30px;
    }

    input {
      width: 100%;
      height: 48px;
      border: 1px solid var(--border_color);
      border-radius: 8px;
      font-size: 16px;
      font-weight: 400;
      color: var(--text_primary);
      text-align: center;
      ::placeholder {
        font-size: 16px;
        font-weight: 400;
        color: var(--text_secondary);
        text-align: center;
      }
    }
  }
`;

export default MPriceOfferModalStyle;
