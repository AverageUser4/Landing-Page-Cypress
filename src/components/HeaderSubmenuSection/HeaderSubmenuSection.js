import React from "react";
import PropTypes from 'prop-types';
import css from './HeaderSubmenuSection.module.css';

function HeaderSubmenuSection({ children }) {
  return (
    <section className={css['container']}>
      {children}
    </section>
  );
}

HeaderSubmenuSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderSubmenuSection;