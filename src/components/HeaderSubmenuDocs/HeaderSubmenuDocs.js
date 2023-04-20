import React from 'react';
import PropTypes from 'prop-types';

import FancyHeading from '../FancyHeading/FancyHeading';
import GridList from '../GridList/GridList';
import Button from '../Button/Button';
import HeaderSubmenuSection from '../HeaderSubmenuSection/HeaderSubmenuSection';

import { ReactComponent as BookSVG } from './assets/book.svg';
import { ReactComponent as HatSVG } from './assets/hat.svg';
import { ReactComponent as TagSVG } from './assets/tag.svg';
import { ReactComponent as BookSmallSVG } from './assets/book-small.svg';
import { ReactComponent as QuestionMarkSVG } from './assets/question-mark.svg';
import Heading from '../Heading/Heading';


function HeaderSubmenuDocs({ isMobileView }) {
  return (
    <div>
      <HeaderSubmenuSection>
        <FancyHeading
          Icon={BookSVG}
          heading="Documentation"
          text="Learn how to test your code with Cypress"
          href="https://on.cypress.io/"
        />
      </HeaderSubmenuSection>

      <HeaderSubmenuSection>
        <GridList>
          <GridList columnsCount={1}>
            <Heading>Getting started</Heading>

            <Button type="link" href="https://on.cypress.io/installing-cypress">
              Installing Cypress
            </Button>

            <Button type="link" href="https://on.cypress.io/writing-your-first-test">
              Writing your first test
            </Button>

            <Button type="link" href="https://on.cypress.io/testing-your-app">
              Testing your app
            </Button>
          </GridList>

          <GridList columnsCount={1}>
            <Heading>References</Heading>

            <Button type="link" href="https://docs.cypress.io/api/commands/and">
              API
            </Button>

            <Button type="link" href="https://on.cypress.io/configuration">
              Configuration
            </Button>

            <Button type="link" href="https://on.cypress.io/best-practices">
              Best practices
            </Button>
          </GridList>
        </GridList>
      </HeaderSubmenuSection>

      <HeaderSubmenuSection>
        <GridList>
          <Button type="link" href="https://learn.cypress.io/">
            <HatSVG/>
            Learn Cypress
          </Button>

          <Button type="link" href="https://on.cypress.io/changelog">
            <TagSVG/>
            Changelog
          </Button>

          <Button type="link" href="https://on.cypress.io/migration-guide">
            <BookSmallSVG/>
            Migration guides
          </Button>

          <Button type="link" href="https://on.cypress.io/faq">
            <QuestionMarkSVG/>
            FAQ
          </Button>
        </GridList>
      </HeaderSubmenuSection>
    </div>
  );
}

HeaderSubmenuDocs.propTypes = {
  isMobileView: PropTypes.bool.isRequired,
};

export default HeaderSubmenuDocs;