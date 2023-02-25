import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contactme } from "./pages/Contactme";
import { Resume } from "./pages/Resume";
import { Portfolio } from "./pages/Portfolio";
import { Aboutme } from "./pages/Aboutme";

function App() {
  return (
    <Router>
      <div className="flex">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/about" element={<Aboutme />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/contact" element={<Contactme />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
