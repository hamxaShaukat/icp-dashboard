import React from 'react'
import DataCard from './DataCard'
import GraphCard from './GraphCard'
import PowerCard from './PowerCard'

function Card() {
    const countryData = {
    title: "Data Centers",
    titleCount: 172,
    countryCount: 35,
    showFlag: true,
    data: [
        {
        id:1,
        name: "United States",
        flag: "https://flagcdn.com/24x18/us.png",
        nodesCount: 25
      },
      {
        id:2,
        name: "Pakistan",
        flag: "https://flagcdn.com/24x18/pk.png",
        nodesCount: 7
      },
      {
        id:3,
        name: "India",
        flag: "https://flagcdn.com/24x18/in.png",
        nodesCount: 15
      },
      {
        id:4,
        name: "Germany",
        flag: "https://flagcdn.com/24x18/de.png",
        nodesCount: 27
      },
      {
        id:5,
        name: "Finland",
        flag: "https://flagcdn.com/24x18/fi.png",
        nodesCount: 5
      }
    ]
  }
  const dummyData = {
    title: "Node Providers",
    titleCount: 94,
    showFlag: false,
    data: [
        {
        id:1,
        name: "Marvelous Web3",
        nodes: 17
      },
      {
        id:2,
        name: "Anonshake",
        nodes: 15
      },
      {
        id: 3,
        name: "Conic Ventures",
        nodes: 5
      },
      {
        id: 4,
        name: "Kontrapunt (Pty) Ltd",
        nodes: 6
      },
      {
        id: 5,
        name: "Rivram Inc",
        nodes: 13
      }
    ]
    
  }
  const oldSeries = [
    {
        name: "MIEPs",
        data: [
        15000, 22000, 18000, 25000, 21000,
        30000, 27000, 35000, 33000, 39000,
        41000, 37000, 45000, 43000, 48000,
        52000, 50000, 54000, 56000, 53000,
        60000, 58000, 62000, 61000, 64000,
        67000, 63000, 69000, 71000, 69000,
        73000, 75000, 77000, 74000, 79000,
        81000, 83000, 80000, 86000, 88000,
        91000, 89000, 93000, 96000, 94000,
        98000, 100000, 97000, 115000, 120000
        ]
    },
]

  const oldOptions = {
    chart: {
      type: "area",
      toolbar: { show: false},
      background: "transparent",
    },
    dataLabels: {
    enabled: false,
   },
   colors: ["#9B5CFA"],
    stroke: {
      show: true,
      curve: "straight",
      width: 1.5,
    },
    fill: {
      type: "gradient",
      gradient: {
        type: "vertical", 
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.2,
      },
    },
    tooltip: {
      theme: "dark",
      enabled: true,
    },
    xaxis: {
    labels: { show: false },
    axisTicks: { show: false },
    axisBorder: { show: false },
    },
    yaxis: {
      min: 0,
      max: 120000,
      tickAmount: 3,
      labels: {
         style: {
        colors: "#b3bfd8",
        },
        formatter: function (val) {
          return (val / 1000).toFixed(2) + "K";
        },
      },
    },
    grid: {
        xaxis: {
            lines: {
            show: false 
            }
        },
        yaxis: {
            lines: {
            show: false  
            }
        },
        },
  };
  const smallData = true;
  return (
    <div className='w-[89vw] min-h-[165vh] max-h-auto` m-auto bg-[#121028] flex flex-wrap gap-y-5 gap-x-6'>
      <DataCard
        countries={countryData.data}
        cardData={{
          title: countryData.title,
          titleCount: countryData.titleCount,
          countryCount: countryData.countryCount,
          showFlag: countryData.showFlag
        }}
      />
      <DataCard
        countries={dummyData.data}
        mapProps={(item) => ({
          id: item.id,
          name: item.name,
          nodesCount: item.nodes
        })}
        cardData={{
          title: dummyData.title,
          titleCount: dummyData.titleCount,
          showFlag: dummyData.showFlag
        }}
      />
      <GraphCard  title={"Node Machines"}
                    value={"701"} unit={"of 1'622"}
                    series={[ {              
                        name: "Total Node Machines in Subnets",
                        data: [
                          701, 701, 701, 701, 701,
                          701, 701, 701, 701, 701,
                          701, 701, 701, 701, 701,
                          701, 701, 701, 701, 701,
                          701, 701, 701, 701, 701,
                          701, 701, 701, 701, 701,
                          701, 701, 701, 701, 701,
                          701, 701, 701, 701, 701,
                          701, 701, 701, 701, 701,
                          701, 701, 701, 701, 701
                        ],
                    }]}
                    options={{
                        ...oldOptions,
                        yaxis: {
                        min: 0,
                        max: 800,
                        tickAmount: 4,
                        labels: {
                            style: {
                            colors: "#b3bfd8",
                            },
                            formatter: function (val) {
                            return (val);
                            },
                        },
                        },
                    }} smallData={false}
        />
        <PowerCard/>
        <GraphCard  title={"Million Instructions Executed Per Second"} 
                  value={"60’167"} unit={"MIEPs"} 
                  series={oldSeries} options={oldOptions} smallData={true}
        />
        <GraphCard  title={"Canister Smart Contracts"}
                    value={"953’767"} unit={""}
                    series={[ {              
                        name: "",
                        data: [
                        954.1, 955.3, 954.9, 955.7, 954.2, 955.4, 954.6, 
                        955.0, 954.8, 955.5, 954.3, 955.2, 954.7, 955.9, 
                        954.4, 955.1, 954.5, 955.6, 954.9, 955.3, 954.2, 955.8, 
                        954.6, 955.0, 954.7, 955.4, 954.1, 955.5, 954.8, 955.2, 954.3, 
                        955.7, 954.9, 955.1, 954.6, 955.0, 954.4, 955.8, 954.2, 955.3, 
                        954.7, 955.6, 954.9, 955.4, 954.1, 955.2, 954.8, 955.5, 954.3, 
                        955.0, 954.6, 955.9, 954.2, 955.7, 954.8, 955.1, 954.4, 955.3, 
                        954.9, 955.6, 954.2, 955.0, 954.7, 955.4, 954.1, 955.8, 954.5, 
                        955.2, 954.9, 955.3, 954.6, 955.7, 954.2, 955.1, 954.8, 955.4, 
                        954.3, 955.0, 954.9, 955.6, 954.1, 955.2, 954.7, 955.5, 954.4, 
                        955.9, 954.8, 955.3, 954.2, 955.0, 954.6, 955.7, 954.1, 955.4, 
                        954.9, 955.2, 954.3, 955.8, 954.5, 955.1, 954.7, 955.6, 954.2, 
                        955.0, 954.8, 955.3, 954.4, 955.9, 954.6, 955.2, 954.1, 955.7, 
                        954.9, 955.4, 954.3, 955.0, 954.8, 955.5, 954.2, 955.1, 954.6, 
                        955.3, 954.9, 955.8, 954.4, 955.2, 954.7, 955.0, 954.1, 955.6, 
                        954.8, 955.4, 954.3, 955.9, 954.5, 955.1, 954.2, 955.7, 954.9, 
                        955.3, 954.6, 955.0, 954.4, 955.8, 954.2, 955.5, 954.7, 955.1, 
                        954.3, 955.6, 954.9, 955.2, 954.8, 955.4, 954.1, 955.0, 954.5, 
                        955.7, 954.3, 955.9, 954.6, 955.2, 954.8, 955.1, 954.4, 955.3, 
                        954.9, 955.6, 954.2, 955.0, 954.7, 955.8, 954.1, 955.4, 954.5, 
                        955.2, 954.9, 955.7, 954.3, 955.0, 954.6, 955.5, 954.2, 955.1, 
                        954.8, 955.3, 954.4, 955.9, 954.7, 955.2, 954.1, 955.6, 954.9, 
                        955.0, 954.3, 955.8, 954.5, 955.4, 954.2, 955.7, 954.6, 955.1, 
                        954.8, 955.3, 954.4, 955.0, 954.9, 955.6, 954.2, 955.5, 954.7, 
                        955.2, 954.1, 955.8, 954.3, 955.4, 954.9, 955.0, 954.6, 955.7, 
                        954.2, 955.1, 954.8, 955.3, 954.5, 955.9, 954.4, 955.6, 954.1, 
                        955.2, 954.7, 955.0, 954.3, 955.8, 954.9
                        ],
                    }]}
                    options={{
                        ...oldOptions,
                        yaxis: {
                        min: 952,
                        max: 957,
                        tickAmount: 4,
                        labels: {
                            style: {
                            colors: "#b3bfd8",
                            },
                            formatter: function (val) {
                            return (val) + "K";
                            },
                        },
                        },
                    }} smallData={true}
        />
        <GraphCard  title={"Transactions"}
                    value={"3,713.54"} unit={"TX/s"}
                    series={[ {              
                        name: "Update",
                        data: [
                          3, 4, 3, 4, 3, 3, 4, 3, 4, 4, 3,
                          3, 4, 3, 4, 3, 4, 3, 3, 4, 4, 3,
                          4, 3, 3, 4, 3, 4, 3, 4, 3, 3, 4,
                          4, 3, 3, 4, 3, 4, 3, 4, 3, 3, 4, 
                          3, 4, 3, 4, 3, 4, 3, 4, 3, 3, 4, 
                          3, 4, 3, 4, 3, 4, 3, 3, 4, 3, 4, 
                          3, 4, 3, 3, 4, 3, 4, 3, 4, 3, 3, 
                          4, 3, 4, 3, 4, 3, 3, 4, 3, 4, 3, 
                          4, 3, 3, 4, 3, 4, 3, 4, 3, 3, 4, 
                          3, 4, 3, 4, 3, 3, 4, 3, 4, 3, 4, 
                          3, 3, 4, 3, 4, 3, 4, 3, 3, 4, 3, 
                          4, 3, 4, 3, 3, 4, 3, 4, 3, 4, 3, 
                        ]
                    },{
                      name: "Query",
                        data: [
                          1, 2, 1, 1, 2, 2, 1, 2, 1, 2, 2, 2, 1, 1, 2, 1, 2, 2, 1, 1,
                          2, 1, 1, 2, 2, 1, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 1, 2,
                          2, 1, 1, 2, 2, 1, 2, 1, 2, 1, 2, 2, 1, 2, 1,
                          1, 2, 1, 1, 2, 2, 1, 2, 1, 2, 2, 2, 1, 1, 2, 1, 2, 2, 1, 1,
                          2, 1, 1, 2, 2, 1, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 1, 2,
                          2, 1, 1, 2, 2, 1, 2, 1, 2, 1, 2, 2, 1, 2, 1,
                          1, 2, 1, 1, 2, 2, 1, 2, 1, 2, 2, 2, 1, 1, 2, 1, 2, 2, 1, 1,
                          2, 1, 1,
                        ]
                    }]}
                    options={{
                        ...oldOptions,
                        yaxis: {
                        min: 0,
                        max: 5,
                        tickAmount: 5,
                        labels: {
                            style: {
                            colors: "#b3bfd8",
                            },
                            formatter: function (val) {
                            return (val) + "K";
                            },
                        },
                        },
                        colors: ["#9AF9F1", "#9B5CFA"],
                        legend: {
                          show: true,
                          position: 'top',
                          horizontalAlign: 'left',
                          labels: {
                            colors: "#b3bfd8"
                          }
                        }
                    }} smallData={true}
        />
        <GraphCard  title={"Cycle Burn Rate"}
                    value={"0.0763"} unit={"TCYCLES/s"}
                    series={[ {              
                        name: "MIEPs",
                        data: [
                          6, 34, 29, 43, 39,
                          52, 48, 61, 56, 51,
                          69, 71, 67, 76, 68,
                          81, 78, 84, 87, 82,
                          90, 99, 93, 95, 91,
                          98, 96, 99, 94, 85,
                          79, 75, 70, 62, 54,
                          46, 50, 57, 64, 66,
                          58, 47, 38, 33, 44,
                          49, 60, 65, 73, 77
                        ],
                    }]}
                    options={{
                        ...oldOptions,
                        yaxis: {
                        min: 0,
                        max: 100,
                        tickAmount: 5,
                        labels: {
                            style: {
                            colors: "#b3bfd8",
                            },
                            formatter: function (val) {
                            return (val) + "B";
                            },
                        },
                        },
                    }} smallData={true}
        />
         <GraphCard  title={"Finalization Rate"}
                    value={"84.47"} unit={"Blocks/s"}
                    series={[ {              
                        name: "",
                        data: [
                          85, 87, 86, 90, 88,
                          89, 85, 92, 86, 87,
                          91, 88, 85, 90, 86,
                          88, 87, 91, 86, 89,
                          90, 85, 88, 92, 86,
                          91, 85, 89, 88, 87,
                          90, 86, 92, 89, 85,
                          88, 87, 91, 86, 90,
                          89, 85, 92, 88, 87,
                          86, 91, 90, 89, 85
                        ],
                    }]}
                    options={{
                        ...oldOptions,
                        yaxis: {
                        min: 82.00,
                        max: 94.00,
                        tickAmount: 3,
                        labels: {
                            style: {
                            colors: "#b3bfd8",
                            },
                            formatter: function (val) {
                            return (val) + "Bl/s";
                            },
                        },
                        },
                    }} smallData={true}
        />
    </div>
  )
}
export default Card
