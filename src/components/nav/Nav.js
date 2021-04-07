import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import { BiMenuAltRight as FcMenu } from 'react-icons/bi';

import MenuItems from './NavBarMenusItems';
import { Search } from '../../components';
import { useAuth } from '../../context/AuthContext';
import useWindowSize from '../../hooks/useWindowSize';
import LOGO from '../../img/wondeLogo.png';

import styled from 'styled-components';
import '../../style/navBar.css';

const NavBar = () => {
  const [showNavBackground, setShowNavBackground] = useState(false);
  const [open, setOpen] = useState(false);
  const windowSize = useWindowSize();
  const { currentUser, logOut } = useAuth();
  let history = useHistory();

  const handleLogOut = () => {
    logOut();
    history.push('/login');
  };
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

  let newItem = MenuItems;
  newItem.map((item) => {
    let newName = item;
    if (newName.path === '/login' && currentUser?.email) {
      newName.name = currentUser?.displayName;
    }
    return newName;
  });

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
          {newItem.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>{item.name} </Link>
              </li>
            );
          })}
          <ProfileContainer>
            {currentUser ? (
              <li>
                {currentUser?.displayName}{' '}
                <Profile onClick={handleLogOut}>LogOut</Profile>
              </li>
            ) : (
              <li>
                <Link to="/login">Login/Register </Link>
              </li>
            )}
          </ProfileContainer>
        </ul>
      </nav>
    </header>
  );
};
export default NavBar;

export const ProfileContainer = styled.section`
  color: #f4f4f4;
  font-size: 0.8rem;
`;
export const Profile = styled.span`
  margin-left: 0.5rem;
  padding: 4px 10px;
  border-radius: 999px;
  color: #f4f4f4;
  cursor: pointer;
  font-size: 0.8rem;
  border: 1px solid #fff;
  transition: 0.3s all ease-in-out;

  &:hover {
    color: red;
    border: 1px solid red;
  }
`;
