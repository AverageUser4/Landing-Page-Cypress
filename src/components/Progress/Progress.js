import React from "react";
import css from './Progress.module.css';
import PropTypes from 'prop-types';

function Progress({ children }) {
  return (
    <div className={css['container']}>
      <div className={css['bar']}/>
      <div>
        {children}
      </div>
    </div>
  );
}

Progress.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Progress;