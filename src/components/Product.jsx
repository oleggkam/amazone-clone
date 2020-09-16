import React from 'react';
import '../css/Product.css';

function Product({ title, image, rating, price }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img className="product__image" src={image} alt="product__image" />
      <button className="product__button">Add to basket</button>
    </div>
  );
}
{
  /*title price image rating buy-button*/
}
export default Product;
