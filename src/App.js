import { Route, Routes } from "react-router-dom";
import Header from "../src/Pages/Shared/Header/Header";
import "./App.css";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/LogIn/LogIn";

import SignUp from "./Pages/LogIn/SignUp";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/appointment"
          element={<Appointment></Appointment>}
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
