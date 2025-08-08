import React, { useState, useEffect } from "react";
import { CircleAlert } from "lucide-react";
import { Progress } from "./ui/progress";

function Subnet() {
  const data = [
    "Subnets",
    "Types",
    "Countries",
    "Nodes",
    "Decentralization",
    "State",
    "Canisters",
    "Transactions",
    "ComputeLoad",
  ];

  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    const countryISOMap = {
      afghanistan: "af",
      albania: "al",
      algeria: "dz",
      andorra: "ad",
      angola: "ao",
      argentina: "ar",
      armenia: "am",
      australia: "au",
      austria: "at",
      azerbaijan: "az",
      bahamas: "bs",
      bahrain: "bh",
      bangladesh: "bd",
      barbados: "bb",
      belarus: "by",
      belgium: "be",
      belize: "bz",
      benin: "bj",
      bhutan: "bt",
      bolivia: "bo",
      bosnia: "ba",
      botswana: "bw",
      brazil: "br",
      brunei: "bn",
      bulgaria: "bg",
      burkina: "bf",
      burundi: "bi",
      cambodia: "kh",
      cameroon: "cm",
      canada: "ca",
      cape_verde: "cv",
      central_african_republic: "cf",
      chad: "td",
      chile: "cl",
      china: "cn",
      colombia: "co",
      comoros: "km",
      congo: "cg",
      costa_rica: "cr",
      croatia: "hr",
      cuba: "cu",
      cyprus: "cy",
      czechia: "cz",
      denmark: "dk",
      djibouti: "dj",
      dominica: "dm",
      dominican_republic: "do",
      ecuador: "ec",
      egypt: "eg",
      el_salvador: "sv",
      equatorial_guinea: "gq",
      eritrea: "er",
      estonia: "ee",
      eswatini: "sz",
      ethiopia: "et",
      fiji: "fj",
      finland: "fi",
      france: "fr",
      gabon: "ga",
      gambia: "gm",
      georgia: "ge",
      germany: "de",
      ghana: "gh",
      greece: "gr",
      grenada: "gd",
      guatemala: "gt",
      guinea: "gn",
      guinea_bissau: "gw",
      guyana: "gy",
      haiti: "ht",
      honduras: "hn",
      hungary: "hu",
      iceland: "is",
      india: "in",
      indonesia: "id",
      iran: "ir",
      iraq: "iq",
      ireland: "ie",
      israel: "il",
      italy: "it",
      jamaica: "jm",
      japan: "jp",
      jordan: "jo",
      kazakhstan: "kz",
      kenya: "ke",
      kiribati: "ki",
      korea_north: "kp",
      korea_south: "kr",
      kuwait: "kw",
      kyrgyzstan: "kg",
      laos: "la",
      latvia: "lv",
      lebanon: "lb",
      lesotho: "ls",
      liberia: "lr",
      libya: "ly",
      liechtenstein: "li",
      lithuania: "lt",
      luxembourg: "lu",
      madagascar: "mg",
      malawi: "mw",
      malaysia: "my",
      maldives: "mv",
      mali: "ml",
      malta: "mt",
      marshall_islands: "mh",
      mauritania: "mr",
      mauritius: "mu",
      mexico: "mx",
      micronesia: "fm",
      moldova: "md",
      monaco: "mc",
      mongolia: "mn",
      montenegro: "me",
      morocco: "ma",
      mozambique: "mz",
      myanmar: "mm",
      namibia: "na",
      nauru: "nr",
      nepal: "np",
      netherlands: "nl",
      new_zealand: "nz",
      nicaragua: "ni",
      niger: "ne",
      nigeria: "ng",
      north_macedonia: "mk",
      norway: "no",
      oman: "om",
      pakistan: "pk",
      palau: "pw",
      panama: "pa",
      papua_new_guinea: "pg",
      paraguay: "py",
      peru: "pe",
      philippines: "ph",
      poland: "pl",
      portugal: "pt",
      qatar: "qa",
      romania: "ro",
      russia: "ru",
      rwanda: "rw",
      saint_kitts_nevis: "kn",
      saint_lucia: "lc",
      saint_vincent_grenadines: "vc",
      samoa: "ws",
      san_marino: "sm",
      sao_tome_principe: "st",
      saudi_arabia: "sa",
      senegal: "sn",
      serbia: "rs",
      seychelles: "sc",
      sierra_leone: "sl",
      singapore: "sg",
      slovakia: "sk",
      slovenia: "si",
      solomon_islands: "sb",
      somalia: "so",
      south_africa: "za",
      spain: "es",
      sri_lanka: "lk",
      sudan: "sd",
      suriname: "sr",
      sweden: "se",
      switzerland: "ch",
      syria: "sy",
      taiwan: "tw",
      tajikistan: "tj",
      tanzania: "tz",
      thailand: "th",
      timor_leste: "tl",
      togo: "tg",
      tonga: "to",
      trinidad_tobago: "tt",
      tunisia: "tn",
      turkey: "tr",
      turkmenistan: "tm",
      tuvalu: "tv",
      uganda: "ug",
      ukraine: "ua",
      united_arab_emirates: "ae",
      united_kingdom: "gb",
      united_states: "us",
      uruguay: "uy",
      uzbekistan: "uz",
      vanuatu: "vu",
      venezuela: "ve",
      vietnam: "vn",
      yemen: "ye",
      zambia: "zm",
      zimbabwe: "zw",
    };

    const urls = {};
    Object.entries(countryISOMap).forEach(([country, iso]) => {
      urls[country] = `https://flagcdn.com/24x18/${iso}.png`;
    });
    setCountryData(urls);
  }, []);

  const row1 = [
    {
      Subnets: ["2fqc...mqe", "authorized only"],
      Types: "Appliation",
      Countries: ["afghanistan", "pakistan", "finland", "+10"],
      Nodes: 13,
      Decentralization: 5.0,
      State: 535.8,
      Canisters: "92'727",
      Transaction: 58,
      ComputeLoad: 49,
    },
    {
      Subnets: ["2zs4v...hae", "authorized only"],
      Types: "Appliation",
      Countries: ["india", "pakistan", "finland", "+7"],
      Nodes: 13,
      Decentralization: 4.6,
      State: 0,
      Canisters: "0",
      Transaction: 57,
      ComputeLoad: 46,
    },
    {
      Subnets: ["3hhby..rqe", "authorized only"],
      Types: "Appliation",
      Countries: ["india", "pakistan", "finland", "+10"],
      Nodes: 13,
      Decentralization: 5.0,
      State: 867.0,
      Canisters: "28'112",
      Transaction: 67,
      ComputeLoad: 507,
    },
    {
      Subnets: ["4ecnw...sqe", "Public"],
      Types: "Appliation",
      Countries: ["india", "pakistan", "finland", "+10"],
      Nodes: 13,
      Decentralization: 5.0,
      State: 167.3,
      Canisters: "8'233",
      Transaction: 123,
      ComputeLoad: 2.145,
    },
    {
      Subnets: ["4utur..mqe", "Public"],
      Types: "Appliation",
      Countries: ["india", "pakistan", "finland", "+9"],
      Nodes: 13,
      Decentralization: 4.8,
      State: 8.3,
      Canisters: "2'801",
      Transaction: 8,
      ComputeLoad: 80,
    },
  ];
  return (
    <div>
      <div className="w-screen h-full bg-[#121028] flex justify-center items-center">
        <div className="w-[90%] h-full flex justify-center items-center">
          <div className="w-[100%]">
            <div className="text-2xl font-semibold text-white mb-7 ml-3">
              47 Subnets
            </div>
            <div className="w-[100%] bg-[#1F1E38] rounded-2xl border-t border-b border-[#444464] overflow-x-auto">
              <table className="border-collapse">
                <thead>
                  <tr>
                    {data.map((item, index) => (
                      <th
                        key={index}
                        className="text-white text-sm font-semibold border-t border-b border-[#444464] px-4 py-4 text-left"
                        style={{ width: "175px", minWidth: "175px" }}
                      >
                        <div className="flex items-center gap-2">
                          {item}
                          <CircleAlert size={13} className="text-blue-600 " />
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {row1.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {/* Subnets */}
                      <td
                        className="text-white border-t border-b border-[#444464] px-4 py-2 "
                        style={{ width: "175px", minWidth: "175px" }}
                      >
                        <div className="flex flex-col">
                          <span className=" text-purple-900 cursor-pointer font-bold hover:underline">
                            {row.Subnets[0]}
                          </span>
                          <span className="text-xs text-gray-400">
                            {row.Subnets[1]}
                          </span>
                        </div>
                      </td>

                      {/* Types */}
                      <td
                        className="text-white border-t border-b border-[#444464] px-4 py-2"
                        style={{ width: "175px", minWidth: "175px" }}
                      >
                        <span className="rounded-4xl bg-[#9B95D5] text-xs px-2 py-0.5 text-black font-semibold">
                          {row.Types}
                        </span>
                      </td>

                      {/* Countries */}
                      <td
                        className="text-white border-t border-b border-[#444464] px-4 py-2"
                        style={{ width: "175px", minWidth: "175px" }}
                      >
                        <div className="flex items-center gap-2">
                          {/* First 3 countries as flags */}
                          {row.Countries.slice(0, 3).map((c, i) => (
                            <img
                              key={i}
                              src={countryData[c.toLowerCase()]} // lookup from your pre-generated URLs
                              alt={c}
                              className="w-6 h-4 object-cover rounded-sm"
                            />
                          ))}

                          {/* Last item as text */}
                          <span className="text-md font-semibold text-gray-300">
                            {row.Countries[3]}
                          </span>
                        </div>
                      </td>

                      {/* Nodes */}
                      <td
                        className="text-white border-t border-b border-[#444464] px-4 py-2"
                        style={{ width: "175px", minWidth: "175px" }}
                      >
                        <span className="font-semibold">{row.Nodes}</span>
                      </td>

                      {/* Decentralization */}
                      <td
                        className="text-white border-t border-b border-[#444464] px-4 py-2"
                        style={{ width: "175px", minWidth: "175px" }}
                      >
                        <span>
                          {" "}
                          <span className="px-1 py-1 border-1 border-[#444464] font-semibold text-xm">
                            {row.Decentralization.toFixed(1)}
                          </span>{" "}
                          / 5.0
                        </span>{" "}
                        <span className="text-[#B8BFD8] bg-[#B8BFD8] text-lg mr-0.5 rounded-xs ml-2">
                          ..
                        </span>
                        <span className="text-[#B8BFD8] bg-[#B8BFD8] text-lg mr-0.5 rounded-xs ">
                          ..
                        </span>
                        <span className="text-[#B8BFD8] bg-[#B8BFD8] text-lg mr-0.5 rounded-xs ">
                          ..
                        </span>
                        <span className="text-[#B8BFD8] bg-[#B8BFD8] text-lg mr-0.5 rounded-xs ">
                          ..
                        </span>
                        <span
                          className={`text-[#B8BFD8] relative bg-[#B8BFD8] mr-0.5 rounded-xs ${
                            row.Decentralization < 4.9
                              ? "text-xs top-0.5"
                              : "text-lg"
                          }`}
                        >
                          {row.Decentralization < 4.9 ? "..." : ".."}
                        </span>
                      </td>

                      {/* State */}
                      <td
                        className="text-white border-t border-b border-[#444464] px-4 py-2"
                        style={{ width: "175px", minWidth: "175px" }}
                      >
                        <div className="flex flex-col gap-1">
                          <span className="font-semibold text-sm">{row.State} <span>GiB</span></span>
                          <Progress

                            value={row.State / 10}
                            className="w-24 h-1 bg-[#444464] text-blue-50   "
                          />
                        </div>
                      </td>

                      {/* Canisters */}
                      <td
                        className="text-white border-t border-b border-[#444464] px-4 py-2"
                        style={{ width: "175px", minWidth: "175px" }}
                      >
                        <div className="flex flex-col gap-1">
                          <span className="font-semibold text-sm">{row.Canisters}</span>
                          <Progress

                            value={row.State / 10}
                            className="w-24 h-1 bg-[#444464] text-blue-50   "
                          />
                        </div>
                      </td>

                      {/* Transaction */}
                      <td
                        className="text-white border-t border-b border-[#444464] px-4 py-2"
                        style={{ width: "175px", minWidth: "175px" }}
                      >
                        <div className="flex flex-col gap-1">
                          <span className="font-semibold text-sm">{row.Transaction} TX/s </span>
                          <Progress

                            value={row.State / 10}
                            className="w-24 h-1 bg-[#444464] text-blue-50   "
                          />
                        </div>
                      </td>

                      {/* ComputeLoad */}
                      <td
                        className="text-white border-t border-b border-[#444464] px-4 py-2"
                        style={{ width: "175px", minWidth: "175px" }}
                      >
                        <div className="flex flex-col gap-1">
                          <span className="font-semibold text-sm">{row.ComputeLoad} MIEPs</span>
                          <Progress

                            value={row.State / 10}
                            className="w-24 h-1 bg-[#444464] text-blue-50   "
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subnet;
