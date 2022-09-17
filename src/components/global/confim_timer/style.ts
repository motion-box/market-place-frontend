import styled from "styled-components";

const ConfirmTimerStyle = styled.div`
  display: grid;
  gap: 14px;
  justify-content: center;
  justify-items: center;

  .timer_cont {
    display: grid;
    grid-auto-flow: column;
    gap: 8px;
    align-items: center;

    .timer {
      font-size: 16px;
      font-weight: 500;
      color: var(--text_primary);
    }
  }
  .resend_btn {
    font-size: 16px;
    font-weight: 500;
    color: var(--text_secondary);
  }
`;

export default ConfirmTimerStyle;
