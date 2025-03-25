
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import { addToCart } from "../redux/cartSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductsScreen.css"; // Custom styles

const ProductsScreen = () => {
  const dispatch = useDispatch();
  const { items, categories, loading } = useSelector((state) => state.products);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = selectedCategory
    ? items.filter((p) => p.category === selectedCategory)
    : items;

  return (
    <div className="container">
      <h2 className="text-center mt-4">🛍️ Our Products</h2>

      {/* Category Filter */}
      <div className="d-flex justify-content-center flex-wrap my-3">
        {categories.map((category) => (
          <button
            key={category}
            className={`btn m-2 ${
              selectedCategory === category ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Loading Indicator */}
      {loading && <div className="text-center mt-4">⏳ Loading...</div>}

      {/* Products Grid */}
      <div className="row">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-4 col-lg-3 mb-4">
            <div className="card shadow-sm product-card">
              <img src={product.thumbnail} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text text-success fw-bold">${product.price}</p>
                <button
                  className="btn btn-warning w-100 add-to-cart-btn"
                  onClick={() => dispatch(addToCart(product))}
                >
                  🛒 Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsScreen;



