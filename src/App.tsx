import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Presets from "./pages/Presets";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
        <Route path="/SignUp" element={<SignUp />}/>
        <Route path="/Dashboard" element={<Dashboard />}/>
        <Route path="/Presets" element={<Presets />}/>
    </Routes>
  );
}

export default App;