import styled from "styled-components";

const MSupportPageStyle = styled.div`
  display: grid;
  width: 100%;
  overflow: hidden;
  padding: 56px 0 32px;

  .content_cont {
    display: grid;
    z-index: 1;
    justify-items: center;
    align-content: center;
    height: calc(100vh - 88px);
    padding: 0 16px;
    gap: 12px;
    grid-auto-rows: max-content;

    .title {
      font-size: 24px;
      font-weight: 700;
      color: var(--text_primary);
      text-align: center;
      margin-top: 12px;
    }
    .subtitle {
      font-size: 16px;
      font-weight: 400;
      color: var(--text_secondary);
      text-align: center;
    }
    .buttons_cont {
      width: 100%;
      margin-top: 36px;
      display: grid;
      gap: 12px;

      .link_item {
        width: 100%;
        height: 60px;
        display: grid;
        align-items: center;
        grid-template-columns: 1fr auto;
        padding: 0 20px;
        border-radius: 8px;
        background-color: var(--card_color);
        border: 1px solid var(--bg_color);
        transition: 0.2s ease;
        text-decoration: none;
        span {
          color: var(--text_primary);
          transition: 0.2s ease;
        }
        :hover {
          border: 1px solid var(--border_color);
        }
        :active {
          transform: scale(0.98);
        }
      }
    }
  }

  .image_wrapper {
    top: 0px;
    position: absolute;
    width: 100vw;
    height: 100vw;
    overflow: hidden;
    left: 50%;
    transform: translateX(-50%);
    z-index: 0;
    display: grid;
    justify-content: center;
    align-items: center;
    .image_cont {
      width: 120vw;
      height: 120vw;
      user-select: none;
      pointer-events: none;
      position: relative;
      display: grid;
      justify-items: center;
      align-items: center;
      overflow: hidden;

      .gradient {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1;
        background: radial-gradient(
          circle,
          rgba(245, 245, 245, 0.6) 0%,
          rgba(245, 245, 245, 1) 100%
        );
      }
      .image {
        width: 150%;
        height: 100%;
        overflow: hidden;
        position: relative;
        display: grid;
      }
    }
  }
`;

export default MSupportPageStyle;
