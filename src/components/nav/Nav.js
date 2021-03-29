import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import { FcMenu } from 'react-icons/fc';

import MenuItems from './NavBarMenusItems';
import { Search } from '../../components';
import LOGO from '../../img/wondeLogo.png';

import '../../style/navBar.css';

const NavBar = () => {
  const [showNavBackground, setShowNavBackground] = useState(false);
  const [showSideNav, setHide] = useState(false);

  const shewNavBar = () => {
    setHide((prvState) => !prvState);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY < 100) {
        console.log(showNavBackground);
        setShowNavBackground(false);
      } else {
        setShowNavBackground(true);
      }
      return () => {
        window.removeEventListener('scroll');
      };
    });
  }, [showNavBackground]);

  return (
    <header
      className={
        showNavBackground ? 'navbar-header nav_black' : 'navbar-header '
      }
    >
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
      <nav className="navbar">
        <div className="nav-logo">
          <Link to="/">
            <img className="logo" src={LOGO} alt="Logo" />
          </Link>
        </div>
        <Search />
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
