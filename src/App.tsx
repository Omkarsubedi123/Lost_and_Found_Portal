import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import ReportLost from "./pages/lostItem/Lost";
import ReportFound from "./pages/found/Found";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import ItemDetails from "./pages/itemDetails/ItemDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/Lost" element={<ReportLost />} />
      <Route path="/Found" element={<ReportFound />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<SignUp />} />
      <Route path="/Item/:id" element={<ItemDetails />} />
    </Routes>
  );
};

export default App;
