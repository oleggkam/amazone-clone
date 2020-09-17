import React from 'react';
import '../css/Product.css';
import useStateValue from '../StateProvider';

function Product({ id, title, image, rating, price }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        image,
        rating,
        price,
      },
    });
  };

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
      <button className="product__button" onClick={addToBasket}>
        Add to basket
      </button>
    </div>
  );
}
{
  /*title price image rating buy-button*/
}
export default Product;
