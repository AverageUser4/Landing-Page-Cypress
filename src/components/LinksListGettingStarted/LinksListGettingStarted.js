import React from 'react';
import PropTypes from 'prop-types';

import LinksList from '../LinksList/LinksList';

function LinksListGettingStarted({ isFull, type = 'a' }) {
  return (
    <LinksList
      isFull={isFull}
      type={type}
      heading="Getting started"
      linksData={[
        { content: 'Why Cypress', href: 'https://on.cypress.io/why-cypress', isShowOnlyWhenFull: true },
        { content: 'Installing Cypress', href: 'https://on.cypress.io/installing-cypress' },
        { content: 'Writing your first test', href: 'https://on.cypress.io/writing-your-first-test' },
        { content: 'Testing your app', href: 'https://on.cypress.io/testing-your-app' },
        { content: 'How Cypress works', href: 'https://www.cypress.io/how-it-works', isShowOnlyWhenFull: true },
      ]}
    />
  );
}

LinksListGettingStarted.propTypes = {
  isFull: PropTypes.bool,
  type: PropTypes.string,
};

export default LinksListGettingStarted;