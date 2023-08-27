
import { Navbar as NavbarBs, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../App.css";

export function Navbar() {
  return (
    <>
      <NavbarBs
        sticky="top"
        className=""
        style={{ backgroundColor: "#161819" }}
      >
        <Container>
          <Nav className="navbar">
            <Nav.Link to="/" as={NavLink}>
              <img alt="img" src="imgs/an-nafia.png" className="nav-logo" />
            </Nav.Link>
            <Nav.Link to="/" as={NavLink} className="nav-home">
              <p className="text nav-text">Асосий</p>
            </Nav.Link>
            <Nav.Link to="/about" as={NavLink}>
              <p className="text nav-text">Биз ҳақимизда</p>
            </Nav.Link>
            <Nav.Link to="/products" as={NavLink}>
              <p className="text nav-text"> Маҳсулотларимиз</p>
            </Nav.Link>
          </Nav>
        </Container>
      </NavbarBs>
    </>
  );
}
