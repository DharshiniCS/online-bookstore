import express from "express";
import Book from "../models/Book.js";

const router = express.Router();

// GET all unpurchased books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find({ purchased: false });
    res.json(books);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// GET single book by ID
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});
router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    res.json(books); // Make sure this line exists
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    res.json(books);
  } catch (err) {
    console.error("DB Error:", err); // Log the actual error
    res.status(500).json({ error: "Database query failed" });
  }
});

export default router;
