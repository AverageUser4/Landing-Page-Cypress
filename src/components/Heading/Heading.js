import React from "react";
import PropTypes from 'prop-types';
import css from './Heading.module.css';

function Heading({ children, level = 4 }) {
  const classes = `
    ${css['heading']}
  `;
  
  switch(level) {
    case 6:
      return <h6 className={classes}>{children}</h6>
      
    case 5:
      return <h5 className={classes}>{children}</h5>

    case 4:
      return <h4 className={classes}>{children}</h4>
      
    case 3:
      return <h3 className={classes}>{children}</h3>

    case 2:
      return <h2 className={classes}>{children}</h2>
      
    default:
      return <h1 className={classes}>{children}</h1>
  }
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};

export default Heading;