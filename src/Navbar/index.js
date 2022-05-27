import './Styles.scss';
import { navData } from '../data/navData';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export default function Navbar({toggle}) {
  const [navBar, setNavBar] = useState(false);
  const location = useLocation();

  const changeBackground = () => {
    if (window.pageYOffset >= 60) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener('scroll', changeBackground);
    };

    watchScroll();

    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  const style = {
    backgroundColor: navBar || location.pathname !== '/' ? '#b78846' : 'transparent',
    transition: '0.6s ease-in-out',
    height : '100px',
  };

  return (
    <div className="navbar" style={style}>
      <div className="navbar__container">
        <div className="navbar__title">
          <h1>
            <Link to="/">Planethereum</Link>
          </h1>
        </div>
        <div className="navbar__list">
          {
            navData.map((nav) => (
              <NavLink to={nav.link} key={nav.id} className="navbar__item"> {nav.title} </NavLink>
            ))
          }
        </div>
        <div className='navbar__bar' onClick={toggle}>
          <FaBars />
        </div>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  toggle: PropTypes.func.isRequired
}
