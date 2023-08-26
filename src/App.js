import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import HomePage from "./screens/homepage/HomePage";
import ForgotPass from "./components/forgot-password/ForgotPass";
import Otp from "./components/otp/Otp";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/forgotpass" element={<ForgotPass />} />
        <Route path="/Otp" element={<Otp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
