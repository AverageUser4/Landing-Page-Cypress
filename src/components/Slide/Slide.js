import React from "react";
import PropTypes from 'prop-types';
import css from './Slide.module.css';

function Slide({ children }) {
  return (
    <ul className={css['list']}>
      {children.map((element, index) => 
        <li 
          className={css['list-item']}
          key={index}
          style={{
            left: 120 * index
          }}
        >
          {element}
        </li>
      )}
    </ul>
  )
}

Slide.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Slide;