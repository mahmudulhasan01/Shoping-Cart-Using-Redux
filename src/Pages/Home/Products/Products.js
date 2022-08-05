import React, { useEffect } from "react";
import Product from "../Product/Product";
import { useSelector, useDispatch } from "react-redux";
import { fatchProducts } from "../../../Store/Features/productsSlaice";

const Products = () => {
  const dispatch = useDispatch();

  const { isLoading, products, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fatchProducts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <h1>Loading ...</h1>}
      {error && <h1>{error}</h1>}

      <div className="productsWrapper">
        {products &&
          products.map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
      </div>
    </div>
  );
};

export default Products;
