import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChartCountry() {
    const options = {
        indexAxis: 'y',
        elements: {
          bar: {
            borderWidth: 2,
          },
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
          },
          title: {
            display: true,
            // text: 'Chart.js Horizontal Bar Chart',
          },
        },
      };
  const data = {
    labels: ["India", "USA", "Germany", "France", "England"],
    datasets: [
      {
        axis: "x",
        // label: "Top 5 countries",
        data: [30, 25, 45, 30, 25],
        backgroundColor: [
          "linear-gradient(90deg, #FED8AE 0%, #F49B36 101.59%)",
          "linear-gradient(270deg, #F8BD7A 0%, #FED6A8 101.32%)",
          "linear-gradient(269.87deg, #F8BD7A 0.11%, rgba(248, 189, 122, 0.53) 99.93%)",
          "linear-gradient(269.87deg, #F8BD7A 0.11%, rgba(248, 189, 122, 0.53) 99.93%)",
          "linear-gradient(269.87deg, #F8BD7A 0.11%, rgba(248, 189, 122, 0.53) 99.93%)",
        ],
        // borderColor: ["#3D1C73", "#7443C6", "#AA86E3"],
        // hoverOffset: 3,
        borderWidth: 1,
        // borderRadius: 1,
      },
    ],
  };
  return (
    <>
      <div>
        <Bar options={options} data={data} width="50%" height="35px" className="" />
      </div>
    </>
  );
}
