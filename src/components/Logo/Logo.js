import React, { memo } from 'react';
import { ReactComponent as LogoSVG } from '../../assets/images/navbar-brand.svg';

const Logo = memo(function Logo() {
  return (
    <a href="./">
      <LogoSVG/>
    </a>
  );
});

export default Logo;