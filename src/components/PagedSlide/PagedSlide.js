import React from 'react';
import PropTypes from 'prop-types';
import css from './PagedSlide.module.css';

function PagedSlide({ children }) {
  return (
    <div className={css['container']}>
      {children}
    </div>
  );
}

PagedSlide.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PagedSlide;