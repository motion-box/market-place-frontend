import styled from "styled-components";

interface Iprops {
  colors: string[];
}

const MStoriesModalStyle = styled.div<Iprops>`
  display: grid;
  width: 100vw;
  height: 100vh;
  backdrop-filter: brightness(40%);
  background-color: var(--static_black30);
  align-items: flex-end;

  .container {
    display: grid;
    width: 100%;
    height: 98vh;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    padding: 16px 16px 48px 16px;
    grid-template-rows: auto 1fr auto auto;
    gap: 24px;
    justify-items: center;
    align-items: center;
    background: ${(p) =>
      `linear-gradient(0deg, ${p.colors[0]} 0%, ${p.colors[1]} 100%)`};

    h1 {
      font-size: 24px;
      font-weight: 7000;
      color: var(--static_white);
    }

    .top_cont {
      z-index: 1;
      width: 100%;
      display: grid;
      grid-auto-flow: column;
      gap: 4px;
      grid-template-columns: 1fr auto;
      grid-auto-columns: max-content;
      justify-items: center;
      align-items: center;
    }

    .indicator_cont {
      display: grid;
      width: 100%;
      height: 4px;
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

    .controll {
      position: absolute;
      width: 30%;
      height: 100%;
    }
    .controll_left {
      left: 0;
    }
    .controll_right {
      right: 0;
    }

    .close {
      width: 30px;
      height: 30px;
      display: grid;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default MStoriesModalStyle;
