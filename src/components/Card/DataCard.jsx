
import React from 'react';

function DataCard({ countries,cardData, mapProps = (item) => (item) }) {
  return (
    <div className="2xl:w-[28vw] 2xl:h-[55vh] xl:w-[28vw] xl:h-[55vh] lg:w-[42vw] lg:h-[52vh] md:w-[42vw] md:h-[47vh] w-[85vw] h-[37vh]  bg-[#1F1D39] rounded-2xl border border-[#444464]">
      <div className="w-[90%] h-[17%] m-auto flex items-center justify-between text-[#f8f8f8]">
        <span className="text-2xl font-medium text-white  tracking-tight">{cardData.title}</span>
        <span className="hover:cursor-pointer text-[#B3BFD8] hover:underline">
          view
        </span>
      </div>

      <div className="w-[70%] h-[25%] flex ml-[5%] items-center justify-between text-[#f8f8f8]">
        <div className="flex flex-col">
          <span className="xl:text-5xl md:text-5xl sm:text-5xl text-3xl font-medium text-white tracking-tight">{cardData.titleCount}</span>
          <span className="text-sm text-[#B3BFD8]">{cardData.title}</span>
        </div>

        {cardData.countryCount && (
          <div className="flex flex-col">
            <span className="xl:text-5xl md:text-5xl sm:text-5xl text-3xl  font-medium text-white tracking-tight">{cardData.countryCount}</span>
            <span className="text-sm text-[#B3BFD8]">Countries</span>
          </div>
        )}
      </div>

      <div className="w-[90%] h-[47%] m-auto text-[#f8f8f8] text-sm">
        <table className="w-[100%] h-[100%]">
          <thead className="border-b border-gray-700 h-7">
            <tr>
              <td className="text-left text-[#B3BFD8] text-xs">Name</td>
              <td className="text-right text-[#B3BFD8] text-xs">Node Machines</td>
            </tr>
          </thead>
          <tbody>
            {countries.map((raw) => {
              const country = mapProps(raw);
              return (
                <tr
                  key={country.id}
                  className="hover:cursor-pointer hover:bg-[#252533]"
                >
                  <td className="text-left 2xl:font-medium xl:font-medium md:font-medium sm:font-normal font-light 2xl:text-base xl:text-base lg:text-base md:text-base sm:text-base text-sm text-white tracking-tight">
                    {cardData.showFlag && country.flag && (
                      <img
                        src={country.flag}
                        alt={country.name}
                        className="w-6 h-4 inline-block mr-3"
                      />
                    )}
                    {country.name}
                  </td>
                  <td className="text-right 2xl:py-2 2xl:px-2 xl:py-2 xl:px-2 lg:py-2 lg:px-2 md:px-2 md:py-2 sm:px-0.5 sm:py-0.5 px-0 py-0">{country.nodesCount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataCard;



