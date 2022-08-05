import React from "react";
import "../../../index.css";
import { useDispatch } from "react-redux";
import { add } from "../../../Store/Features/cardSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="">
      <div className="card">
        <img src={product.image} alt="" />
        <h4>{product.title}</h4>
        <h5>{product.price}</h5>
        <button onClick={() => handleAdd(product)} className="btn">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
