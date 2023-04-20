import React from 'react';
import PropTypes from 'prop-types';

import FancyHeading from '../FancyHeading/FancyHeading';
import GridList from '../GridList/GridList';
import Button from '../Button/Button';
import HeaderSubmenuSection from '../HeaderSubmenuSection/HeaderSubmenuSection';
import Heading from '../Heading/Heading';

import { ReactComponent as FlagSVG } from './assets/flag.svg';
import { ReactComponent as PersonSVG } from './assets/person.svg';
import { ReactComponent as CalendarSVG } from './assets/calendar.svg';
import { ReactComponent as CalloutSVG } from './assets/callout.svg';

function HeaderSubmenuCommunity({ isMobileView }) {
  return (
    <div>
      <HeaderSubmenuSection>
        <FancyHeading
          Icon={FlagSVG}
          heading="Blog"
          text="Best practices, insights & more"
          href="https://blog.cypress.io/"
        />
      </HeaderSubmenuSection>

      <HeaderSubmenuSection>
          <GridList columnsCount={1}>
            <Heading>Topics</Heading>

            <Button type="link" href="https://cypress.io/blog/tag/product-updates/">
              Releases
            </Button>

            <Button type="link" href="https://cypress.io/blog/tag/in-the-community/">
              Community
            </Button>

            <Button type="link" href="https://cypress.io/blog/tag/ambassador/">
              Ambassador spotlights
            </Button>
          </GridList>
      </HeaderSubmenuSection>

      <HeaderSubmenuSection>
        <GridList columnsCount={1}>
          <Button type="link" href="https://www.cypress.io/ambassadors">
            <PersonSVG/>
            Ambassador program
          </Button>

          <Button type="link" href="https://www.cypress.io/events">
            <CalendarSVG/>
            Events
          </Button>

          <Button type="link" href="https://www.cypress.io/customer-stories">
            <CalloutSVG/>
            Customer stories
          </Button>
        </GridList>
      </HeaderSubmenuSection>
    </div>
  );
}

HeaderSubmenuCommunity.propTypes = {
  isMobileView: PropTypes.bool.isRequired,
};

export default HeaderSubmenuCommunity;