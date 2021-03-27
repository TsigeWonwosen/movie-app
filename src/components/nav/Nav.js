import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import { FcMenu } from 'react-icons/fc';

import MenuItems from './NavBarMenusItems';
import '../../style/navBar.css';
import LOGO from '../../img/wondeLogo.png';
const NavBar = () => {
  const [show, handleShow] = useState(false);
  const [showSideNav, setHide] = useState(false);

  const shewNavBar = () => {
    setHide((prvState) => !prvState);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        handleShow(true);
      } else handleShow(false);

      return () => {
        window.removeEventListener('scroll');
      };
    });
  }, []);

  return (
    <header className="navbar-header">
      <div className="nav-bargure">
        {!showSideNav ? (
          <div className="nav-menu" onClick={shewNavBar}>
            <FcMenu />
          </div>
        ) : (
          <div className="nav-menu-close" onClick={shewNavBar}>
            <IoMdClose />
          </div>
        )}
      </div>
      <nav className={show ? 'navbar nav_black' : 'navbar'}>
        <div className="nav-logo">
          <Link to="/">
            <img className="logo" src={LOGO} alt="Logo" />
          </Link>
        </div>
        <ul
          className={showSideNav ? 'showSideNav' : 'nav-lists'}
          onClick={shewNavBar}
        >
          {MenuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>{item.name} </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default NavBar;
