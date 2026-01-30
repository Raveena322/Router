import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Home Page</h1>
      <p>Welcome to our React Single Page Application.</p>

      <div className="btn-group">
        <button onClick={() => navigate("/about")}>Go to About</button>
        <button onClick={() => navigate("/contact")}>Contact Us</button>
        <button>Learn More</button>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Home;