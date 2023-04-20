import React from 'react';
import PropTypes from 'prop-types';

import FancyHeading from '../FancyHeading/FancyHeading';
import GridList from '../GridList/GridList';
import Button from '../Button/Button';
import HeaderSubmenuSection from '../HeaderSubmenuSection/HeaderSubmenuSection';
import Heading from '../Heading/Heading';

import { ReactComponent as BuildingsSVG } from './assets/buildings.svg';
import { ReactComponent as DiscordSVG } from './assets/discord.svg';
import { ReactComponent as FacebookSVG } from './assets/facebook.svg';
import { ReactComponent as GithubSVG } from './assets/github.svg';
import { ReactComponent as LinkedInSVG } from './assets/linked-in.svg';
import { ReactComponent as TwitterSVG } from './assets/twitter.svg';
import { ReactComponent as YoutubeSVG } from './assets/youtube.svg';

function HeaderSubmenuCompany({ isMobileView }) {
  return (
    <div>
      <HeaderSubmenuSection>
        <FancyHeading
          Icon={BuildingsSVG}
          heading="About Cypress"
          text="A new generation of testing"
          href="https://www.cypress.io/about-us"
        />
      </HeaderSubmenuSection>

      <HeaderSubmenuSection>
        <GridList columnsCount={1}>
          <Heading>Company</Heading>

          <Button type="link" href="https://www.cypress.io/careers">
            Working at Cypress
          </Button>

          <Button type="link" href="https://www.cypress.io/careers#open-roles">
            Open positions
          </Button>

          <Button type="link" href="https://www.cypress.io/support">
            Support
          </Button>

          <Button type="link" href="https://www.cypress.io/press-kit">
            Press & media
          </Button>
        </GridList>
      </HeaderSubmenuSection>

      <HeaderSubmenuSection>
        <GridList>
          <Button type="link" href="https://github.com/cypress-io/cypress">
            <GithubSVG/>
            GitHub
          </Button>

          <Button type="link" href="https://www.youtube.com/c/Cypressio">
            <YoutubeSVG/>
            YouTube
          </Button>

          <Button type="link" href="https://www.linkedin.com/company/cypress.io">
            <LinkedInSVG/>
            LinkedIn
          </Button>

          <Button type="link" href="https://twitter.com/Cypress_io">
            <TwitterSVG/>
            Twitter
          </Button>

          <Button type="link" href="https://facebook.com/cypressio">
            <FacebookSVG/>
            Facebook
          </Button>

          <Button type="link" href="https://on.cypress.io/chat">
            <DiscordSVG/>
            Discord
          </Button>
        </GridList>
      </HeaderSubmenuSection>
    </div>
  );
}

HeaderSubmenuCompany.propTypes = {
  isMobileView: PropTypes.bool.isRequired,
};

export default HeaderSubmenuCompany;