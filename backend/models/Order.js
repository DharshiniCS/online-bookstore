
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: {
    name: String,
    email: String,
    address: String,
  },
  items: [
    {
      bookId: mongoose.Schema.Types.ObjectId,
      title: String,
      price: Number,
    },
  ],
  totalAmount: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Order", orderSchema);
