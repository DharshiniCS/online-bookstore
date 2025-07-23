import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";


const Header = () => {
  return (
      <Navbar className="custom-header" expand="lg">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/">
          <img
            src="/logo.png"
            alt="Bookstore Logo"
            width="30"
            height="30"
            className="d-inline-block align-top me-2"
          />
          BookStore
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          {/* Navigation Links */}
          <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
            <i className="bi bi-house-door-fill me-1"></i> Home
          </Nav.Link>
            <Nav.Link as={Link} to="/cart">
            <i className="bi bi-cart-fill me-1"></i> Cart
          </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;