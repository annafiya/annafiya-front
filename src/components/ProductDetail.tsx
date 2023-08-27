import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../datas/items.json";
import "../pages/Products.css";
import { FormComplate } from "./FormComplate";

export function ProductDetail() {
  const { id } = useParams();
  interface product {
    id: number;
    title: string;
    path: string;
    price: number;
    description: string;
  }
  const [product, setProduct] = useState<product | null>(null);
  useEffect(() => {
    const selectedProduct = products.find(
      (item) => item.id === parseInt(id as string)
    );
    if (selectedProduct) {
      setProduct(selectedProduct);
    }
  }, [id, products]);
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="product-detail-box">
        <img
          src={product.path}
          alt={product.title}
          className="product-detail-img"
        />
        <div className="prodict-detail-content-box">
          <p className="product-detail-title">{product.title}</p>
          <p className="product-detail-text">{product.description}</p>
        </div>
      </div>
      <FormComplate />
    </>
  );
}
