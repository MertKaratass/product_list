import React from "react";
import "./ProductCard.css";
import { products } from "../../helper/data";

export const ProductCard = () => {
  return (
    <div className="product-main">
      {products.map((item) => (
        <div className="product-card">
          <div className="product-img">
            <img src={item.image} alt="" />
            <div className="price">
              <h3> {item.price}$</h3>
            </div>
          </div>
          <div className="product-details">
            <h4>{item.title}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};
