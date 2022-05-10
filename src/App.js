import { Route, Routes } from "react-router-dom";
import Header from "../src/Pages/Shared/Header/Header";
import "./App.css";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home/Home";
import LogIn from "./Pages/LogIn/LogIn/LogIn ";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
      </Routes>
    </div>
  );
}

export default App;
