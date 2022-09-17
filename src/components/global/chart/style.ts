import styled from "styled-components";

const ChartStyle = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas:
    "spacer chart legend"
    "controller controller controller";
  gap: 36px;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: auto auto;
  justify-items: center;
  .chart_cont {
    grid-area: chart;
    width: 624px;
    height: 312px;
  }

  .spacer {
    grid-area: spacer;
  }

  .legend {
    grid-area: legend;
    display: grid;
    gap: 14px;
    grid-auto-rows: max-content;
    align-content: center;
    .legend_item {
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: auto 1fr;
      align-items: center;
      gap: 12px;
      .circle {
        width: 16px;
        height: 16px;
        border-radius: 16px;
        background-color: var(--static_red);
      }
      .gradiented_circle {
        background: linear-gradient(
          0deg,
          var(--grid_bar_first) 0%,
          var(--grid_bar_second) 100%
        );
      }
      span {
        font-size: 14px;
        color: var(--select_color);
      }
    }
  }

  .controller {
    display: grid;
    grid-auto-flow: column;
    grid-area: controller;
    background-color: var(--card_color);
    height: 36px;
    align-items: center;
    gap: 10px;
    border-radius: 6px;

    .control {
      display: grid;
      height: 100%;
      align-items: center;
      padding: 0 16px;
    }
    .control_right {
      svg {
        transform: rotate(180deg);
      }
    }
    span {
      font-size: 18px;
      font-weight: 400;
      color: var(--text_primary);
    }
  }

  @media only screen and (max-width: 1190px) {
    grid-template-areas:
      "legend legend"
      "chart chart"
      "spacer spacer"
      "controller controller";
    grid-template-columns: 1fr;
    gap: 36px 0;
    .legend {
      grid-auto-flow: column;
      justify-content: center;
    }
  }
  @media only screen and (max-width: 500px) {
    .chart_cont {
      width: 100%;
      height: 100%;
    }
    .controller {
      width: 100%;
      box-shadow: none;
      padding: 0;

      .control {
        padding: 0;
      }
      .control_right {
        justify-content: end;
      }
      span {
        text-align: center;
      }
    }
  }
`;

export default ChartStyle;
