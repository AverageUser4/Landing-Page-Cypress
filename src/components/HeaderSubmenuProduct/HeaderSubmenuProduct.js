import React from 'react';
import PropTypes from 'prop-types';

import FancyHeading from '../FancyHeading/FancyHeading';
import GridList from '../GridList/GridList';
import Button from '../Button/Button';
import HeaderSubmenuSection from '../HeaderSubmenuSection/HeaderSubmenuSection';

import { ReactComponent as LaptopSVG } from './assets/laptop.svg';
import { ReactComponent as WebpageSVG } from './assets/webpage.svg';
import { ReactComponent as MouseCursorSVG } from './assets/mouse-cursor.svg';
import { ReactComponent as HeartSVG } from './assets/heart.svg';
import { ReactComponent as ShieldSVG } from './assets/shield.svg';
import { ReactComponent as MeterSVG } from './assets/meter.svg';
import { ReactComponent as LightningSVG } from './assets/lightning.svg';
import { ReactComponent as PictureSVG } from './assets/picture.svg';
import { ReactComponent as StatsSVG } from './assets/stats.svg';
import { ReactComponent as ChainSVG } from './assets/chain.svg';

function HeaderSubmenuProduct({ isMobileView }) {
  return (
    <div>
      <HeaderSubmenuSection>
        <FancyHeading
          Icon={LaptopSVG}
          heading="Cypress App"
          text="Test your modern applications with our open-source app"
          href="https://www.cypress.io/app/"
        />

        <GridList>
          <Button type="link" href="https://www.cypress.io/app">
            <WebpageSVG/>
            Browser Testing
          </Button>

          <Button type="link" href="https://www.cypress.io/app#visual_debugging">
            <MouseCursorSVG/>
            Visual Debugging
          </Button>

          <Button type="link" href="https://www.cypress.io/app#delightful_experience">
            <HeartSVG/>
            Delightful Experience
          </Button>

          <Button type="link" href="https://www.cypress.io/app#flake_resistance">
            <ShieldSVG/>
            Flake Resistance
          </Button>
        </GridList>
      </HeaderSubmenuSection>

      <HeaderSubmenuSection>

        <FancyHeading
          Icon={MeterSVG}
          heading="Cypress Cloud"
          text="Scale your testing with total confidence on every release"
          href="https://www.cypress.io/cloud"
        />

        <GridList>
          <Button type="link" href="https://www.cypress.io/cloud#smart_orchestration">
            <LightningSVG/>
            Smart Orchestration
          </Button>

          <Button type="link" href="https://www.cypress.io/cloud#visual_reviews">
            <PictureSVG/>
            Visual Reviews
          </Button>

          <Button type="link" href="https://www.cypress.io/cloud#test_analytics">
            <StatsSVG/>
            Test Analytics
          </Button>

          <Button type="link" href="https://www.cypress.io/cloud#integrated_workflows">
            <ChainSVG/>
            Integrated Workflows
          </Button>
        </GridList>
      </HeaderSubmenuSection>
    </div>
  );
}

HeaderSubmenuProduct.propTypes = {
  isMobileView: PropTypes.bool.isRequired,
};

export default HeaderSubmenuProduct;