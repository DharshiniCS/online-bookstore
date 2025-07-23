
 📚 Online Bookstore

A full-stack web application for browsing, viewing, and purchasing books online. Built with **React.js** for the frontend and **Node.js + Express** for the backend, connected via a **MongoDB** database.



 🚀 Features

- 🏠 Home page with all books
- 📖 Book details page
- 🛒 Add to cart functionality
- 💾 Backend API with MongoDB
- 🎨 Bootstrap-styled responsive UI



 🗂 Folder Structure

```

online-bookstore/
├── frontend/        React.js (Vite) frontend
└── backend/         Node.js + Express + MongoDB backend

````



 🔧 Tech Stack

| Frontend           | Backend                  | Database |
|--------------------|---------------------------|----------|
| React + Vite       | Node.js + Express.js      | MongoDB  |
| React-Bootstrap    | Axios                     | Mongoose |
| React Router DOM   |                           |          |


 📦 Installation

 1️⃣ Backend Setup

```bash
cd backend
npm install
node seedBooks.js        Seed the database with sample books
npm run dev              Start the backend on http://localhost:5002
````

 2️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev              Start the frontend on http://localhost:5173
```


 🌐 API Endpoints

| Method | Route            | Description    |
| ------ | ---------------- | -------------- |
| GET    | `/api/books`     | Get all books  |
| GET    | `/api/books/:id` | Get book by ID |








