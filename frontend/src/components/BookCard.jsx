import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const BookCard = ({ book, addToCart }) => {
  const navigate = useNavigate();

  const handleAddAndGo = () => {
    addToCart(book);
    navigate(`/books/${book._id}`);
  };

  return (
    <Card className="h-100 w-75"> {/* Ensures equal height */}
      {/* ✅ Book image with fixed size */}
      <Card.Img
            variant="top"
            src={book.image}
            alt={book.title}
            style={{
              height: "250px",
              width: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />


      {/* ✅ Clickable area for title + description */}
      <Link to={`/books/${book._id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <div style={{ height: "60px", overflow: "hidden" }}>
            <Card.Text>
              {book.description.length > 100
                ? book.description.slice(0, 100) + "..."
                : book.description}
            </Card.Text>
          </div>
        </Card.Body>
      </Link>

      {/* ✅ Price + Add to Cart */}
      <Card.Body className="d-flex flex-column justify-content-between">
        <h5>₹{book.price}</h5>
        <Button onClick={handleAddAndGo}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
