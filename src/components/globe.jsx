"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { Card } from "./ui/card";
import Globe from "react-globe.gl";
import { ArrowRight, Menu, Play, SkipBack, SkipForward } from "lucide-react";
import { Separator } from "./ui/separator";
import * as THREE from "three";
import Navbar from "./navbar";
import TransactionCards from "./transaction-cards/transaction-cards";
// Dummy data for countries with their coordinates and stats
const countriesData = [
  {
    id: 1,
    country: "United States",
    city: "Portland",
    region: "North America",
    flag: "🇺🇸",
    lat: 45.5152,
    lng: -122.6784,
    dataCenterId: "pfl",
    dataCenterOwner: "Flexential",
    replicaNodes: 0,
    apiBoundaryNodes: 0,
    totalNodes: 28,
    nodeProviders: 1,
    subnets: 0,
  },
  {
    id: 2,
    country: "Germany",
    city: "Frankfurt",
    region: "Europe",
    flag: "🇩🇪",
    lat: 50.1109,
    lng: 8.6821,
    dataCenterId: "fra",
    dataCenterOwner: "Digital Realty",
    replicaNodes: 5,
    apiBoundaryNodes: 2,
    totalNodes: 45,
    nodeProviders: 3,
    subnets: 2,
  },
  {
    id: 3,
    country: "Singapore",
    city: "Singapore",
    region: "Asia Pacific",
    flag: "🇸🇬",
    lat: 1.3521,
    lng: 103.8198,
    dataCenterId: "sin",
    dataCenterOwner: "Equinix",
    replicaNodes: 3,
    apiBoundaryNodes: 1,
    totalNodes: 32,
    nodeProviders: 2,
    subnets: 1,
  },
  {
    id: 4,
    country: "Japan",
    city: "Tokyo",
    region: "Asia Pacific",
    flag: "🇯🇵",
    lat: 35.6762,
    lng: 139.6503,
    dataCenterId: "nrt",
    dataCenterOwner: "NTT Communications",
    replicaNodes: 4,
    apiBoundaryNodes: 2,
    totalNodes: 38,
    nodeProviders: 2,
    subnets: 1,
  },
  {
    id: 5,
    country: "United Kingdom",
    city: "London",
    region: "Europe",
    flag: "🇬🇧",
    lat: 51.5074,
    lng: -0.1278,
    dataCenterId: "lhr",
    dataCenterOwner: "Telehouse",
    replicaNodes: 2,
    apiBoundaryNodes: 1,
    totalNodes: 25,
    nodeProviders: 1,
    subnets: 10,
  },
  {
    id: 6,
    country: "India",
    city: "Indore",
    region: "Asia",
    flag: "🇮🇳",
    lat: 22.7196,
    lng: 75.8577,
    dataCenterId: "idr",
    dataCenterOwner: "Telehouse",
    replicaNodes: 2,
    apiBoundaryNodes: 1,
    totalNodes: 25,
    nodeProviders: 1,
    subnets: 10,
  },
  {
    id: 7,
    country: "Pakistan",
    city: "Lahore",
    region: "Asia",
    flag: "🇵🇰",
    lat: 31.5204,
    lng: 74.3587,
    dataCenterId: "idr",
    dataCenterOwner: "Telehouse",
    replicaNodes: 2,
    apiBoundaryNodes: 1,
    totalNodes: 25,
    nodeProviders: 1,
    subnets: 10,
  },
  {
    id: 8,
    country: "Thailand",
    city: "Bangkok",
    region: "Asia",
    flag: "🇹🇭",
    lat: 13.7563,
    lng: 100.5018,
    dataCenterId: "idr",
    dataCenterOwner: "Telehouse",
    replicaNodes: 2,
    apiBoundaryNodes: 1,
    totalNodes: 25,
    nodeProviders: 1,
    subnets: 10,
  },
  {
    id: 9,
    country: "Russia",
    city: "Moscow",
    region: "Asia",
    flag: "🇷🇺",
    lat: 55.7569,
    lng: 37.6151,
    dataCenterId: "idr",
    dataCenterOwner: "Telehouse",
    replicaNodes: 2,
    apiBoundaryNodes: 1,
    totalNodes: 25,
    nodeProviders: 1,
    subnets: 10,
  },
  {
    id: 10,
    country: "Australia",
    city: "Sydney",
    region: "Oceania",
    flag: "🇦🇺",
    lat: 33.8727,
    lng: 151.2057,
    dataCenterId: "idr",
    dataCenterOwner: "Telehouse",
    replicaNodes: 2,
    apiBoundaryNodes: 1,
    totalNodes: 25,
    nodeProviders: 1,
    subnets: 10,
  },
  {
    id: 11,
    country: "New Zealand",
    city: "Wellington",
    region: "Oceania",
    flag: "🇳🇿",
    lat: 41.2924,
    lng: 174.7787,
    dataCenterId: "idr",
    dataCenterOwner: "Telehouse",
    replicaNodes: 2,
    apiBoundaryNodes: 1,
    totalNodes: 25,
    nodeProviders: 1,
    subnets: 10,
  },
  {
    id: 12,
    country: "Mexico",
    city: "Durango",
    region: "South America",
    flag: "🇲🇽",
    lat: 24.5593,
    lng: 104.6588,
    dataCenterId: "idr",
    dataCenterOwner: "Telehouse",
    replicaNodes: 2,
    apiBoundaryNodes: 1,
    totalNodes: 25,
    nodeProviders: 1,
    subnets: 10,
  },
  {
    id: 13,
    country: "France",
    city: "Paris",
    region: "Europe",
    flag: "🇫🇷",
    lat: 48.8575,
    lng: 2.3514,
    dataCenterId: "idr",
    dataCenterOwner: "Telehouse",
    replicaNodes: 2,
    apiBoundaryNodes: 1,
    totalNodes: 25,
    nodeProviders: 1,
    subnets: 10,
  },
  {
    id: 14,
    country: "Spain",
    city: "Madrid",
    region: "Europe",
    flag: "🇪🇸",
    lat: 40.4167,
    lng: 3.7033,
    dataCenterId: "idr",
    dataCenterOwner: "Telehouse",
    replicaNodes: 2,
    apiBoundaryNodes: 1,
    totalNodes: 25,
    nodeProviders: 1,
    subnets: 10,
  },
  {
    id: 15,
    country: "Ukraine",
    city: "Lviv",
    region: "Europe",
    flag: "🇺🇦",
    lat: 49.8397,
    lng: 24.0297,
    dataCenterId: "idr",
    dataCenterOwner: "Telehouse",
    replicaNodes: 2,
    apiBoundaryNodes: 1,
    totalNodes: 25,
    nodeProviders: 1,
    subnets: 10,
  },
  {
    id: 16,
    country: "Peru",
    city: "Cusco",
    region: "South America",
    flag: "🇵🇪",
    lat: 13.532,
    lng: 71.9675,
    dataCenterId: "idr",
    dataCenterOwner: "Telehouse",
    replicaNodes: 2,
    apiBoundaryNodes: 1,
    totalNodes: 25,
    nodeProviders: 1,
    subnets: 10,
  },
];



export default function GlobePage() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [tooltip, setTooltip] = useState({
    show: false,
    x: 0,
    y: 0,
    data: null,
  });
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const globeEl = useRef();

  const totalSubnets = countriesData.reduce((sum, c) => sum + c.subnets, 0);
  const uniqueCountries = [...new Set(countriesData.map((c) => c.country))]
    .length;
  const totalNodeMachines = countriesData.reduce(
    (sum, c) => sum + c.totalNodes,
    0
  );
  const totalProviders = countriesData.reduce(
    (sum, c) => sum + c.nodeProviders,
    0
  );
  const totalDataCenters = countriesData.length;
  const totalDCOwners = [
    ...new Set(countriesData.map((c) => c.dataCenterOwner)),
  ].length;
  const totalRegions = [...new Set(countriesData.map((c) => c.region))].length;
  const uniqueFlags = [...new Set(countriesData.map((c) => c.flag))];

  useEffect(() => {
    const updateDimensions = () => {
      if (typeof window !== "undefined") {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        setIsLargeScreen(screenWidth > 1240);

        let globeWidth = 0;
        let globeHeight = 0;

        if (screenWidth < 1024) {
          // For screens below 1024px: 98vw width, 100vh height
          globeWidth = screenWidth * 0.98;
          globeHeight = screenHeight;
          console.log(
            `Screen < 1024px: Globe size ${globeWidth}x${globeHeight}`
          );
        } else if (screenWidth <= 1240) {
          // For screens 1024-1240px
          globeWidth = screenWidth * 2;
          globeHeight = screenHeight * 2;
          console.log(
            `Screen 1024-1240px: Globe size ${globeWidth}x${globeHeight}`
          );
        } else {
          // For screens > 1240px, use fixed max width for centered content
          globeWidth = 800 * 2;
          globeHeight = screenHeight * 2;
          console.log(
            `Screen > 1240px: Globe size ${globeWidth}x${globeHeight}`
          );
        }

        setDimensions({
          width: globeWidth,
          height: globeHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Auto-rotate the globe continuously
  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;
      globeEl.current.controls().enableZoom = false;
      globeEl.current.controls().enablePan = true;
    }
  }, []);

  const handleCountryHover = useCallback((point, prevPoint) => {
    if (point) {
      setTooltip({
        show: true,
        x: 0,
        y: 0,
        data: point,
      });
    } else {
      setTooltip({ show: false, x: 0, y: 0, data: null });
    }
  }, []);

  const handleCountryClick = useCallback((point) => {
    setSelectedCountry(point);
  }, []);

  // Generate connection arcs between countries
  const arcsData = countriesData.slice(0, -1).map((country, i) => ({
    startLat: country.lat,
    startLng: country.lng,
    endLat: countriesData[i + 1].lat,
    endLng: countriesData[i + 1].lng,
  }));

  return (
    <div className="h-[200vh] sm:h-[200vh] lg:h-[120vh] bg-gradient-to-br from-slate-900 via-[#1C0C34] to-slate-900 relative">
      {/* Particle Background for large screens */}
      {isLargeScreen && <ParticleBackground />}

      {/* Glass Navbar */}
      <Navbar isLargeScreen={isLargeScreen} />

      {/* Main Content Container */}
      <div
        className={`h-[200vh] sm:h-[200vh] lg:h-[120vh] ${
          isLargeScreen ? "flex justify-center" : ""
        }`}
      >
        <div
          className={`flex flex-col lg:flex-row h-[250vh] lg:h-[120vh] ${
            isLargeScreen ? "max-w-7xl w-full" : ""
          }`}
        >
          {/* Globe Section */}
          <div className="w-full lg:w-3/5 h-[100vh] sm:h-[100vh] md:h-[120vh]  relative">
            {/* Globe Container - Centered for screens < 1024px */}
            <div
              className={`absolute inset-0 flex items-center justify-center ${
                typeof window !== "undefined" && window.innerWidth < 1024
                  ? "w-full h-full"
                  : ""
              }`}
            >
              <div
                className={`${
                  typeof window !== "undefined" && window.innerWidth < 1024
                    ? "relative" // Centered positioning for small screens
                    : isLargeScreen
                    ? "absolute left-[-30rem] -top-64"
                    : "absolute left-4 -top-2 xs:-left-6 xs:-top-12 md:left-[-27rem] md:-top-60 lg:left-[-56rem] lg:-top-44"
                }`}
              >
                <iframe
                  src="/mode/index.html"
                  
                  style={{ width: dimensions.width, height: dimensions.height, border: "none" }}
                  
                  title="My Mode"
                />
                
              </div>
            </div>

          

            {/* Tooltip */}
            {tooltip.show && tooltip.data && (
              <div className="absolute top-4 left-4 lg:top-20 lg:left-8 z-40 pointer-events-none">
                <Card className="bg-slate-800/95 backdrop-blur-sm border-slate-700 text-white p-4 min-w-[280px] lg:min-w-[320px] shadow-2xl shadow-cyan-500/30 border">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl animate-pulse">
                      {tooltip.data.flag}
                    </span>
                    <span className="text-sm text-slate-300">
                      {tooltip.data.region}, {tooltip.data.country}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                    {tooltip.data.city}
                  </h3>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Data Center ID</span>
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-400 font-mono">
                          {tooltip.data.dataCenterId}
                        </span>
                        <svg
                          className="w-4 h-4 text-cyan-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-slate-300">Data Center Owner</span>
                      <span className="text-white">
                        {tooltip.data.dataCenterOwner}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-slate-300">Replica Nodes</span>
                      <span className="text-emerald-400 font-semibold">
                        {tooltip.data.replicaNodes}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-slate-300">API Boundary Nodes</span>
                      <span className="text-purple-400 font-semibold">
                        {tooltip.data.apiBoundaryNodes}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-slate-300">Total Nodes</span>
                      <span className="font-bold text-cyan-400">
                        {tooltip.data.totalNodes}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-slate-300">Node Providers</span>
                      <span className="text-yellow-400 font-semibold">
                        {tooltip.data.nodeProviders}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-slate-300">Subnets</span>
                      <span className="text-pink-400 font-semibold">
                        {tooltip.data.subnets}
                      </span>
                    </div>
                  </div>
                </Card>
              </div>
            )}
          </div>

          {/* Data Card Section - 40% on large screens, full width on mobile */}
          <div className="absolute bottom-[40rem] sm:bottom-[30rem] lg:relative lg:bottom-20 lg:-right-0 xl:-right-20 w-full lg:w-2/5 xl:w-1/3 p-4 lg:p-8 flex items-center">
            <Card className="w-full bg-[#1F1E38] border-white/20 text-white py-2 px-4 max-h-[72vh] overflow-y-auto rounded-2xl shadow-2xl shadow-purple-500/20 border">
              <div className="flex items-center justify-between">
                <div className="text-xl lg:text-2xl font-semibold text-white">
                  Decentralization
                </div>
                <div className="flex items-center gap-x-1">
                  <SkipForward className="hover:bg-gray-600/20 w-8 h-8 rounded-xs transition-all cursor-pointer p-2" />
                  <Play className="hover:bg-gray-600/20 w-8 h-8 rounded-xs transition-all cursor-pointer p-2" />
                  <SkipBack className="hover:bg-gray-600/20 w-8 h-8 rounded-xs transition-all cursor-pointer p-2" />
                  <Menu className="hover:bg-gray-600/20 w-8 h-8 rounded-xs transition-all cursor-pointer p-2" />
                </div>
              </div>
              <Separator orientation="horizontal" />

              {/* Subnets + Flags */}
              <div className="flex sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex flex-col justify-center items-start gap-y-3">
                  <div className="flex items-center gap-2 font-semibold px-3 py-1 border text-xs rounded-lg cursor-pointer bg-white/10 hover:bg-white/20 transition-colors">
                    All subnets <ArrowRight className="w-4 h-4" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-white animate-pulse">
                    {totalSubnets}
                  </div>
                  <div className="text-sm text-white/60">
                    Subnets in {uniqueCountries} Countries
                  </div>
                </div>
                <div className="flex flex-wrap gap-x-1 gap-y-[2px] max-w-[120px] items-center">
                  {uniqueFlags.slice(0, 15).map((flag, index) => (
                    <span
                      key={index}
                      className="text-xl cursor-pointer leading-none"
                    >
                      {flag}
                    </span>
                  ))}
                  {uniqueFlags.length > 15 && (
                    <span className="text-white/50 text-sm ml-1 flex justify-end">
                      +{uniqueFlags.length - 15}
                    </span>
                  )}
                </div>
              </div>
              <Separator orientation="horizontal" />

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-y-3 gap-x-4 lg:gap-x-4 text-sm">
                <div className="">
                  <div className="text-xl lg:text-2xl font-bold">
                    {totalNodeMachines}
                  </div>
                  <div className="text-white/60">Node Machines</div>
                </div>
                <div className="">
                  <div className="text-xl lg:text-2xl font-bold">
                    {totalProviders}
                  </div>
                  <div className="text-white/60">Node Providers</div>
                </div>
                <div className="">
                  <div className="text-xl lg:text-2xl font-bold">
                    {totalDataCenters}
                  </div>
                  <div className="text-white/60">Data Centers</div>
                </div>
                <div className="">
                  <div className="text-xl lg:text-2xl font-bold">
                    {totalDCOwners}
                  </div>
                  <div className="text-white/60">DC Owners</div>
                </div>
                <div className="">
                  <div className="text-xl lg:text-2xl font-bold">
                    {totalRegions}
                  </div>
                  <div className="text-white/60">Regions</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <TransactionCards />
    </div>
  );
}
