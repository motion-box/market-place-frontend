import React, { useEffect, useRef, useState } from "react";
import ChartStyle from "./style";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartArea,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import colorsPalet from "../../../resources/constants/colors";
import { ChartJSOrUndefined } from "react-chartjs-2/dist/types";
import { useAppSelector } from "../../../redux/store";
import { useTranslation } from "next-i18next";
import { ArrowBackIcon } from "../../../resources/icons/CommonIcons";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

ChartJS.defaults.font.size = 14;
ChartJS.defaults.font.family = "GoogleSans";

interface Iprops {
  labels: string[];
  dataBarOne: number[];
  dataBarTwo: number[];
}

const Chart = (props: Iprops) => {
  const { labels, dataBarOne, dataBarTwo } = props;
  const { t } = useTranslation();
  const { theme } = useAppSelector((state) => state.globalSliceReducer);
  const chartRef = useRef<ChartJSOrUndefined<"bar">>(null);
  const [chartData, setChartData] = useState<ChartData<"bar">>({
    datasets: [],
  });
  const getOrCreateTooltip = (chart: any) => {
    let tooltipEl = chart.canvas.parentNode.querySelector("div");

    if (!tooltipEl) {
      tooltipEl = document.createElement("div");
      tooltipEl.style.background = colorsPalet[theme].card_color;
      tooltipEl.style.borderRadius = "8px";
      tooltipEl.style.color = colorsPalet[theme].text_secondary;
      tooltipEl.style.opacity = 1;
      tooltipEl.style.width = "fit-content";
      tooltipEl.style.boxShadow = "0px 5px 10px 0px rgba(0, 0, 0, 0.16)";
      tooltipEl.style.pointerEvents = "none";
      tooltipEl.style.position = "absolute";
      tooltipEl.style.transform = "translate(-50%, 0)";
      tooltipEl.style.transition = "all .1s ease";

      const table = document.createElement("table");
      table.style.margin = "0px";

      tooltipEl.appendChild(table);
      chart.canvas.parentNode.appendChild(tooltipEl);
    }

    return tooltipEl;
  };

  const externalTooltipHandler = (context: any) => {
    // Tooltip Element
    const { chart, tooltip } = context;
    const tooltipEl = getOrCreateTooltip(chart);

    // Hide if no tooltip
    if (tooltip.opacity === 0) {
      tooltipEl.style.opacity = 0;
      return;
    }

    // Set Text
    let barIndex = tooltip.dataPoints[0].dataIndex;
    let dataOne = dataBarOne[barIndex];
    // let dataOne = 0;
    let dataTwo = dataBarTwo[barIndex];
    // let dataTwo = 0;
    if (tooltip.body) {
      const titleLines = tooltip.title || [];
      const bodyLines = tooltip.body.map((b: any) => b.lines);

      const tableHead = document.createElement("thead");

      titleLines.forEach((title: string) => {
        const tableBorder = document.createElement("span");
        tableBorder.style.width = "100px";
        tableBorder.style.height = "12px";
        tableBorder.style.backgroundColor = colorsPalet[theme].border_color;

        const tr = document.createElement("tr") as HTMLDivElement;
        tr.style.borderWidth = "0";

        const th = document.createElement("th") as HTMLDivElement;
        th.style.borderWidth = "0";
        th.style.fontWeight = "500";
        th.style.color = colorsPalet[theme].text_secondary;
        const text = document.createTextNode(title);

        th.appendChild(text);
        tr.appendChild(th);
        tr.appendChild(tableBorder);
        tableHead.appendChild(tr);
      });

      const tableBody = document.createElement("tbody");

      bodyLines.forEach(() => {
        const tr = document.createElement("tr") as HTMLDivElement;
        tr.style.backgroundColor = "inherit";
        tr.style.borderWidth = "0";

        const td = document.createElement("td") as HTMLDivElement;
        td.style.borderWidth = "0";

        const textBlock = document.createElement("div");
        textBlock.style.display = "grid";
        textBlock.style.width = "100%";
        textBlock.style.gridAutoFlow = "column";
        textBlock.style.justifyContent = "space-between";
        textBlock.style.gap = "8px";
        textBlock.style.borderTop = "1px solid var(--border_color)";
        textBlock.style.marginTop = "2px";
        textBlock.style.paddingTop = "3px";

        const textOneCont = document.createElement("span");
        textOneCont.style.fontWeight = "500";
        textOneCont.style.color = colorsPalet[theme].select_color;
        const textOne = document.createTextNode(
          dataOne.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        );

        const textTwoCont = document.createElement("span");
        textTwoCont.style.fontWeight = "500";
        textTwoCont.style.color = colorsPalet[theme].static_red;
        const textTwo = document.createTextNode(
          dataTwo.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        );

        textOneCont.appendChild(textOne);
        textTwoCont.appendChild(textTwo);
        textBlock.appendChild(textOneCont);
        textBlock.appendChild(textTwoCont);
        td.appendChild(textBlock);
        tr.appendChild(td);
        tableBody.appendChild(tr);
      });

      const tableRoot = tooltipEl.querySelector("table");

      // Remove old children
      while (tableRoot.firstChild) {
        tableRoot.firstChild.remove();
      }

      // Add new children
      tableRoot.appendChild(tableHead);
      tableRoot.appendChild(tableBody);
    }

    const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

    // Display, position, and set styles for font
    tooltipEl.style.opacity = 1;
    tooltipEl.style.left = positionX + tooltip.caretX + "px";
    tooltipEl.style.top = positionY + tooltip.caretY + "px";
    tooltipEl.style.font = tooltip.options.bodyFont.string;
    tooltipEl.style.padding =
      tooltip.options.padding + "px " + tooltip.options.padding + "px";
  };

  const options: any = {
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
        position: "nearest",
        external: externalTooltipHandler,
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
        grid: {
          borderDash: [4, 4],
          lineWidth: 1,
          color: colorsPalet[theme].grid_border_color,
        },
        ticks: {
          align: "center",
        },
      },
      y: {
        grid: {
          drawBorder: true,
          color: colorsPalet[theme].grid_border_color,
        },
        stacked: false,
        ticks: {
          beginAtZero: true,
          align: "center",
          color: colorsPalet[theme].text_secondary,
        },
      },
    },
  };

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) return;

    // chart.canvas.parentNode.style.height = "400px";
    const chartData: ChartData<"bar", any> = {
      labels,
      datasets: [
        {
          label: t("watches_with_users"),
          borderRadius: 50,
          borderSkipped: false,
          maxBarThickness: 12,
          backgroundColor: colorsPalet[theme].static_red,
          data: dataBarOne,
        },
        {
          label: t("watches_in_line"),
          borderRadius: 50,
          borderSkipped: false,
          maxBarThickness: 12,
          backgroundColor: createGradient(chart.ctx, chart.chartArea),
          data: dataBarTwo,
        },
      ],
    };
    setChartData(chartData);
  }, []);

  function createGradient(ctx: CanvasRenderingContext2D, area: ChartArea) {
    const colorStart = colorsPalet[theme].grid_bar_first;
    const colorEnd = colorsPalet[theme].grid_bar_second;

    const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

    gradient.addColorStop(0, colorStart);
    gradient.addColorStop(1, colorEnd);

    return gradient;
  }

  return (
    <ChartStyle>
      <div className="spacer" />
      <div className="chart_cont">
        <Bar ref={chartRef} options={options} data={chartData} />
      </div>
      <div className="legend">
        <div className="legend_item">
          <div className="circle gradiented_circle" />
          <span>{t("watches_in_line")}</span>
        </div>
        <div className="legend_item">
          <div className="circle" />
          <span>{t("watches_with_users")}</span>
        </div>
      </div>
      <div className="controller item_shadow">
        <button className="control control_left">
          <ArrowBackIcon color="text_primary" />
        </button>
        <span>28 октября 2021</span>
        <button className="control control_right">
          <ArrowBackIcon color="text_primary" />
        </button>
      </div>
    </ChartStyle>
  );
};

export default Chart;
