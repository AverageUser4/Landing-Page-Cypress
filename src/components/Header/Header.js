import React from 'react';
import css from './Header.module.css';

import HeaderList from '../HeaderList/HeaderList';
import Logo from '../Logo/Logo';

function Header() {
  return (
    <header className={css['container']}>

      <Logo/>
      <HeaderList/>

    </header>
  );
}

export default Header;