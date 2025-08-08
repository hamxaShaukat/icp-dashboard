
import React from 'react';

function DataCard({ countries,cardData, mapProps = (item) => (item) }) {
  return (
    <div className="xl:w-[28vw] xl:h-[55vh] md:w-[42vw] md:h-[52vh] w-[85vw] h-[37vh]  bg-[#1F1D39] rounded-2xl border border-[#444464]">
      <div className="w-[90%] h-[17%] m-auto flex items-center justify-between text-[#f8f8f8]">
        <span className="text-2xl font-medium text-white  tracking-tight">{cardData.title}</span>
        <span className="hover:cursor-pointer text-[#B3BFD8] hover:underline">
          view
        </span>
      </div>

      <div className="w-[70%] h-[25%] flex ml-[5%] items-center justify-between text-[#f8f8f8]">
        <div className="flex flex-col">
          <span className="text-5xl font-medium text-white tracking-tight">{cardData.titleCount}</span>
          <span className="text-sm text-[#B3BFD8]">{cardData.title}</span>
        </div>

        {cardData.countryCount && (
          <div className="flex flex-col">
            <span className="text-5xl font-medium text-white tracking-tight">{cardData.countryCount}</span>
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
                  <td className="text-left font-medium text-white text-base tracking-tight">
                    {cardData.showFlag && country.flag && (
                      <img
                        src={country.flag}
                        alt={country.name}
                        className="w-6 h-4 inline-block mr-3"
                      />
                    )}
                    {country.name}
                  </td>
                  <td className="text-right xl:py-1 xl:px-2 md:px-2 md:py-2 px-0.5 py-0.5">{country.nodesCount}</td>
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



