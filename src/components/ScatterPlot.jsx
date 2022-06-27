import ReactECharts from "echarts-for-react";
import React from "react";
import { colorIntensityIndex, data, hueIndex } from "../data/wine.data";

const colorIntensityData = [];
const hueData = [];
[...data].forEach((d) => {
  colorIntensityData.push(d[colorIntensityIndex]);
  hueData.push(d[hueIndex]);
});

const options = {
  grid: { top: 8, right: 100, bottom: 100, left: 100 },
  xAxis: {
    type: "category",
    data: colorIntensityData || [],
    axisTick: {
      show: true,
    },
    axisLabel: {
      rotate: 25,
    },
    name: "Color Intensity",
    nameLocation: "middle",
    nameGap: 50,
  },
  yAxis: {
    type: "value",
    name: "Hue",
    data: hueData || [],
    nameLocation: "middle",
    nameGap: 50,
  },
  series: [
    {
      data: hueData || [],
      type: "scatter",
      smooth: true,
    },
  ],
  tooltip: {
    trigger: "axis",
  },
};

const ScatterPlot = () => {
  return <ReactECharts className="chart_container" option={options} />;
};

export default ScatterPlot;
