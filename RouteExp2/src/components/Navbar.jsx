import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>My Portfolio</h2>
      <div>
        <Link to="/profile">Profile</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}