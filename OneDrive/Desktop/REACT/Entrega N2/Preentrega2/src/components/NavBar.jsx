import { CartWidget } from "./CartWidget.jsx";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary ">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            Shop Valentine
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/category/bakery">
                Bakery
              </Nav.Link>
              <Nav.Link as={NavLink} to="/category/meat">
                Meat
              </Nav.Link>
              <Nav.Link as={NavLink} to="/category/fruit">
                Fruit
              </Nav.Link>
              <Nav.Link as={NavLink} to="/category/daily">
                Daily
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={NavLink} to="#deets">
                Contacto{" "}
              </Nav.Link>
              <Nav.Link eventKey={2} as={NavLink} to="#memes">
                LinkedIn
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
};
