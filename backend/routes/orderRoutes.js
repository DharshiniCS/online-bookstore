// backend/routes/orderRoutes.js

import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

// ✅ Simple GET route for testing in browser
router.get("/", (req, res) => {
  res.send("Order API is working");
});

// ✅ POST route to place an order
router.post("/", async (req, res) => {
  try {
    const { user, items, totalAmount } = req.body;

    const newOrder = new Order({
      user,
      items,
      totalAmount,
    });

    await newOrder.save();
    res.status(201).json({ message: "Order placed successfully!" });
  } catch (error) {
    console.error("Order error:", error);
    res.status(500).json({ message: "Failed to place order" });
  }
});

export default router;

