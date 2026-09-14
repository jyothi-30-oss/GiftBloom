const express = require("express");

const {
  createOrder,
  getOrders,
  getCustomerOrders,
  updateOrderStatus
} = require("../controllers/OrderController");

const router = express.Router();

router.post("/", createOrder);

router.get("/", getOrders);

router.get("/customer/:userId", getCustomerOrders);

router.put("/:id/status", updateOrderStatus);

module.exports = router;
