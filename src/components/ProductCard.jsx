import React from "react";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h3 className="product-name">{product.name}</h3>
      <p className="product-category">
        <strong>Category:</strong> {product.category}
      </p>
      <p className="product-price">
        <strong>Price:</strong> R{product.price}
      </p>
      <p className={product.inStock ? "in-stock" : "out-of-stock"}>
        {product.inStock ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
}

export default ProductCard;
