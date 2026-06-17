import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} loading="lazy" />
      <h3>{product.name}</h3>
      <p className="price">{product.price}</p>
      <Link to={`/product/${product.id}`} className="view-link">
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;
