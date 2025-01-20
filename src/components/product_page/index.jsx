import React from "react";

function Product_page({ img, price, title }) {
  return (
    <div>
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h3>{price}</h3>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default Product_page;
