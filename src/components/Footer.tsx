import { Container, Image, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Footer() {
  return (
    <div style={{ backgroundColor: "#161819" }}>
      <Container>
        <div className=" footer" style={{}}>
          <div>
            <Nav.Link to="/" as={NavLink}>
              <img src="./imgs/an-nafia.png" className="footer-logo" />
            </Nav.Link>
          </div>
          <div>
            <p className="footer-social-text" style={{}}>
              Бизни ижтимоий тармоқларда кузатиб боринг
            </p>
            <div className="footer-social-icons-box">
              <a
                href="https://instagram.com/medical_informeyshin"
                className="footer-icons"
              >
                <img src="./imgs/instagram.svg" className="footer-icon-img" />
              </a>
              <a href="https://t.me/AnNafiya" className="footer-icons">
                <img src="./imgs/telegram.svg" className="footer-icon-img" />
              </a>
            </div>
          </div>
          <div>
            <p className="footer-legal-text">
              &copy; {new Date().getFullYear()} An-Nafia. Барча ҳуқуқлар
              ҳимояланган.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
