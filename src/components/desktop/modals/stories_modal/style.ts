import styled from "styled-components";

interface Iprops {
  colors: string[];
}

const StoriesModalStyle = styled.div<Iprops>`
  display: grid;
  position: relative;
  background-color: var(--static_black30);
  backdrop-filter: brightness(40%);
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  .container {
    position: relative;
    .stories_card {
      display: grid;
      width: 424px;
      height: 724px;
      border-radius: 12px;
      background: ${(p) =>
        `linear-gradient(135deg, ${p.colors[0]} 0%, ${p.colors[1]} 100%)`};

      padding: 48px;
      grid-template-rows: 1fr auto auto;
      gap: 24px;
      justify-items: center;
      align-items: center;
      h1 {
        font-size: 24px;
        font-weight: 7000;
        color: var(--static_white);
      }
    }

    .indicator_cont {
      display: grid;
      width: 100%;
      height: 4px;
      position: absolute;
      top: -24px;
      grid-auto-flow: column;
      grid-auto-columns: 1fr;
      gap: 4px;
      padding: 0 28px;
      .indicator_item {
        position: relative;
        width: 100%;
        height: 100%;
        background-color: var(--static_gray);
        border-radius: 2px;
        .line {
          width: 0;
          height: 100%;
          background-color: var(--static_white);
          border-radius: 2px;
        }
      }
    }

    .close {
      position: absolute;
      top: -48px;
      right: -80px;
      width: 48px;
      height: 48px;
      border-radius: 8px;
      background-color: var(--static_white12);
      display: grid;
      justify-content: center;
      align-items: center;
    }
    .controll {
      position: absolute;
      top: 50%;
      width: 48px;
      height: 48px;
      border-radius: 8px;
      background-color: var(--static_white12);
      display: grid;
      justify-content: center;
      align-items: center;
    }
    .controll_left {
      left: -80px;
      svg {
        transform: rotate(90deg);
      }
    }
    .controll_right {
      right: -80px;
      svg {
        transform: rotate(270deg);
      }
    }
  }
`;

export default StoriesModalStyle;
