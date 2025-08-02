import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import { useCart } from "../context/useCart";
import BookCard from "../components/BookCard"; // 👈 We'll create this

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    axios.get("https://bookstore-backend.onrender.com/api/books")

      .then((res) => {
        setBooks(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching books:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Spinner animation="border" />;

  return (
    <Container className="my-4">
      <Row>
        {books.map((book) => (
          <Col key={book._id} md={4} className="mb-4">
            <BookCard book={book} addToCart={addToCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;


