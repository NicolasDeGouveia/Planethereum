import './Styles.scss';
import { navData } from '../data/navData';
import { ImCross } from 'react-icons/im';
import PropTypes from 'prop-types';

export default function Dropdown({ isActive, toggle }) {
  return (
    <div className={(isActive) ? ' dropdown' : 'dropdown-isActive'}>
      <div className="dropdown__icon" onClick={toggle} >
        <ImCross />
      </div>
      <div className="dropdown__wrapper">
        <div className="dropdown__menu">
          {
            navData.map((nav) => (
              <a onClick={toggle} key={nav.id} href={nav.link} className="dropdown__item"> {nav.title} </a>
            ))
          }
        </div>
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  isActive: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
}
