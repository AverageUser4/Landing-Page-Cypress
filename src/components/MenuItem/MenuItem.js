
import React from 'react';
import PropTypes from 'prop-types';
import css from './MenuItem.module.css';

import { ReactComponent as ArrowSVG } from './assets/arrow.svg';

function MenuItem({ isMobileView, text, href }) {
  let classes = `
    ${css['item']}
    ${!isMobileView ? css['item--desktop'] : ''}
  `;
  
  if(href) {
    return (
      <a 
        href={href}
        className={classes}
      >
        {text}
      </a>
    );
  }
  
  return (
    <button 
      className={classes}
    >
      {text}
      {isMobileView && <ArrowSVG/>}
    </button>
  );
}

MenuItem.propTypes = {
  isMobileView: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  href: PropTypes.string,
};

export default MenuItem;