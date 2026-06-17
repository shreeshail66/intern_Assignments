import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products() {
  return (
    <div className="page">
      <h2>Our Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
