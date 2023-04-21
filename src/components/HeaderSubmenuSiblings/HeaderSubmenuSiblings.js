import React from "react";
import PropTypes from 'prop-types';
import css from './HeaderSubmenuSiblings.module.css';

function HeaderSubmenuSiblings({ left, right }) {
  return (
    <div className={css['container']}>

      <div className={css['left']}>
        {left}
      </div>

      <div className={css['right']}>
        {right}
      </div>

    </div>
  );
}

HeaderSubmenuSiblings.propTypes = {
  left: PropTypes.node.isRequired,
  right: PropTypes.node.isRequired,
};

export default HeaderSubmenuSiblings;