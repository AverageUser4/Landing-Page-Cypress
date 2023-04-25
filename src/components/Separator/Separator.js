import React from "react";
import PropTypes from 'prop-types';
import css from './Separator.module.css';

function Separator({ text, isVertical }) {
  return (
    <div 
      className={`
        ${css['container']}
        ${isVertical ? css['container--vertical'] : ''}
      `}
    >
      {text}
    </div>
  );
}

Separator.propTypes = {
  text: PropTypes.string,
  isVertical: PropTypes.bool,
};

export default Separator;