import React from 'react';
import PropTypes from 'prop-types';
import css from './Header.module.css';

import HeaderMenu from '../HeaderMenu/HeaderMenu';
import Logo from '../Logo/Logo';

import { useWebpageStateContext } from '../../context/WebpageState';

function Header({ isBackgroundTransparentWhenOnTop }) {
  const { scrollY } = useWebpageStateContext();


  console.log(scrollY)
  
  return (
    <header 
      className={`
      ${css['header']}
      ${(isBackgroundTransparentWhenOnTop && scrollY === 0) ? css['header--no-background'] : ''}
    `}
    >
      <div className={css['header-content']}>
        <Logo/>
        <HeaderMenu/>
      </div>
    </header>
  );
}

Header.propTypes = {
  isBackgroundTransparentWhenOnTop: PropTypes.bool,
};

export default Header;