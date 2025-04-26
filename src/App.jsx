import React, { useState } from "react";
import Advanced from "./components/Advanced";
import BasicForm from "./components/BasicForm";

function App() {
  const [view, setView] = useState("basic");
  return (
    <div className="bg-[#191c27] h-[100vh] ">
      <nav className="flex justify-center gap-5 items-center">
        <h3
          className="cursor-pointer"
          onClick={() => setView("basic")}
          style={{ color: view === "basic" ? "#fff" : "" }}
        >
          Basic
        </h3>
        <h3
          className="cursor-pointer"
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
