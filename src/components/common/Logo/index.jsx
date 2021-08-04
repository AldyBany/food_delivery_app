import React from 'react';
import logo from './logo.png';
import {Link} from 'react-router-dom'

import './styles.css';

const Logo = () => (
  <Link className='header-content_logo'  to="/">
    <div>
      <img src={logo} alt='logo'/>
      <span>
        <b>Taste</b>
      </span>
    </div>
    <p>
      <b>Restaurant & BBQ</b>
    </p>
  </Link>
);

export default Logo;
