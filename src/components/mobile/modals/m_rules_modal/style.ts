import styled from "styled-components";

const MRulesModalStyle = styled.div`
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
    padding: 36px 0 36px 0;
    grid-auto-rows: max-content;
    gap: 20px;
    justify-items: center;
    align-items: center;
    background: var(--card_color);

    .close_btn {
      position: absolute;
      right: 8px;
      top: 8px;
      width: 30px;
      height: 30px;
    }

    .content_cont {
      width: 100%;
      max-height: calc(98vh - 36px);
      overflow-y: scroll;
      padding: 0 16px;
      padding-bottom: 48px;

      .content {
        h1 {
          font-size: 18px;
          font-weight: 700;
          color: var(--text_primary);
        }
        h2 {
          font-size: 16px;
          font-weight: 500;
          color: var(--text_primary);
        }
        p {
          font-size: 16px;
          font-weight: 400;
          color: var(--text_primary);
        }
        a {
          font-size: 16px;
          font-weight: 400;
          color: var(--static_red);
        }
        br {
          content: "";
          margin: 2em;
          display: block;
          font-size: 10px;
        }
      }
    }
  }
`;

export default MRulesModalStyle;
