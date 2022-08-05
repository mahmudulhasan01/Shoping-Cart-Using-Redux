import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../../Store/Features/cardSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  const handleRemove = (e) => {
    dispatch(remove(e));
  };
  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {products.map((product) => (
          <div key={product.id} className="cartCard">
            <img src={product.image} alt="" />
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <button className="btn" onClick={() => handleRemove(product.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
