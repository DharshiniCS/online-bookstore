import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css"; // Assuming you have some global styles

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/:id" element={<BookDetails />} />  {/* ✅ This is what your BookCard uses */}
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;

