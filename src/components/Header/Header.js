import React from 'react';
import css from './Header.module.css';

import HeaderMenu from '../HeaderMenu/HeaderMenu';
import Logo from '../Logo/Logo';

function Header() {
  return (
    <header className={css['container']}>

      <Logo/>
      <HeaderMenu/>

    </header>
  );
}

export default Header;