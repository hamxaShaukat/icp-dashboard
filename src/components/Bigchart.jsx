import React from "react";
import InsideBigchart from "./InsideBigchart";

function Bigchart() {
  const data = [
    { name: "1", value: 1000 },
    { name: "2", value: 1500 },
    { name: "3", value: 2000 },
    { name: "4", value: 2700 },
    { name: "5", value: 3000 },
    { name: "6", value: 3600 },
    { name: "7", value: 4100 },
    { name: "8", value: 4700 },
    { name: "9", value: 5300 },
    { name: "10", value: 5800 },
    { name: "11", value: 6300 },
    { name: "12", value: 7000 },
    { name: "13", value: 7600 },
    { name: "14", value: 8200 },
    { name: "15", value: 8800 },
  ];
  const data1 = [
    { name: "1", value: 1000 },
    { name: "2", value: 2500 },
    { name: "3", value: 4000 },
    { name: "4", value: 3700 },
    { name: "5", value: 3000 },
    { name: "6", value: 3600 },
    { name: "7", value: 4100 },
    { name: "8", value: 2000 },
    { name: "9", value: 4300 },
    { name: "10", value: 5800 },
    { name: "11", value: 6300 },
    { name: "12", value: 7000 },
    { name: "13", value: 7600 },
    { name: "14", value: 8200 },
    { name: "15", value: 8800 },
  ];
  return (
    <div className="w-screen h-[100%] bg-[#121028] flex justify-center items-center p-3">
      <div className="w-[90%] flex flex-col justify-around items-center xl:flex-row ">
        <InsideBigchart
          identity={"Internet Identity"}
          value={"2’826’469"}
          graph_data={data}
          boolean={false}
        />
        <InsideBigchart
          identity={"Conversion Rate"}
          down_identity={"(ICP-TCYCLES)"}
          value={"3.8201 TCYCLES"}
          boolean={true}
          graph_data={data1}
        />
      </div>
    </div>
  );
}

export default Bigchart;
