import React, { useEffect, useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";
// import products from "../datas/items.json";
interface product {
  id: number;
  title: string;
  description: string;
  path: string;
  price: number;
}
interface CaruselComponentProps {
  products: product[];
}
export const ProductCarousel: React.FC<CaruselComponentProps> = ({
  products,
}) => {
  return (
    <Container>
      <p className="carusel-title">Bizning mahsulotlarimiz </p>
      <Carousel interval={2000}>
        {products.length > 0 &&
          products.map((product) => (
            <Carousel.Item key={product.id}>
              <Link
                to={`/products/${product.id}`}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <div className="carusel-item-box">
                  <div className="carusel-img-box">
                    <img
                      className="carusel-img"
                      src={product.path}
                      alt={product.title}
                    />
                  </div>
                  <div className="carusel-content-box">
                    <p className="carusel-content-title">
                      {product.title}Lorem ipsum dolor, sit amet consectetur
                      adipisicing elit. Pariatur, rem?
                    </p>
                    <p className="carusel-content-text">
                      {product.price}
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Ratione nihil veritatis quibusdam, aliquam tenetur
                      possimus odio quidem laudantium dolorem et.
                    </p>
                  </div>
                </div>
              </Link>
            </Carousel.Item>
          ))}
      </Carousel>
    </Container>
  );
};
