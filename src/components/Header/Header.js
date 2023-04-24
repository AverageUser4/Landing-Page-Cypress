import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Header.module.css';

import HeaderMenu from '../HeaderMenu/HeaderMenu';
import Logo from '../Logo/Logo';
import MenuToggleButton from '../MenuToggleButton/MenuToggleButton';

import { useScrollContext } from '../../context/Scroll';
import { useViewportContext } from '../../context/Viewport';

function Header({ isBackgroundTransparentWhenOnTop }) {
  const { viewportWidth } = useViewportContext();
  const { scrollY } = useScrollContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobileView = viewportWidth < 640;

  const menu = (
    <HeaderMenu
      isOpen={isMenuOpen}
      isMobileView={isMobileView}
    />  
  );
  
  return (
    <>
      <header 
        className={`
          ${css['header']}
          ${(isBackgroundTransparentWhenOnTop && scrollY === 0 && !isMenuOpen) ? css['header--no-background'] : ''}
        `}
      >
        <div className={css['header-content']}>
          <Logo/>
          {!isMobileView && menu}
          {
            isMobileView &&
              <MenuToggleButton
                isOpen={isMenuOpen}
                setIsOpen={setIsMenuOpen}
              />
          }
        </div>
      </header>

      {isMobileView && menu}
    </>
  );
}

Header.propTypes = {
  isBackgroundTransparentWhenOnTop: PropTypes.bool,
};

export default Header;