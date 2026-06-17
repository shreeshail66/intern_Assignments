import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page home">
      <h1>Welcome to ShopEase</h1>
      <p>Your one-stop shop for the latest tech, at the best prices.</p>
      <Link to="/products" className="cta-button">
        Browse Products
      </Link>
    </div>
  );
}

export default Home;
