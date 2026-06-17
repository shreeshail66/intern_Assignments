import { useParams, Link } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="page">
        <h2>Product Not Found</h2>
        <p>We couldn't find a product with that ID.</p>
        <Link to="/products" className="cta-button">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="page product-details">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p className="price">{product.price}</p>
      <p>{product.description}</p>
      <Link to="/products" className="cta-button">
        Back to Products
      </Link>
    </div>
  );
}

export default ProductDetails;
