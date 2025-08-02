import mongoose from "mongoose";
import dotenv from "dotenv";
import  Book from "./models/Book.js";

dotenv.config();

const books = [
  {
    title: "Mistborn: The Final Empire",
    description: "A thrilling tale of magic and rebellion...",
    price: 450,
    image: "/mistborn.jpg" //
  }, 
  {
    title: "The Hobbit",
    description: "Bilbo Baggins embarks on a magical adventure...",
    price: 350,
    image: "/hobbit.jpg" // ✅
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    description: "A young wizard discovers his destiny...",
    price: 499,
    image: "/harrypotter.jpg" // ✅
  },
    {
    title: "It Ends With Us",
    description: "A powerful story about love, heartbreak, and healing.",
    price: 320,
    image: "/itendswithus.jpg"
  },
  {
    title: "The Psychology of Money",
    description: "Timeless lessons on wealth, greed, and happiness.",
    price: 380,
    image: "/psychologyofmoney.jpg"
  },
  {
    title: "The Silent Patient",
    description: "A shocking psychological thriller about a woman’s act of violence.",
    price: 420,
    image: "/silentpatient.jpg"
  }
];

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("✅ MongoDB Connected");
    await Book.deleteMany(); // Clear old data
    await Book.insertMany(books);
    console.log("📚 Sample books inserted");
    process.exit();
  })
  .catch((err) => {
    console.error("❌ Error:", err);
    process.exit(1);
  });
