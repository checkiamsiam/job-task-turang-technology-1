import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export default function GenderDistributionChart() {
 const  options = {
    maintainAspectRatio: false,
}
  const data = {
    labels: ["Female", "Male", "Others"],
    datasets: [
      {
        label: "Gender Diostribution",
        data: [30, 25, 45],
        backgroundColor: ["#3D1C73", "#7443C6", "#AA86E3"],
        // borderColor:["#3D1C73", "#7443C6", "#AA86E3"],
        // hoverOffset: 3,
        borderWidth: 1,
        borderRadius:1
        
      },
    ],
  };
  return (
    <>
    <div className=" ">
    <Doughnut options={options} data={data} height="250" className="" />
    </div>
    </>
  );
}
