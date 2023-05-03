import React from 'react';
import PropTypes from 'prop-types';

import LinksList from '../LinksList/LinksList';

function LinksListCommunity({ type = 'a' }) {
  return (
    <LinksList
      type={type}
      heading="Community"
      linksData={[
        { content: 'Blog', href: 'https://www.cypress.io/blog' },
        { content: 'Ambassadors', href: 'https://www.cypress.io/ambassadors' },
        { content: 'Events', href: 'https://www.cypress.io/events' },
        { content: 'Customer stories', href: 'https://www.cypress.io/customer-stories' },
      ]}
    />
  );
}

LinksListCommunity.propTypes = {
  type: PropTypes.string,
};

export default LinksListCommunity;