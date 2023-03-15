import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import Navigation from "./Components/Pages/Navbar/Navigation";
import Sprint from "./Components/Pages/Games/Sprint";
import Audio from "./Components/Pages/Games/Audio";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Sprint" element={<Sprint />} />
        <Route path="/Audio" element={<Audio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
