import { useState } from "react";

const Product = ({ product }) => {
  const [showProducts, setShowProducts] = useState(false);
  return (
    <div>
      <h2>Product Component</h2>
      <div>
        <h3>Product Name: {product.title}</h3>
        <p>Product Description: {product.description}</p>

        <p>
          <img
            src={product.image}
            alt={product.title}
            height={150}
            width={150}
          />
        </p>
        <button onClick={() => setShowProducts((current) => !current)}>
          {showProducts ? "Hide Details" : "Show More"}
        </button>
        {showProducts && (
          <div>
            <p>Product Price: {product.price}</p>
            <p>Product Category: {product.category}</p>
            <p>Product Rating: {product.rating.rate}</p>
            <p>Product Count: {product.rating.count}</p>
          </div>
        )}
        <hr />
      </div>
    </div>
  );
};

export default Product;
