// src/pages/Cart.jsx
import { useCart } from "../context/useCart";
import { Container, Row, Col, ListGroup, Button, Form, Alert } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const totalPrice = cart.reduce((total, book) => total + book.price, 0);

  const handleCheckout = async (e) => {
    e.preventDefault();
    try {
      const order = {
        user: { name, email },
        items: cart,
        totalAmount: totalPrice,
      };

      const res = await axios.post("http://localhost:5002/api/orders", order);
      if (res.status === 201) {
        setMessage("✅ Order placed successfully!");
        clearCart(); // Clear cart after order
        setName("");
        setEmail("");
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to place order");
    }
  };

  return (
    <Container className="my-5">
      <h2>🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <Alert variant="info">Your cart is empty.</Alert>
      ) : (
        <>
          <ListGroup className="mb-4">
            {cart.map((book, index) => (
              <ListGroup.Item key={index}>
                <Row className="align-items-center">
                  <Col md={8}>
                    <strong>{book.title}</strong> - ₹{book.price}
                  </Col>
                  <Col md={4} className="text-end">
                    <Button variant="danger" size="sm" onClick={() => removeFromCart(book)}>
                      Remove
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
            <ListGroup.Item className="text-end">
              <strong>Total: ₹{totalPrice}</strong>
            </ListGroup.Item>
          </ListGroup>

          <h4>🧾 Checkout</h4>
          <Form onSubmit={handleCheckout}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control value={name} onChange={(e) => setName(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </Form.Group>
            <Button type="submit" variant="success">
              Place Order
            </Button>
          </Form>
        </>
      )}

      {message && <Alert className="mt-4">{message}</Alert>}
    </Container>
  );
};

export default Cart;
