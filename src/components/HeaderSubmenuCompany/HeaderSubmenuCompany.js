import React from 'react';
import PropTypes from 'prop-types';

import FancyHeading from '../FancyHeading/FancyHeading';
import GridList from '../GridList/GridList';
import HeaderSubmenuSection from '../HeaderSubmenuSection/HeaderSubmenuSection';
import HeaderSubmenuSiblings from '../HeaderSubmenuSiblings/HeaderSubmenuSiblings';

import { ReactComponent as BuildingsSVG } from './assets/buildings.svg';
import SocialsList from '../SocialsList/SocialsList';
import LinksListCompany from '../LinksListCompany/LinksListCompany';

function HeaderSubmenuCompany({ isMobileView }) {
  const heading = (
    <FancyHeading
      Icon={BuildingsSVG}
      heading="About Cypress"
      text="A new generation of testing"
      href="https://www.cypress.io/about-us"
    />
  );

  const firstList = (
    <LinksListCompany/>
  );

  const secondList = (
    <SocialsList 
      columnsCount={isMobileView ? 2 : 1}
      isMobileView={isMobileView}
    />
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

HeaderSubmenuCompany.propTypes = {
  isMobileView: PropTypes.bool.isRequired,
};

export default HeaderSubmenuCompany;