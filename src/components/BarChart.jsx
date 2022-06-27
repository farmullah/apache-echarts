import ReactECharts from "echarts-for-react";
import React from "react";
import { alcoholIndex, data, malicAcidIndex } from "../data/wine.data";

const alcoholData = [];
const malicAcidData = [];
[...data].forEach((d) => {
  alcoholData.push(d[alcoholIndex]);
  malicAcidData.push(d[malicAcidIndex]);
});

const options = {
  grid: { top: 8, right: 100, bottom: 100, left: 100 },
  xAxis: {
    type: "category",
    data: alcoholData || [],
    axisTick: {
      show: true,
    },
    axisLabel: {
      rotate: 25,
    },
    name: "Alcohol",
    nameLocation: "middle",
    nameGap: 50,
  },
  yAxis: {
    type: "value",
    name: "Malic Acid",
    data: malicAcidData || [],
    nameLocation: "middle",
    nameGap: 50,
  },
  series: [
    {
      data: malicAcidData || [],
      type: "bar",
      smooth: true,
    },
  ],
  tooltip: {
    trigger: "axis",
  },
};

const BarChart = () => {
  return <ReactECharts className="chart_container" option={options} />;
};

export default BarChart;
