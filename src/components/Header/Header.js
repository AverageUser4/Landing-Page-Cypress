import React from 'react';
import css from './Header.module.css';

import HeaderMenu from '../HeaderMenu/HeaderMenu';
import Logo from '../Logo/Logo';

function Header() {
  return (
    <header className={css['header']}>
      <div className={css['header-content']}>
        <Logo/>
        <HeaderMenu/>
      </div>
    </header>
  );
}

export default Header;