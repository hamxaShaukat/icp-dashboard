import React from "react";
import Chart from "react-apexcharts";
import { CircleAlert } from "lucide-react";
import { Maximize2 } from "lucide-react";

export default function GraphCard({title,value,unit,series, options,smallData}){
  return (
    <div className="2xl:w-[28vw] 2xl:h-[55vh] xl:w-[28vw] xl:h-[55vh] lg:w-[42vw] lg:h-[52vh] md:w-[42vw] md:h-[47vh] w-[85vw] h-[37vh]  bg-[#1F1D39] rounded-2xl border border-[#444464]">
      <div className="w-[90%] h-[15%]  m-auto flex justify-start items-center">
        <span className={`${smallData ? "text-sm" : "text-xl"} text-white tracking-tight`}>
          {title}
        </span>
        <span className="ml-1">
          <CircleAlert className="text-blue-600 h-4"/>
        </span>
        <span className="ml-auto">
          <Maximize2 className="h-4 text-[#D0B2FD] hover:cursor-pointer hover:h-5" />
        </span>
      </div>
      <div className="w-[90%] h-[15%]  m-auto flex justify-start items-end">
        <span className="2xl:text-5xl xl:text-5xl md:text-4xl sm:text-4xl text-3xl font-medium text-white tracking-tight">
          {value}
        </span>
        <span className="text-xl text-white tracking-tight ml-2">
          {unit}
        </span>
      </div>
      <div className="w-[97%] h-[47%] m-auto p-0">
        <Chart options={options} series={series} type="area" height="100%" width="97%" />
      </div>
      <div className="w-[90%] h-[17%] m-auto flex justify-center items-center">
        <div className="w-[100%] h-[60%] border border-[#444464] bg-[#171726] m-auto flex justify-start items-center rounded-lg ">
          <span className="w-[16.67%] h-[100%] border border-[#444464] bg-[#171726] rounded-md hover:bg-gray-800 hover:cursor-pointer flex justify-center items-center font-medium text-white tracking-tight">
            1D
          </span>
          <span className="w-[16.67%] h-[100%] border border-[#444464] bg-[#171726] hover:bg-gray-800 hover:cursor-pointer flex justify-center items-center font-medium text-white tracking-tight">
            7D
          </span>
          <span className="w-[16.67%] h-[100%] border border-[#444464] bg-[#171726] hover:bg-gray-800 hover:cursor-pointer flex justify-center items-center font-medium text-white tracking-tight">
            1M
          </span>
          <span className="w-[16.67%] h-[100%] border border-[#444464] bg-[#171726] hover:bg-gray-800 hover:cursor-pointer flex justify-center items-center font-medium text-white tracking-tight">
            3M
          </span>
          <span className="w-[16.67%] h-[100%] border border-[#444464] bg-[#171726] hover:bg-gray-800 hover:cursor-pointer flex justify-center items-center font-medium text-white tracking-tight">
            1Y
          </span>
          <span className="w-[16.67%] h-[100%] border border-[#444464] bg-[#171726] rounded-md hover:bg-gray-800 hover:cursor-pointer flex justify-center items-center font-medium text-white tracking-tight">
            All
          </span>
        </div>
      </div>
    </div>
  );
}
