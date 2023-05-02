import React from 'react';
import PropTypes from 'prop-types';

import FancyHeading from '../FancyHeading/FancyHeading';
import GridList from '../GridList/GridList';
import Button from '../Button/Button';
import HeaderSubmenuSection from '../HeaderSubmenuSection/HeaderSubmenuSection';
import HeaderSubmenuSiblings from '../HeaderSubmenuSiblings/HeaderSubmenuSiblings';

import getData from '../../misc/HeaderSubmenuElementsData';

import { ReactComponent as FlagSVG } from './assets/flag.svg';
import { ReactComponent as PersonSVG } from './assets/person.svg';
import { ReactComponent as CalendarSVG } from './assets/calendar.svg';
import { ReactComponent as CalloutSVG } from './assets/callout.svg';

function HeaderSubmenuCommunity({ isMobileView }) {
  const { types, classNames } = getData(isMobileView);
  
  const heading = (
    <FancyHeading
      Icon={FlagSVG}
      heading="Blog"
      text="Best practices, insights & more"
      href="https://blog.cypress.io/"
    />
  );

  const firstList = (
    <GridList columnsCount={1}>
      <h4 className="head head--d">Topics</h4>

      <Button type={types.link} href="https://cypress.io/blog/tag/product-updates/">
        Releases
      </Button>

      <Button type={types.link} href="https://cypress.io/blog/tag/in-the-community/">
        Community
      </Button>

      <Button type={types.link} href="https://cypress.io/blog/tag/ambassador/">
        Ambassador spotlights
      </Button>
    </GridList>
  );

  const secondList = (
    <GridList columnsCount={1}>
      <Button className="icon-container" type={types.linkBold} href="https://www.cypress.io/ambassadors">
        <PersonSVG className={classNames.svg}/>
        Ambassador program
      </Button>

      <Button className="icon-container" type={types.linkBold} href="https://www.cypress.io/events">
        <CalendarSVG className={classNames.svg}/>
        Events
      </Button>

      <Button className="icon-container" type={types.linkBold} href="https://www.cypress.io/customer-stories">
        <CalloutSVG className={classNames.svg}/>
        Customer stories
      </Button>
    </GridList>
  );

  if(isMobileView) {
    return (
      <div>
        <HeaderSubmenuSection>
          {heading}
        </HeaderSubmenuSection>
  
        <HeaderSubmenuSection>
          {firstList}
        </HeaderSubmenuSection>
  
        <HeaderSubmenuSection>
          {secondList}
        </HeaderSubmenuSection>
      </div>
    );
  }

  return (
    <HeaderSubmenuSiblings
      left={
        <>
          <HeaderSubmenuSection hasBorder={false} style={{ paddingTop: 0 }}>
            {heading}
          </HeaderSubmenuSection>
          <HeaderSubmenuSection>
            <GridList>
              {firstList}
            </GridList>
          </HeaderSubmenuSection>
        </>
      }
      right={
        <>
          {secondList}
        </>
      }
    />
  );
}

HeaderSubmenuCommunity.propTypes = {
  isMobileView: PropTypes.bool.isRequired,
};

export default HeaderSubmenuCommunity;