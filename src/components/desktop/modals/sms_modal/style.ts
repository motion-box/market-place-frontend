import styled from "styled-components";

const SmsModalStyle = styled.div`
  display: grid;
  width: 100%;
  max-width: 456px;
  background-color: var(--card_color);
  border-radius: 12px;
  padding: 36px 24px;
  position: relative;
  gap: 48px;
  justify-items: center;

  .top_cont {
    display: grid;
    gap: 12px;
    padding: 0 30px;
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

export default SmsModalStyle;
