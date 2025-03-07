import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import AboutMe from "./Pages/AboutMe";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Resume from "./Pages/Resume";

function App() {
  return (
    <Router>
      {/* Navigation Menu */}
    <nav>
      <ul>
        <li><NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>About Me</NavLink></li>
        <li><NavLink to="/portfolio" className={({ isActive }) => (isActive ? "active" : "")}>Portfolio</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink></li>
        <li><NavLink to="/resume" className={({ isActive }) => (isActive ? "active" : "")}>Resume</NavLink></li>
      </ul>
    </nav>

      {/* Route Configuration */}
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;

