const Order = require("../models/Order");

const createOrder = async (req, res) => {
  try {
    const {
      userId,
      items,
      totalAmount,
      customerName,
      customerEmail,
      customerPhone,
      address,
      city,
      state,
      pincode
    } = req.body;

    const order = await Order.create({
      userId,
      items,
      totalAmount,
      customerName,
      customerEmail,
      customerPhone,
      address,
      city,
      state,
      pincode
    });

    res.status(201).json({
      message: "Order placed successfully",
      order
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });

    res.json(orders);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const getCustomerOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      userId: req.params.userId
    }).sort({ createdAt: -1 });

    res.json(orders);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({
        message: "Order not found"
      });
    }

    res.json({
      message: "Order status updated successfully",
      order
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  createOrder,
  getOrders,
  getCustomerOrders,
  updateOrderStatus
};
