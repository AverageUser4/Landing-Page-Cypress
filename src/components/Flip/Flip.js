import React, { useState } from "react";
import css from './Flip.module.css'
import PropTypes from 'prop-types';

function Flip({ first, second }) {
  const [active, setActive] = useState('first');

  return (
    <div 
      className={css['container']}
    >

      <button 
        className={`
          ${css['page']}
          ${active === 'first' ? css['page--active'] : css['page--inactive']}
        `}
        disabled={active === 'first'}
        onClick={() => setActive('first')}
      >
        {first}
      </button>

      <button 
        className={`
          ${css['page']}
          ${active === 'second' ? css['page--active'] : css['page--inactive']}
        `}
        disabled={active === 'second'}
        onClick={() => setActive('second')}
      >
        {second}
      </button>

    </div>
  );
}

Flip.propTypes = {
  first: PropTypes.node.isRequired,
  second: PropTypes.node.isRequired,
};

export default Flip;