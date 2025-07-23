import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
              <li><Link to="/cart" className="text-white text-decoration-none">Cart</Link></li>
            </ul>
          </Col>

          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Email: support@bookstore.com</p>
            <p>Phone: +91-9876543210</p>
          </Col>

          <Col md={4}>
            <h5>Follow Us</h5>
            <p>
              <a href="#" className="text-white me-3"><i className="bi bi-facebook"></i> Facebook</a><br />
              <a href="#" className="text-white me-3"><i className="bi bi-twitter"></i> Twitter</a><br />
              <a href="#" className="text-white"><i className="bi bi-instagram"></i> Instagram</a>
            </p>
          </Col>
        </Row>

        <hr className="border-light" />
        <p className="text-center mb-0">&copy; 2025 Online Bookstore. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;


