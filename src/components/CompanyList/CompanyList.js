import React from 'react';
import PropTypes from 'prop-types';

import GridList from '../GridList/GridList';
import Button from '../Button/Button';
import getListData from '../../misc/ListData';
import { useViewportContext } from '../../context/Viewport';

function CompanyList({ isFull, type }) {
  const { isMobileView } = useViewportContext();
  const { types, classNames } = getListData({ type, isMobileView });

  return (
    <GridList columnsCount={1}>
      <h4 className={classNames.heading}>Company</h4>
    
      {
        isFull &&
          <Button type={types.link} href="https://www.cypress.io/about-us">
            About
          </Button>
      }

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
}

CompanyList.propTypes = {
  isFull: PropTypes.bool,
  type: PropTypes.string,
};

export default CompanyList;