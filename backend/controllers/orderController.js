import Book from "../models/Book.js";

export const createOrder = async (req, res) => {
  try {
    const { user, items, totalAmount } = req.body;

    const order = new Order({
      user,
      items,
      totalAmount,
    });

    await order.save();

    // Mark purchased books
    const bookIds = items.map((item) => item._id);
    await Book.updateMany({ _id: { $in: bookIds } }, { $set: { purchased: true } });

    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
