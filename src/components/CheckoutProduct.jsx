import React from 'react';
import '../css/CheckoutProduct.css';
import useStateValue from '../StateProvider';

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: 'DELETE_FROM_BASKET',
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <div className="">
        <img className="checkoutProduct__image" src={image} alt="product__image" />
      </div>
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
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

        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
