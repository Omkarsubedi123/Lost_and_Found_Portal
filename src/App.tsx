import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import ReportLost from "./pages/lostItem/Lost";
import ReportFound from "./pages/found/Found";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Lost" element={<ReportLost />} />
      <Route path="/Found" element={<ReportFound />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<SignUp />} />
    </Routes>
  );
};

export default App;
