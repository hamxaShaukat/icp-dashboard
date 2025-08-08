import React from "react";
import GlobePage from "./components/globe";
import Subnet from "./components/Subnet";
import Bigchart from "./components/Bigchart";
import Card from "./components/Card/Card";

const App = () => {
  return (
    <>
    <div className="space-y-12">

      <div className="md:h-[250vh] lg:h-[120vh] w-full overflow-hidden relative">
        <GlobePage />
      </div>
      <Subnet />
      <div className="w-screen h-auto">
        <Card />
      </div>
      <Bigchart />
    </div>
    </>
  );
};

export default App;
