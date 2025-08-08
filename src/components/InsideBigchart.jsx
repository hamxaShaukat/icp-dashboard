import React, { useEffect, useState } from "react";
import Bigchart from "./Bigchart";
import { Maximize2 } from "lucide-react";
import { CircleAlert } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function InsideBigchart({identity,down_identity,value,boolean,graph_data}) {
  

  let chart = ["1D", "7D", "1M", "3M", "1Y", "All"];
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  let shouldRender = boolean;
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="bg-[#1F1D39] w-[100%] h-[100%] text-white xl:w-[48%] border-2 border-[#444464] rounded-3xl">
      <div className="flex justify-between h-[60px] items-center m-4">
        <div>
          <div className="flex justify-center items-center gap-2">
            <div className="font-semibold ">{identity}</div>
            <CircleAlert size={13} className="text-blue-600 " />
          </div>
          <div className="text-[#444464]">{down_identity}</div>
        </div>
        <Maximize2 size={15} />
      </div>
      <div className="m-4 flex justify-between items-center">
        <div className=" text-3xl">{value}</div>
        {shouldRender && isLargeScreen && (
          <div className="text-xs text-[#444464]">
            <span className="text-[#9B5CFA] bg-[#9B5CFA] rounded-full mr-1">
              ......
            </span>
            <span className="mr-1">30-Day Moving Average</span>
            <span className="text-[#9AF9F1] bg-[#9AF9F1] rounded-full mr-1">
              ......
            </span>
            <span>Current Rate</span>
          </div>
        )}
      </div>
      <div
        className="flex justify-center items-center"
        style={{ width: "100%", height: 150, backgroundColor: "#1F1D39" }}
      >
        <ResponsiveContainer width="90%" height="90%">
          <AreaChart data={graph_data}>
            <defs>
              <linearGradient id="colorPurple" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#B47CFF" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#1B1836" stopOpacity={0} />
              </linearGradient>
            </defs>

            <XAxis dataKey="name" hide />
            <YAxis
              tickFormatter={(value) => `${value.toFixed(4)}M`}
              tick={{ fill: "#ccc", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              width={60}
            />
            <Tooltip
              contentStyle={{ backgroundColor: "#1B1836", border: "none" }}
              labelStyle={{ color: "#aaa" }}
              formatter={(value) => [`${value.toFixed(4)}M`, "Value"]}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#B47CFF"
              fill="url(#colorPurple)"
              strokeWidth={2}
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-6  w-[90%] m-auto bg-[#121028] my-4">
        {chart.map((data, index) => (
          <div
            className={`border-1 border-[#444464] flex justify-center items-center py-1 px-2 h-100% hover:bg-[#292249] "transition-all duration-300 ease-in-out cursor-pointer ${
              index==1 ? "bg-[#292249]" : "bg-[#121028]"
            }`}
            key={index}
          >
            {data}
          </div>
        ))}
      </div>
    </div>
  );
}

export default InsideBigchart;
