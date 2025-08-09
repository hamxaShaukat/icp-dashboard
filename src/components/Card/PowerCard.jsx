import React from 'react'
import Chart from "react-apexcharts";
import { CircleAlert } from "lucide-react";
function PowerCard() {
    const series = [
    {
        name: "Power Consumption",
        data: [
        16000, 17000, 18000, 15500, 17500, 16000, 16500, 18500, 17000, 16000,
        9000, 18000, 17000, 16000, 19000, 17500, 22000, 16000, 17000, 18500,
        16000, 17000, 19000, 15000, 16500, 17000, 23000, 18000, 16000, 17000,
        15500, 16000, 19000, 17500, 16000, 15000, 18500, 16500, 17000, 24000,
        16000, 18000, 17000, 9000, 15000, 18500, 16000, 19000, 17000, 17500,
        16500, 18000, 16000, 15500, 18500, 17000, 16000, 19000, 17000, 16500,
        15000, 18000, 16000, 17500, 25000, 16000, 18500, 15500, 17000, 15000,
        18000, 16500, 19000, 17500, 17000, 16000, 15500, 22000, 17000, 18500,
        16500, 15000, 18000, 9000, 16000, 17000, 18000, 16500, 24000, 15000,
        16000, 17000, 18000, 16000, 17000, 19000, 16000, 15000, 16500, 17000,
        23000, 16000, 18000, 17500, 15500, 16000, 18500, 9000, 16000, 17500,
        18000, 16500, 19000, 16000, 15000, 17000, 18000, 16500, 15500, 25000,
        16000, 17000, 18000, 9000, 18500, 16500, 15000, 17000, 18000, 16000,
        17000, 18000, 24000, 15500, 16500, 15000, 17000, 18500, 16000, 17500,
        16500, 15000, 18000, 16500, 17500, 17000, 25000, 15500, 18000, 16500,
        16000, 17000, 9000, 18500, 15000, 16500, 18000, 17500, 16000, 15000,
        19000, 16000, 15500, 17000, 24000, 16500, 18000, 16000, 17000, 18500,
        16000, 17500, 16500, 18000, 15000, 19000, 16000, 17500, 16500, 15500,
        18000, 24000, 16000, 17000, 18500, 16500, 15000, 18000, 16000, 17000,
        18000, 16500, 15500, 23000, 15000, 17000, 18000, 16500, 17500, 15000,
        16000, 9000, 16500, 16000, 17000, 15500, 25000, 17000, 18500, 16500,
        16000, 17500, 15000, 16000, 18000, 16500, 15000, 18500, 16000, 24000,
        16000, 17500, 15000, 18500, 16000, 17000, 15000, 18000, 9000, 16000,
        18500, 17500, 15500, 16000, 17000, 15000, 24000, 16000, 18500, 17000,
        15500, 16500, 18000, 17000, 16000, 17500, 15000, 19000, 16000, 16500,
        23000, 15000, 18000, 16500, 15500, 18000, 15000, 17000, 16500, 17500
        ]
    },
]
  const options = {
    chart: {
      type: "area",
      toolbar: { show: false},
      background: "transparent",
      sparkline: {
      enabled: true,
      },
    },
    dataLabels: {
    enabled: false,
   },
   colors: ["#FFFFFF"],
    stroke: {
      show: true,
      curve: "straight",
      width: 3,
    },
    fill: {
      type: "gradient",
      gradient: {
        type: "vertical", 
        shadeIntensity: 1,
        opacityFrom: 0.9,
        opacityTo: 0.3,
      },
    },
    tooltip: {
      theme: "light",
      enabled: true,
    },
    xaxis: {
        labels: { show: false },
        axisTicks: { show: false },
        axisBorder: { show: false },
    },
    yaxis: {
        show: false,
    },
    grid: {
        show: false,
    },
  };
  return (
    <div className="2xl:w-[28vw] 2xl:h-[55vh] xl:w-[28vw] xl:h-[55vh] lg:w-[42vw] lg:h-[52vh] md:w-[42vw] md:h-[47vh] w-[85vw] h-[37vh] bg-[#24F0A5] rounded-2xl border border-[#444464]">
      <div className="w-[90%] h-[17%] text-black m-auto flex justify-start items-center">
        <span className='text-2xl'>
            Power Consumption
        </span>
        <span className="ml-1">
            <CircleAlert className="text-blue-700 h-4"/>
        </span>
      </div>
      <div className='w-[100%] h-[57%]'>
        <Chart options={options} series={series} type="area" height="100%" width="100%" />
      </div>
      <div className='w-[90%] h-[16%] m-auto flex justify-start items-end text-4xl font-medium '>386.616 
        <span className='ml-1 text-xs'>
            kW
        </span>
      </div>
    </div>
  )
}

export default PowerCard
