import React from 'react';
import PropTypes from 'prop-types';

import LinksList from '../LinksList/LinksList';

function LinksListCypressIO({ type = 'a', isHorizontal }) {
  return (
    <LinksList
      isHorizontal={isHorizontal}
      type={type}
      heading="© Cypress.io"
      linksData={[
        { content: 'Privacy', href: 'https://www.cypress.io/privacy-policy' },
        { content: 'Terms', href: 'https://www.cypress.io/terms-of-use' },
        { content: 'Security', href: 'https://www.cypress.io/security' },
        { content: 'Cookies', href: 'https://www.cypress.io/#' },
      ]}
    />
  );
}

LinksListCypressIO.propTypes = {
  type: PropTypes.string,
  isHorizontal: PropTypes.bool,
};

export default LinksListCypressIO;