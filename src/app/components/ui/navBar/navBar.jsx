import React, { useEffect } from 'react';
// import logo from './../../../img/label.jpg';
import { Link } from 'react-router-dom';
import Avatar from '../avatar';
import s from './navBar.module.css';
// import { CardImg } from 'reactstrap';
// import Icons from '../icons';
import Logo from '../logo/logo';
import Icons from '../icons';
import classNames from 'classnames';
// import { basketService } from '../../../services/basket.service';
import { useDispatch, useSelector } from 'react-redux';
import { getBasketLength, loadListBasket } from '../../../store/basket';
// import Logo from '../logo';

const NavBar = () => {
  const dispatch = useDispatch();
  const count = useSelector(getBasketLength());
  useEffect(() => {
    dispatch(loadListBasket());
  }, [count]);
  return (
    <div>
      <nav className='navbar navbar-expand-md navbar-dark mb-3' >
        <div className='container-fluid' style={ { padding: '0 17px 0 16px', height: '64px' } }>
          <div className='collapse navbar-collapse navbar-nav' id='navbarSupportedContent'>
            <ul className='navbar-nav mb-lg-0 align-items-center'>
              <li className='nav-item'>
                <Link
                  className='nav-link ps-0'
                  aria-current='page'
                  to='/'>
                  <Logo />
                </Link>
              </li>
              <li className='nav-item'>
                <Link className={ `${s.textNav}` } to='/catalog' >Sell on Shopka</Link>
              </li>
              <li className='nav-item'>
                <Link className={ `${s.textNav}` } to='#' >Register</Link>
              </li>
            </ul>
            <form className='d-flex justify-content-center ms-auto me-0' style={ { flexGrow: '1', paddingLeft: 21 } }>
              <div className='position-relative' style={ { flexGrow: '1', maxWidth: '668px' } }>
                <input
                  id="nav-search"
                  className={ `form-control rounded-pill ${s.navSearch}` }
                  type='text'
                  placeholder='Поиск'
                  aria-label='Search'
                // value={ 'useless items on white background' }
                >
                </input>
                <label htmlFor="nav-search" className={ s.navSearchIcon }>
                  <Icons name='search' width='18px' height='18px' color='#787885' />
                </label>
                <label htmlFor="nav-search" className={ s.navCloseIcon }>
                  <Icons name='close' width='14px' height='14px' color='#2979FF' />
                </label>
              </div>
              <button className={ `btn btn-outlin ${s.textNav}` } type='button'>Consumer Electronics</button>
            </form>
            <div className="nav-item">
              <Link className={ s.navButton } to='#'>
                <span className={ classNames(s.text, s.textP5) }>Sign in</span>
              </Link>
            </div>
            <div className="nav-item">
              <Link className={ s.navButton } to='/basket'>
                <span className={ s.text }>My cart</span>
                <span className={ s.cartCount }>{ count }</span>
              </Link>
            </div>
            <div className='navbar-nav nav-item' style={ { marginLeft: '14px' } }>
              <Link className='nav-link p-0' to={ '#' } id='navbarDropdown' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                <Avatar width='40px' />
              </Link>
            </div>
          </div >
        </div >
      </nav >
    </div>
  );
};

export default NavBar;
