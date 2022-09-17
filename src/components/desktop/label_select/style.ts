import styled from "styled-components";

const LabelSelectStyle = styled.div`
  display: grid;
  gap: 4px;
  position: relative;

  .top_cont {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: center;
    label {
      font-size: 16px;
      font-weight: 400;
      color: var(--text_primary);
    }

    button {
      font-size: 14px;
      font-weight: 400;
      color: var(--static_red);
    }
  }

  .select_btn {
    width: 100%;
    height: 48px;
    display: grid;
    background-color: var(--card_color);
    border: 1px solid var(--border_color);
    border-radius: 8px;
    grid-auto-flow: column;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 16px;
    padding: 0 16px;

    span {
      font-size: 16px;
      font-weight: 400;
      text-align: start;
    }
    .placeholder {
      color: var(--text_secondary);
    }
    .chevron {
      width: 24px;
      height: 24px;
      svg {
        transition: 0.3s ease;
      }
    }
    .chevron_active {
      svg {
        transform: rotate(180deg);
      }
    }
  }

  .dialog {
    z-index: 10;
    top: 65px;
    position: absolute;
    width: 100%;
    border-radius: 12px;
    padding: 24px;
    background-color: var(--card_color);
    display: grid;
    gap: 12px;

    .title {
      font-size: 18px;
      font-weight: 500;
      color: var(--text_primary);
    }

    .options_cont {
      display: grid;
      button {
        display: grid;
        height: 44px;
        align-items: center;
        grid-template-columns: 1fr auto;
        border-bottom: 1px solid var(--border_color);
        span {
          font-size: 16px;
          font-weight: 400;
          color: var(--text_primary);
          text-align: start;
        }
      }
      .last_btn {
        border-bottom: none;
      }
    }
  }
`;

export default LabelSelectStyle;
