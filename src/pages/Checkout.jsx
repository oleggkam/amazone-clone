import React from 'react';
import '../css/Checkout.css';
import useStateValue from '../StateProvider';
import CheckoutProduct from '../components/CheckoutProduct';

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__adv"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="checkout__adv"
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Basket is empty</h2>
            <p>You have not any items in your cart</p>
          </div>
        ) : (
          <div>
            <h1 className="checkout__tittle">Your shopping basket</h1>

            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <h1>Subtotal</h1>
          {/*<Subtotal/>*/}
        </div>
      )}
    </div>
  );
}

export default Checkout;
