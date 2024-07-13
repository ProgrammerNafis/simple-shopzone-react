import React from "react";
import "./Product.css";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Product = (props) => {
  const { name, seller, price, stock, img } = props.product;
  return (
    <div className="main-container">
      <div className="img">
        <img src={img} alt="" />
      </div>
      <div className="info">
        <h4>{name}</h4>
        <p>
          by: <small>{seller}</small>
        </p>
        <p>Only {stock} are available</p>
        <p>Price: {price}</p>
        <button onClick={()=> props.AddProduct(props.product)} className="cart-add-btn">
          <FontAwesomeIcon icon={faCartShopping} />
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
