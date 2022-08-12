import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Dashboard } from "./Pages/Dashboard";

import { Navbar } from "./Components/Navbar";

import { GlobalProvider } from "./context/GlobalState";
import { GoodPup } from "./Pages/GoodPup";
import { GetStarted } from "./Pages/GetStarted";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="getStarted" element={<GetStarted />} />
        </Routes>
      </div>
    </GlobalProvider>
  );
}

export default App;
