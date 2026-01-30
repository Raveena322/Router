import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* SPA Logo → Home */}
      <Link to="/contact" className="logo">
        MySPA
      </Link>

      <div className="nav-links">
        <Link to="/">🏠 Home</Link>
        <Link to="/about">ℹ️ About</Link>
        <Link to="/contact">📞 Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;