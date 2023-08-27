import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
export function ShortInfo() {
  return (
    <>
      <div className="short-info-box">
        <div className="short-info-left">
          <p className="short-info-title">An-Nafia</p>
          <p className="short-info-text">
            Биз сиз учун қайғурамиз .Соғлиғингиз ҳақида қайғуриш бизнинг
            вазифамиз.
          </p>
          <Nav.Link to="/about" as={NavLink}>
            <button className="short-info-btn">Батафсил ...</button>
          </Nav.Link>
        </div>
        <div>
          <img alt="img" src="./imgs/an-nafia.png" className="short-info-img" />
        </div>
      </div>
    </>
  );
}
