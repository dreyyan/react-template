import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
        <Route path="/SignUp" element={<SignUp />}/>
        <Route path="/Dashboard" element={<Dashboard />}/>
    </Routes>
  );
}

export default App;