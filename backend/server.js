import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoutes from "./routes/bookRoutes.js"; // ✅ Make sure path is correct

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error", err));

// ✅ ROUTES
app.use("/api/books", bookRoutes);

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


app.use('/api/books', bookRoutes);

app.listen(5000, () => console.log("Server running"));





