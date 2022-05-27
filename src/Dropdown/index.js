import { Link } from 'react-router-dom';
import './Styles.scss';
import {navData} from '../data/navData';
import {ImCross} from 'react-icons/im';
import PropTypes from 'prop-types';

export default function Dropdown({isActive, toggle}) {
  return (
    <div className={(isActive) ? ' dropdown' : 'dropdown-isActive'}>
      <div className="dropdown__icon" onClick={toggle} >
        <ImCross />
      </div>
      <div className="dropdown__wrapper">
        <div className="dropdown__menu">
          {
            navData.map((nav) => (
              <Link key={nav.id} to={nav.link} className="dropdown__item"> {nav.title} </Link>
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
