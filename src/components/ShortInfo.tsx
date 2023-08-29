import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
export function ShortInfo() {
  return (
    <>
      <div className="short-info-box">
        <div className="short-info-left">
          <p className="short-info-title">An-Nafia</p>
          <p className="short-info-text">
            Ан-Нафиа жамоаси қарийб 2019-2020 йилдан буён ўз оиласига содиқ
            бўлган азолар билан биргаликда 4 йилдирки сиз азизларга ҳизмат қилиб
            келмоқда....
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
