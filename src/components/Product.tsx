import { Link } from "react-router-dom";
import "../pages/Products.css";
interface product {
  id: number;
  title: string;
  path: string;
  price: number;
  description: string;
}
interface ProductProps {
  products: product[];
}
export const Product: React.FC<ProductProps> = ({ products }) => {
  return (
    <>
      {products.length > 0 &&
        products.map((item) => (
          <Link to={`/products/${item.id}`} style={{textDecoration:"none" ,color:"#fff"}}>
            <div key={item.id} className="product-box">
              <div className="product-img-box">
                <img src={item.path} className="product-img" />
              </div>
              <div className="product-content-box">
                <p className="product-content-title">{item.title}</p>
                <p className="product-content-text">{item.description}</p>
              </div>
            </div>
          </Link>
        ))}
    </>
  );
};
