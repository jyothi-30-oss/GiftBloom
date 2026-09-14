import { useEffect, useState } from "react";
import "./MyOrders.css";

function MyOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (!savedUser) {
      return;
    }

    const user = JSON.parse(savedUser);

    fetch(`https://gift-bloom-icip.vercel.app/api/orders/customer/${user.id}`)
      .then((response) => response.json())
      .then((data) => setOrders(data))
      .catch((error) =>
        console.log("My Orders Error:", error)
      );
  }, []);

  const steps = [
    "Placed",
    "Processing",
    "Shipped",
    "Delivered"
  ];

  const getStepClass = (status, step) => {
    const currentIndex = steps.indexOf(status);
    const stepIndex = steps.indexOf(step);

    if (stepIndex < currentIndex) {
      return "completed";
    }

    if (stepIndex === currentIndex) {
      return "active";
    }

    return "";
  };

  return (
    <div className="my-orders-page">
      <div className="my-orders-header">
        <h1>📦 My Orders</h1>
        <p>Track your GiftBloom orders</p>
      </div>

      {orders.length === 0 ? (
        <div className="no-orders">
          <h2>No Orders Found</h2>
          <p>You have not placed any orders yet.</p>
        </div>
      ) : (
        <div className="my-orders-list">
          {orders.map((order) => (
            <div className="my-order-card" key={order._id}>
              <div className="order-header">
                <div>
                  <h2>Order Details</h2>
                  <p>
                    Order ID: {order._id}
                  </p>
                </div>

                <span className="status-badge">
                  {order.status}
                </span>
              </div>

              <div className="tracking-section">
                <h3>🚚 Order Tracking</h3>

                <div className="tracking">
                  {steps.map((step, index) => (
                    <div
                      className={`tracking-step ${getStepClass(
                        order.status,
                        step
                      )}`}
                      key={step}
                    >
                      <div className="tracking-circle">
                        {index + 1}
                      </div>

                      <p>{step}</p>

                      {index < steps.length - 1 && (
                        <div className="tracking-line"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="order-products">
                <h3>🎁 Products</h3>

                {order.items.map((item, index) => (
                  <div
                    className="product-row"
                    key={index}
                  >
                    <span>
                      {item.name} × {item.quantity}
                    </span>

                    <span>
                      ₹{item.price}
                    </span>
                  </div>
                ))}
              </div>

              <div className="delivery-details">
                <h3>📍 Delivery Details</h3>

                <p>
                  <strong>Name:</strong>{" "}
                  {order.customerName}
                </p>

                <p>
                  <strong>Phone:</strong>{" "}
                  {order.customerPhone}
                </p>

                <p>
                  <strong>Address:</strong>{" "}
                  {order.address}
                </p>

                <p>
                  <strong>Location:</strong>{" "}
                  {order.city}, {order.state} -{" "}
                  {order.pincode}
                </p>
              </div>

              <div className="order-total">
                <span>Total Amount</span>
                <strong>
                  ₹{order.totalAmount}
                </strong>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyOrders;
