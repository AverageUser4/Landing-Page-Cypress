import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import css from './MenuToggleButton.module.css';

import { ReactComponent as MenuBarsSVG } from './assets/menu-bars.svg';
import { ReactComponent as CloseSVG } from './assets/close.svg';

const MenuToggleButton = forwardRef(function MenuToggleButton({ isOpen, setIsOpen }, ref) {
  return (
    <button 
      className={css['button']}
      onClick={() => setIsOpen(prev => !prev)}
      aria-label={isOpen ? 'Close menu.' : 'Open menu.'}
      ref={ref}
    >
      {
        isOpen ?
          <CloseSVG/>
        :
          <MenuBarsSVG style={{ transform: 'scaleX(-1)' }}/>
      }
    </button>
  );
});

MenuToggleButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default MenuToggleButton;