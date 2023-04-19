import React from 'react';
import PropTypes from 'prop-types';
import css from './MenuButton.module.css';

import { ReactComponent as MenuBarsSVG } from './assets/menu-bars.svg';
import { ReactComponent as CloseSVG } from './assets/close.svg';

function MenuButton({ isOpen, setIsOpen }) {
  return (
    <button 
      className={css['button']}
      onClick={() => setIsOpen(prev => !prev)}
    >
      {
        isOpen ?
          <CloseSVG/>
        :
          <MenuBarsSVG/>
      }
    </button>
  );
}

MenuButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default MenuButton;