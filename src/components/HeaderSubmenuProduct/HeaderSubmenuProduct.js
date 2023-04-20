import React from 'react';
import PropTypes from 'prop-types';
import css from './HeaderSubmenuProduct.module.css';

import FancyHeading from '../FancyHeading/FancyHeading';

import { ReactComponent as LaptopSVG } from './assets/laptop.svg';

function HeaderSubmenuProduct({ isMobileView }) {
  return (
    <div>
      <FancyHeading
        Icon={LaptopSVG}
        heading="Cypress App"
        text="Test your modern applications with our open-source app"
        href="https://www.cypress.io/app/"
      />
    </div>
  );
}

HeaderSubmenuProduct.propTypes = {
  isMobileView: PropTypes.bool.isRequired,
};

export default HeaderSubmenuProduct;