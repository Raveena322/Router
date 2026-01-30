import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About.jsx";
import Contact from "./components/contact.jsx";


import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">MyApp</h2>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      {/* Page Content */}
      <div className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </div>
    </div>
  );
}
export default App;