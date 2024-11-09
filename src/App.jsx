import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";


function App() {
  return (
    <>
      <Routes>
        <Route path="/home" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/portfolio" exact element={<Portfolio />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
