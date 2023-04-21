import React from "react";
import PropTypes from 'prop-types';
import css from './HeaderSubmenuSection.module.css';

function HeaderSubmenuSection({ children, hasBorder = true, style }) {
  return (
    <section 
      className={`
        ${css['container']}
        ${!hasBorder ? css['container--no-border'] : ''}
      `}
      style={style}
    >
      {children}
    </section>
  );
}

HeaderSubmenuSection.propTypes = {
  children: PropTypes.node.isRequired,
  hasBorder: PropTypes.bool,
  style: PropTypes.object,
};

export default HeaderSubmenuSection;