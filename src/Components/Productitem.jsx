import React from "react";

const Productitem = (props) => {
  const product = props.product;
  return (
    <div>
      <div class="card mb-4">
        <img
          src={product.image}
          class="card-img-top"
          alt="Product-image"
        />
        <div class="card-body">
          <h5 class="card-title">{product.name}</h5>
          <p>
            Price: <span class="price">{product.price}$</span>
          </p>
          <p class="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div class="product-details d-flex justify-content-between align-items-center">
            <a href="#" class="btn btn-danger btn-sm">
              Mua ngay
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productitem;
