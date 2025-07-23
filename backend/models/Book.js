import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  id:Number,
  title: String,
  description: String,
  price: Number,
  image: String,
  purchased: {
    type: Boolean,
    default: false
  }
});

const Book = mongoose.model("Book", bookSchema);
export default Book;


