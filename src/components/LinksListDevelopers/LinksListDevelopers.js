import React from 'react';
import PropTypes from 'prop-types';

import LinksList from '../LinksList/LinksList';

function LinksListDevelopers({ type = 'a' }) {
  return (
    <LinksList
      type={type}
      heading="Developers"
      linksData={[
        { content: 'Documentation', href: 'https://on.cypress.io/', },
        { content: 'Changelog', href: 'https://on.cypress.io/changelog' },
        { content: 'Status site', href: 'https://www.cypressstatus.com/' },
        { content: 'Contribute', href: 'https://on.cypress.io/contributing' },
        { content: 'Learn Cypress', href: 'https://learn.cypress.io/', },
      ]}
    />
  );
}

LinksListDevelopers.propTypes = {
  type: PropTypes.string,
};

export default LinksListDevelopers;