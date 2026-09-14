import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { CartProvider } from "./CartContext";
import { WishlistProvider } from "./WishlistContext";

import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import Admin from "./Admin";
import Recommendation from "./Recommendation";
import MyOrders from "./MyOrders";

import "./App.css";

function App() {
  return (
    <WishlistProvider>
      <CartProvider>
        <BrowserRouter>
          <nav className="navbar">
            <div className="logo">
              🎁 GiftBloom
            </div>

            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
              <Link to="/products">Products</Link>
              <Link to="/cart">Cart</Link>
              <Link to="/wishlist">Wishlist</Link>
              <Link to="/my-orders">My Orders</Link>
              <Link to="/admin">Admin</Link>
              <Link to="/recommendation">Recommendation</Link>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/my-orders" element={<MyOrders />} />
            <Route path="/admin" element={<Admin />} />
            <Route
              path="/recommendation"
              element={<Recommendation />}
            />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </WishlistProvider>
  );
}

export default App;
