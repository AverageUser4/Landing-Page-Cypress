import React from 'react';
import PropTypes from 'prop-types';

import FancyHeading from '../FancyHeading/FancyHeading';
import GridList from '../GridList/GridList';
import Button from '../Button/Button';
import HeaderSubmenuSection from '../HeaderSubmenuSection/HeaderSubmenuSection';
import HeaderSubmenuSiblings from '../HeaderSubmenuSiblings/HeaderSubmenuSiblings';
import GettingStartedList from '../GettingStartedList/GettingStartedList';
import getData from '../../misc/HeaderSubmenuElementsData';

import { ReactComponent as BookSVG } from './assets/book.svg';
import { ReactComponent as HatSVG } from './assets/hat.svg';
import { ReactComponent as TagSVG } from './assets/tag.svg';
import { ReactComponent as BookSmallSVG } from '../../assets/icons/book-small.svg';
import { ReactComponent as QuestionMarkSVG } from './assets/question-mark.svg';

function HeaderSubmenuDocs({ isMobileView }) {
  const { types, classNames } = getData(isMobileView);

  const heading = (
    <FancyHeading
      Icon={BookSVG}
      heading="Documentation"
      text="Learn how to test your code with Cypress"
      href="https://on.cypress.io/"
    />
  );

  const firstList = (
    <GettingStartedList/>
  );

  const secondList = (
    <GridList columnsCount={1}>
      <h4 className="head head--d">References</h4>
    
      <Button type={types.link} href="https://docs.cypress.io/api/commands/and">
        API
      </Button>

      <Button type={types.link} href="https://on.cypress.io/configuration">
        Configuration
      </Button>

      <Button type={types.link} href="https://on.cypress.io/best-practices">
        Best practices
      </Button>
    </GridList>
  );

  const thirdList = (
    <GridList columnsCount={isMobileView ? 2 : 1}>
      <Button className="icon-container" type={types.linkBold} href="https://learn.cypress.io/">
        <HatSVG className={classNames.svg}/>
        Learn Cypress
      </Button>

      <Button className="icon-container" type={types.linkBold} href="https://on.cypress.io/changelog">
        <TagSVG className={classNames.svg}/>
        Changelog
      </Button>

      <Button className="icon-container" type={types.linkBold} href="https://on.cypress.io/migration-guide">
        <BookSmallSVG className={classNames.svg}/>
        Migration guides
      </Button>

      <Button className="icon-container" type={types.linkBold} href="https://on.cypress.io/faq">
        <QuestionMarkSVG className={classNames.svg}/>
        FAQ
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
          <GridList>
            {firstList}
  
            {secondList}
          </GridList>
        </HeaderSubmenuSection>
  
        <HeaderSubmenuSection>
          {thirdList}
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
              {secondList}
            </GridList>
          </HeaderSubmenuSection>
        </>
      }
      right={
        <>
          {thirdList}
        </>
      }
    />
  );
}

HeaderSubmenuDocs.propTypes = {
  isMobileView: PropTypes.bool.isRequired,
};

export default HeaderSubmenuDocs;