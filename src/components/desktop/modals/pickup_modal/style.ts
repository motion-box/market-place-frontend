import styled from "styled-components";

const PickupModalStyle = styled.div`
  display: grid;
  width: 100%;
  max-width: 624px;
  border-radius: 12px;
  padding: 36px 24px;
  background-color: var(--card_color);
  position: relative;
  gap: 24px;
  max-height: 690px;
  overflow-y: scroll;

  .top_cont {
    display: grid;
    gap: 12px;
    h1 {
      font-size: 28px;
      font-weight: 700;
      color: var(--text_primary);
    }
    p {
      font-size: 18px;
      font-weight: 400;
      color: var(--text_primary);
    }
  }
  .map {
    width: calc(100% + 48px);
    height: 240px;
    margin-left: -24px;
    background-color: var(--bg_color);
  }

  .address_cont {
    display: grid;
    gap: 4px;
    .name {
      font-size: 18px;
      font-weight: 400;
      color: var(--text_primary);
      text-align: center;
    }
    .distance {
      font-size: 18px;
      font-weight: 500;
      color: var(--text_primary);
      text-align: center;
    }
  }
  .button_cont {
    display: grid;
    grid-auto-flow: column;
    justify-content: center;
    gap: 16px;
  }

  .close_button {
    position: absolute;
    right: 8px;
    top: 8px;
    width: 30px;
    height: 30px;
    display: grid;
    justify-content: center;
    align-items: center;
    transition: 0.3s ease;
    border-radius: 15px;
    :hover {
      background-color: var(--bg_color);
    }
  }
`;

export default PickupModalStyle;
