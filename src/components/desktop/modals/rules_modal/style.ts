import styled from "styled-components";

const RulesModalStyle = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  justify-items: end;
  position: relative;

  .card_cont {
    z-index: 1;
    background-color: var(--card_color);
    width: 50%;
    padding: 48px;
    overflow-y: scroll;
    position: relative;

    .close_btn {
      position: absolute;
      top: 8px;
      right: 8px;
    }

    .content {
      h1 {
        font-size: 28px;
        font-weight: 700;
        color: var(--text_primary);
      }
      h2 {
        font-size: 24px;
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
    }
  }

  .backdrop {
    width: 100vw;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export default RulesModalStyle;
