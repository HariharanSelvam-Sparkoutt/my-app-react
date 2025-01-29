import { useState, useEffect } from "react";
import Product from "./product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);
  console.log(products);
  return (
    <div>
      <h2>Products Components</h2>

      {products.length <= 1 ? (
        <h2>Loading...</h2>
      ) : (
        products.map((product) => (
          <Product product={product} key={product.id} />
        ))
      )}
    </div>
  );
};

export default Products;
