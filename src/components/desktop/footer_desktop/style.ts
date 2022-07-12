import styled from "styled-components";

const FooterDesktopStyle = styled.div`
  display: grid;
  background-color: var(--static_black);
  width: 100%;
  justify-items: center;
  padding: 48px 0;

  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .left_cont {
    display: grid;
    gap: 24px;
    .items_block {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      .items_cont {
        display: grid;
        gap: 8px;
        a {
          width: fit-content;
          text-decoration: none;
          color: var(--static_white);
          font-size: 16px;
          font-weight: 500;
        }
      }
    }
    .support_cont {
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: min-content;
      .support_btn {
        width: 48px;
        height: 48px;
        display: grid;
        justify-content: center;
        align-items: center;
        border-radius: 12px;
        :hover {
          background-color: var(--bg_color);
        }
      }
    }
  }
  .right_cont {
    display: grid;
    justify-content: center;
    gap: 24px;
    grid-auto-rows: min-content;
    .title {
      font-size: 20px;
      font-weight: 500;
      color: var(--static_white);
    }
    .app_stores {
      display: grid;
      gap: 8px;
      .subtitle {
        font-size: 16px;
        font-weight: 400;
        color: var(--static_white);
      }
      .icons {
        display: grid;
        grid-auto-flow: column;
        gap: 20px;
        a {
          transition: 0.2s ease;
          :active {
            transform: scale(0.95);
          }
        }
      }
    }
  }
`;
export default FooterDesktopStyle;
