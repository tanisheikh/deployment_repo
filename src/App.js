import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard";
import SignUp from "./SignUp";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
