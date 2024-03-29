import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signout();
    }
  }

  return (
    <div className='Header'>
      <Link to='/'>
      <img
        className='header__logo'
        src='https://wildfiresocial.com/wp-content/uploads/2019/01/amazon-logo-white._cb1509666198_.png'
        />
      </Link>

      <div className='header__search'>
        <input className='header__searchInput'
          type='text' />
          <SearchIcon className='header__searchIcon'/>
      </div>

      <div className='header__nav'>
        <Link to={!user &&'/login'}>
          <div onClick={handleAuthentication}
          className='header__option'>
            <span
            className='header__optionLineOne'>Hello Guest</span>
            <span
            className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <div className='header__option'>
          <span
          className='header__optionLineOne'>Return</span>
          <span
          className='header__optionLineTwo'>Orders</span>
        </div>

        <div className='header__option'>
          <span
          className='header__optionLineOne'>Your</span>
          <span
          className='header__optionLineTwo'>Prime</span>
        </div>

        <Link to='/checkout'>
          <div className='header__optionBasket'>
            <ShoppingBasketIcon />
            <span className='header_optionLineTwo header_basketCount'>0</span>
          </div>
          </Link>
      </div>
    </div>
  );
}

export default Header;
