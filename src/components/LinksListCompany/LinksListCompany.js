import React from 'react';
import PropTypes from 'prop-types';

import LinksList from '../LinksList/LinksList';

function LinksListCompany({ isFull, type = 'a' }) {
  return (
    <LinksList
      isFull={isFull}
      type={type}
      heading="Company"
      linksData={[
        { content: 'About', href: 'https://www.cypress.io/about-us', isShowOnlyWhenFull: true },
        { content: 'Working at Cypress', href: 'https://www.cypress.io/careers' },
        { content: 'Open positions', href: 'https://www.cypress.io/careers#open-roles' },
        { content: 'Support', href: 'https://www.cypress.io/support' },
        { content: 'Press & media', href: 'https://www.cypress.io/press-kit' },
      ]}
    />
  );
}

LinksListCompany.propTypes = {
  isFull: PropTypes.bool,
  type: PropTypes.string,
};

export default LinksListCompany;