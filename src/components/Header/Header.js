import React, { useRef, useState } from 'react';
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
  const menuToggleButtonRef = useRef()

  const menu = (
    <HeaderMenu
      isOpen={isMenuOpen}
      setIsOpen={setIsMenuOpen}
      isMobileView={isMobileView}
      toggleButtonRef={menuToggleButtonRef}
    />  
  );
  
  return (
    <>
      <div className={css['placeholder']}/>
    
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
                ref={menuToggleButtonRef}
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