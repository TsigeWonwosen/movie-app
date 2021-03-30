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
  const [windowSize, setWindowSize] = useState(false);
  const [open, setOpen] = useState(false);

  const shewNavBar = () => {
    setOpen((prvState) => !prvState);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY < 100) {
        setShowNavBackground(false);
      } else {
        setShowNavBackground(true);
      }
      return () => {
        window.removeEventListener('scroll');
      };
    });
  }, [showNavBackground]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 900) {
        setWindowSize(true);
      } else {
        setWindowSize(false);
      }
    }
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.addEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={
        showNavBackground ? 'navbar-header nav_black' : 'navbar-header '
      }
    >
      <div className="nav-burger">
        {!open ? (
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
        {!windowSize && <Search />}
        <ul
          className={windowSize ? (open ? 'showSideNav' : 'hide') : 'nav-lists'}
          onClick={() => setOpen(false)}
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
