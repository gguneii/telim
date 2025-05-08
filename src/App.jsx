import React, { useState } from "react";
import BasicForm from "./components/BasicForm";
import Advanced from "./components/Advanced";

function App() {
  const [view, setView] = useState("basic");
  return (
    <div className="bg-[#191c27] h-[100vh] ">
      <nav className="flex justify-center gap-10 pt-10 pb-10 items-center">
        <h3
          className="cursor-pointer text-[20px]"
          onClick={() => setView("basic")}
          style={{ color: view === "basic" ? "#fff" : "" }}
        >
          Basic
        </h3>
        <h3
          className="cursor-pointer text-[20px]"
          onClick={() => setView("advanced")}
          style={{ color: view === "advanced" ? "#fff" : "" }}
        >
          Advanced
        </h3>
      </nav>
      {view === "basic" ? <BasicForm /> : <Advanced />}
    </div>
  );
}

export default App;
