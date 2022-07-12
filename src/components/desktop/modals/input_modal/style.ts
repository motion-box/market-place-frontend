import styled from "styled-components";

const InputModalStyle = styled.div`
  display: grid;
  width: 100%;
  max-width: 624px;
  background-color: var(--card_color);
  border-radius: 12px;
  padding: 36px 24px;
  position: relative;
  gap: 12px;

  .title {
    font-size: 18px;
    font-weight: 500;
    color: var(--text_primary);
  }

  textarea {
    margin-top: 4px;
    height: 120px;
    padding: 12px 16px;
    outline: none;
    resize: none;
    border: 1px solid var(--border_color);
    border-radius: 8px;
    font-size: 16px;
    color: var(--text_primary);
    background-color: var(--card_color);
    ::placeholder {
      font-size: 16px;
      color: var(--select_color);
    }
  }

  .bottom_cont {
    margin-top: 4px;
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
  }

  .selector {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 4px;
    .selector_item {
      height: 34px;
      background-color: var(--card_color);
      border-radius: 6px;
      padding: 0 16px;
      color: var(--text_primary);
      font-weight: 500;
      font-size: 14px;
    }

    .active_item {
      background-color: var(--select_color);
      color: var(--card_color);
      font-weight: 500;
      font-size: 14px;
    }
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

export default InputModalStyle;
