import React from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import useStateValue from '../StateProvider';

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
  return (
    <nav className="header">
      <Link to="/login">
        <img
          className="logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon-logo"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionOne">Hello Oleg</span>
            <span className="header__optionTwo">Sign In</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionOne">Returns</span>
            <span className="header__optionTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionOne">Your</span>
            <span className="header__optionTwo">Prime</span>
          </div>
        </Link>
      </div>
      <Link to="/checkout" className="header__link">
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionTwo header_basketCount">{basket?.length}</span>
        </div>
      </Link>
      {/*basket*/}
    </nav>
  );
}

export default Header;
