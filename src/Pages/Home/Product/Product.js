import React from "react";

const Product = ({ product }) => {
  const handleAdd = () => {};
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
