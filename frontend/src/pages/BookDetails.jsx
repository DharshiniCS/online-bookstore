import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/useCart";
import axios from "axios";
import { Button, Container, Spinner, Alert } from "react-bootstrap";

const BookDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(false);

  // ✅ FIX: watch `id` in the useEffect dependency array
 
    useEffect(() => {
  console.log("Fetching book with ID:", id); // ✅ log ID
  const fetchBook = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`https://bookstore-backend.onrender.com/api/books/${id}`);

      console.log("Fetched book:", res.data); // ✅ log full book
      setBook(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching book:", err);
      setLoading(false);
    }
  };
  fetchBook();
}, [id]);

  const handleAddToCart = () => {
    addToCart(book);
    setAdded(true);
  };

  if (loading) return <Spinner animation="border" />;
  if (!book) return <Alert variant="danger">Book not found</Alert>;

  return (
    <Container className="py-4">
      <h2>{book.title}</h2>
      <img src={book.image} alt={book.title} style={{ height: "300px" }} />
      <p>{book.description}</p>
      <p><strong>Price:</strong> ₹{book.price}</p>
      <Button onClick={handleAddToCart} disabled={added}>
        {added ? "Added to Cart" : "Add to Cart"}
      </Button>
    </Container>
  );
};

export default BookDetails;



