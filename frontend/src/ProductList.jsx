import React, { useEffect, useState } from "react";
import { useCart } from "./CartContext";
import { useWishlist } from "./WishlistContext";
import "./ProductList.css";
function ProductList() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory]= useState("All");

  const { cart, addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
  <div className="product-container">
    <h1>GiftBloom Products</h1>
    <input
  type="text"
  placeholder="Search gifts..."
  className="search-box"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
    <select className="category-filter" value={category} onChange={(e) => setCategory(e.target.value)}>
      <option value="All">All Categories</option>
      <option value="Teddy Bears">Teddy Bears</option>
      <option value="Keychains">Keychains</option>
      <option value="Bracelets">Bracelets</option>
      <option value="Chocolates">Chocolates</option>
      <option value="Mugs">Mugs</option>
      <option value="Photo Frames">Photo Frames</option>
</select>
    <div className="product-grid">
      {products
  .filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()) && (category === "All" || product.category === category)
  )
  .map((product) => (
        <div className="product-card" key={product._id}>
          <img
            src={product.image}
            alt={product.name}
          />

          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p className="price">₹{product.price}</p>
          <p>Category: {product.category}</p>
          <button onClick={() => addToWishlist(product)}>
  ❤️ Add to Wishlist
</button>
          <button onClick={() => addToCart(product)}>
  🛒 Add to Cart
</button>
        </div>   
      ))}
    </div> 
  </div>
);
}

export default ProductList;