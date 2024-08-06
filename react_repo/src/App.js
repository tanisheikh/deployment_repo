import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard";
import Home from "./Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/deployment_repo" element={<Home />} />
        <Route path="/deployment_repo/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
