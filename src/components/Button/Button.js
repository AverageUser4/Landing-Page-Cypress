import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

import { ReactComponent as ArrowSVG } from './assets/arrow.svg';

function Button({ children, href, ariaLabel, onClick, hasArrow, type, className }) {
  let parsedTypes;
  if(type) {
    parsedTypes = type.replace(/\s/g, ' ').split(' ').filter(t => t).reduce((acc, cur) => acc + ' ' + css[`button--type-${cur}`], '');
  }

  const classes = `
    ${css['button']}
    ${parsedTypes}
    ${className}
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
  className: PropTypes.string,
};

export default Button;