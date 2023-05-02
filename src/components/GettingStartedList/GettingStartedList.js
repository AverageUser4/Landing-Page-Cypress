import React from 'react';
import PropTypes from 'prop-types';

import GridList from '../GridList/GridList';
import Button from '../Button/Button';
import { useViewportContext } from '../../context/Viewport';
import getListData from '../../misc/ListData';

function GettingStartedList({ isFull, type = 'a' }) {
  const { isMobileView } = useViewportContext();
  const { types, classNames } = getListData({ type, isMobileView });

  return (
    <GridList columnsCount={1}>
      <h4 className={classNames.heading}>Getting started</h4>
    
      {
        isFull &&
          <Button type={types.link} href="https://on.cypress.io/why-cypress">
            Why Cypress
          </Button>
      }

      <Button type={types.link} href="https://on.cypress.io/installing-cypress">
        Installing Cypress
      </Button>

      <Button type={types.link} href="https://on.cypress.io/writing-your-first-test">
        Writing your first test
      </Button>

      <Button type={types.link} href="https://on.cypress.io/testing-your-app">
        Testing your app
      </Button>

      {
        isFull &&
          <Button type={types.link} href="https://www.cypress.io/how-it-works">
            How Cypress works
          </Button>
      }
    </GridList>
  );
}

GettingStartedList.propTypes = {
  isFull: PropTypes.bool,
  type: PropTypes.string,
};

export default GettingStartedList;