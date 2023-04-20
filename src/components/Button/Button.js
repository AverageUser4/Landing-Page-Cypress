import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

import { ReactComponent as ArrowSVG } from './assets/arrow.svg';

function Button({ children, href, ariaLabel, onClick, hasArrow, type }) {
  const classes = `
    ${css['button']}
    ${type ? css[`button--type-${type}`] : ''}
  `;
  const clickCallback = (event) => onClick && onClick(event);
  const arrow = <ArrowSVG className={css['arrow']}/>

  if(href) {
    return (
      <a 
        className={classes}
        href={href}
        aria-label={ariaLabel}
        onClick={clickCallback}
      >
        {children}
        {hasArrow && arrow}
      </a>
    )
  }
  
  return (
    <button
      className={classes}
      aria-label={ariaLabel}
      onClick={clickCallback}
    >
      {children}
      {hasArrow && arrow}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  ariaLabel: PropTypes.string,
  onClick: PropTypes.func,
  hasArrow: PropTypes.bool,
  type: PropTypes.string,
};

export default Button;