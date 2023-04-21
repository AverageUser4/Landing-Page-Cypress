import React from 'react';
import PropTypes from 'prop-types';

import FancyHeading from '../FancyHeading/FancyHeading';
import GridList from '../GridList/GridList';
import Button from '../Button/Button';
import HeaderSubmenuSection from '../HeaderSubmenuSection/HeaderSubmenuSection';
import Heading from '../Heading/Heading';
import HeaderSubmenuSiblings from '../HeaderSubmenuSiblings/HeaderSubmenuSiblings';

import getData from '../../misc/HeaderSubmenuElementsData';

import { ReactComponent as BuildingsSVG } from './assets/buildings.svg';
import { ReactComponent as DiscordSVG } from './assets/discord.svg';
import { ReactComponent as FacebookSVG } from './assets/facebook.svg';
import { ReactComponent as GithubSVG } from './assets/github.svg';
import { ReactComponent as LinkedInSVG } from './assets/linked-in.svg';
import { ReactComponent as TwitterSVG } from './assets/twitter.svg';
import { ReactComponent as YoutubeSVG } from './assets/youtube.svg';

function HeaderSubmenuCompany({ isMobileView }) {
  const { types, classNames } = getData(isMobileView);

  const heading = (
    <FancyHeading
      Icon={BuildingsSVG}
      heading="About Cypress"
      text="A new generation of testing"
      href="https://www.cypress.io/about-us"
    />
  );

  const firstList = (
    <GridList columnsCount={1}>
      <Heading>Company</Heading>

      <Button type={types.link} href="https://www.cypress.io/careers">
        Working at Cypress
      </Button>

      <Button type={types.link} href="https://www.cypress.io/careers#open-roles">
        Open positions
      </Button>

      <Button type={types.link} href="https://www.cypress.io/support">
        Support
      </Button>

      <Button type={types.link} href="https://www.cypress.io/press-kit">
        Press & media
      </Button>
    </GridList>
  );

  const secondList = (
    <GridList columnsCount={isMobileView ? 2 : 1}>
      <Button className="icon-container" type={types.linkBold} href="https://github.com/cypress-io/cypress">
        <GithubSVG className={classNames.svg}/>
        GitHub
      </Button>

      <Button className="icon-container" type={types.linkBold} href="https://www.youtube.com/c/Cypressio">
        <YoutubeSVG className={classNames.svg}/>
        YouTube
      </Button>

      <Button className="icon-container" type={types.linkBold} href="https://www.linkedin.com/company/cypress.io">
        <LinkedInSVG className={classNames.svg}/>
        LinkedIn
      </Button>

      <Button className="icon-container" type={types.linkBold} href="https://twitter.com/Cypress_io">
        <TwitterSVG className={classNames.svg}/>
        Twitter
      </Button>

      <Button className="icon-container" type={types.linkBold} href="https://facebook.com/cypressio">
        <FacebookSVG className={classNames.svg}/>
        Facebook
      </Button>

      <Button className="icon-container" type={types.linkBold} href="https://on.cypress.io/chat">
        <DiscordSVG className={classNames.svg}/>
        Discord
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

HeaderSubmenuCompany.propTypes = {
  isMobileView: PropTypes.bool.isRequired,
};

export default HeaderSubmenuCompany;