import { useEffect, useState } from "react";
import "./Admin.css";

function Admin() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/orders")
      .then((response) => response.json())
      .then((data) => setOrders(data))
      .catch((error) => console.log("Admin Error:", error));
  }, []);

  const updateStatus = async (orderId, newStatus) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/orders/${orderId}/status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            status: newStatus
          })
        }
      );

      const data = await response.json();

      if (response.ok) {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order._id === orderId
              ? { ...order, status: newStatus }
              : order
          )
        );

        alert("Order status updated successfully!");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log("Status Update Error:", error);
      alert("Failed to update order status");
    }
  };

  const totalOrders = orders.length;

  const totalRevenue = orders.reduce(
    (sum, order) => sum + Number(order.totalAmount || 0),
    0
  );

  const placedOrders = orders.filter(
    (order) => order.status === "Placed"
  ).length;

  const processingOrders = orders.filter(
    (order) => order.status === "Processing"
  ).length;

  const shippedOrders = orders.filter(
    (order) => order.status === "Shipped"
  ).length;

  const deliveredOrders = orders.filter(
    (order) => order.status === "Delivered"
  ).length;

  return (
    <div className="admin-page">

      <div className="admin-header">
        <h1>🛠️ Admin Dashboard</h1>
        <p>Manage and view all GiftBloom orders</p>
      </div>

      <div className="stats-section">

        <div className="stat-card">
          <div className="stat-icon">📦</div>
          <h3>Total Orders</h3>
          <strong>{totalOrders}</strong>
        </div>

        <div className="stat-card">
          <div className="stat-icon">💰</div>
          <h3>Total Revenue</h3>
          <strong>₹{totalRevenue}</strong>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🟡</div>
          <h3>Placed</h3>
          <strong>{placedOrders}</strong>
        </div>

        <div className="stat-card">
          <div className="stat-icon">⚙️</div>
          <h3>Processing</h3>
          <strong>{processingOrders}</strong>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🚚</div>
          <h3>Shipped</h3>
          <strong>{shippedOrders}</strong>
        </div>

        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <h3>Delivered</h3>
          <strong>{deliveredOrders}</strong>
        </div>

      </div>

      <div className="orders-section">

        <h2>📦 All Orders</h2>

        {orders.length === 0 ? (
          <div className="no-orders">
            <h3>No orders found</h3>
            <p>Orders placed by customers will appear here.</p>
          </div>
        ) : (
          <div className="orders-grid">

            {orders.map((order) => (

              <div className="order-card" key={order._id}>

                <div className="order-top">

                  <h3>Order Details</h3>

                  <span className="order-status">
                    {order.status}
                  </span>

                </div>

                <p className="order-id">
                  <strong>Order ID:</strong> {order._id}
                </p>

                <div className="customer-info">

                  <h4>👤 Customer Information</h4>

                  <p>
                    <strong>👤 Customer:</strong>{" "}
                    {order.customerName}
                  </p>

                  <p>
                    <strong>📧 Email:</strong>{" "}
                    {order.customerEmail}
                  </p>

                  <p>
                    <strong>📱 Phone:</strong>{" "}
                    {order.customerPhone}
                  </p>

                </div>

                <div className="delivery-info">

                  <h4>📍 Delivery Information</h4>

                  <p>
                    <strong>🏠 Address:</strong>{" "}
                    {order.address}
                  </p>

                  <p>
                    <strong>🏙️ City:</strong>{" "}
                    {order.city}
                  </p>

                  <p>
                    <strong>🗺️ State:</strong>{" "}
                    {order.state}
                  </p>

                  <p>
                    <strong>📮 Pincode:</strong>{" "}
                    {order.pincode}
                  </p>

                </div>

                <div className="order-products">

                  <h4>🎁 Products</h4>

                  {order.items.map((item, index) => (

                    <div
                      className="admin-product"
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

                <div className="order-total">

                  <strong>Total Amount</strong>

                  <strong>
                    ₹{order.totalAmount}
                  </strong>

                </div>

                <div className="status-update">

                  <label>
                    <strong>
                      📦 Update Order Status
                    </strong>
                  </label>

                  <select
                    value={order.status}
                    onChange={(e) =>
                      updateStatus(
                        order._id,
                        e.target.value
                      )
                    }
                  >
                    <option value="Placed">
                      Placed
                    </option>

                    <option value="Processing">
                      Processing
                    </option>

                    <option value="Shipped">
                      Shipped
                    </option>

                    <option value="Delivered">
                      Delivered
                    </option>
                  </select>

                </div>

              </div>

            ))}

          </div>
        )}

      </div>

    </div>
  );
}

export default Admin;
