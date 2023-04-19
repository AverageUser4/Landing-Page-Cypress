import React from 'react';
import { ReactComponent as LogoSVG } from '../../assets/images/navbar-brand.svg';

function Logo() {
  return (
    <a href="./">
      <LogoSVG/>
    </a>
  );
}

export default Logo;