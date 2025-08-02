import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoutes from "./routes/bookRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ ROUTE MOUNTING
app.use("/api/books", bookRoutes);  // MUST exist

// Optional test route
app.get("/", (req, res) => {
  res.send("📚 Bookstore API is running!");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(process.env.PORT || 5002, () =>
      console.log("✅ Server is running")
    );
  })
  .catch((err) => console.error(err));






