import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function UiNav() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Nav className="me-auto">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/recipes">
            Recipes
          </Link>
          <Link className="nav-link" to="/randomRecipe">
            Random Recipe
          </Link>
          <Link className="nav-link" to="/about">
            About Us
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default UiNav;
