import { useState } from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavModal.css";
export function NavModal() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  function closeModal() {}
  return (
    <>
      <div className="nav-modal-box">
        <img
          src="imgs/menu1.png"
          className="menu-icon"
          width={40}
          height={40}
          onClick={(e) => {
            setIsNavVisible(!isNavVisible);
          }}
        />
        {isNavVisible && (
          <ul className={`nav-modal-links`}>
            <li>
              <img
                src="imgs/close.png"
                width={40}
                height={40}
                className="close-nav-modal-btn"
                onClick={(e) => {
                  setIsNavVisible(!isNavVisible);
                }}
              />
            </li>
            <li>
              <Nav.Link
                to="/"
                as={NavLink}
                className="nav-home"
                onClick={(e) => {
                  setIsNavVisible(!isNavVisible);
                }}
              >
                <p>Асосий</p>
              </Nav.Link>
            </li>
            <li>
              <Nav.Link
                to="/about"
                as={NavLink}
                className="nav-home"
                onClick={(e) => {
                  setIsNavVisible(!isNavVisible);
                }}
              >
                <p>Биз ҳақимизда</p>
              </Nav.Link>
            </li>
            <li>
              <Nav.Link
                to="/products"
                as={NavLink}
                className="nav-home"
                onClick={(e) => {
                  setIsNavVisible(!isNavVisible);
                }}
              >
                <p>Маҳсулотларимиз</p>
              </Nav.Link>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}
