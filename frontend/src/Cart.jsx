import { useState } from "react";
import { useCart } from "./CartContext";
import "./Cart.css";

function Cart() {
  const { cart, removeFromCart, clearCart }= useCart();

  const savedUser = localStorage.getItem("user");
  const user = savedUser ? JSON.parse(savedUser) : null;

  const [customerPhone, setCustomerPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  const placeOrder = async () => {
    if (!user) {
      alert("Please login before placing an order");
      return;
    }

    if (
      !customerPhone ||
      !address ||
      !city ||
      !state ||
      !pincode
    ) {
      alert("Please fill in all delivery details");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/orders",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            userId: user.id,

            items: cart.map((item) => ({
              productId: item._id,
              name: item.name,
              price: item.price,
              quantity: 1
            })),

            totalAmount: total,

            customerName: user.name,
            customerEmail: user.email,
            customerPhone,

            address,
            city,
            state,
            pincode
          })
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Order placed successfully!");

        clearCart();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log("Order Error:", error);
      alert("Failed to place order");
    }
  };

  return (
    <div className="cart-page">
      <h1>🛒 My Cart</h1>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty 🛍️</h2>
          <p>Add some beautiful gifts to your cart!</p>
        </div>
      ) : (
        <div className="cart-layout">

          {/* Cart Items */}
          <div className="cart-items">
            <h2>Your Items</h2>

            {cart.map((item, index) => (
              <div
                className="cart-item"
                key={index}
              >
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>
                </div>

                <button
                  className="remove-button"
                  onClick={() => removeFromCart(index)}
                >
                  🗑️ Remove
                </button>
              </div>
            ))}

            <div className="cart-total">
              <h2>Total: ₹{total}</h2>
            </div>
          </div>

          <div className="order-card">
            <h2>📦 Customer Details</h2>

            <label>Name</label>
            <input
              type="text"
              value={user ? user.name : ""}
              readOnly
            />

            <label>Email</label>
            <input
              type="email"
              value={user ? user.email : ""}
              readOnly
            />

            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={customerPhone}
              onChange={(e) =>
                setCustomerPhone(e.target.value)
              }
            />

            <label>Delivery Address</label>
            <input
              type="text"
              placeholder="Enter your full address"
              value={address}
              onChange={(e) =>
                setAddress(e.target.value)
              }
            />

            <label>City</label>
            <input
              type="text"
              placeholder="Enter your city"
              value={city}
              onChange={(e) =>
                setCity(e.target.value)
              }
            />

            <label>State</label>
            <input
              type="text"
              placeholder="Enter your state"
              value={state}
              onChange={(e) =>
                setState(e.target.value)
              }
            />

            <label>Pincode</label>
            <input
              type="text"
              placeholder="Enter pincode"
              value={pincode}
              onChange={(e) =>
                setPincode(e.target.value)
              }
            />

            <button
              className="place-order-button"
              onClick={placeOrder}
            >
              📦 Place Order
            </button>
          </div>

        </div>
      )}
    </div>
  );
}

export default Cart;
