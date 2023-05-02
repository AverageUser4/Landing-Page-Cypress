import React from 'react';
import PropTypes from 'prop-types';

import GridList from '../GridList/GridList';
import Button from '../Button/Button';
import getListData from '../../misc/ListData';
import { useViewportContext } from '../../context/Viewport';

function DevelopersList({ type }) {
  const { isMobileView } = useViewportContext();
  const { types, classNames } = getListData({ type, isMobileView });

  return (
    <GridList columnsCount={1}>
      <h4 className={classNames.heading}>Developers</h4>
    
      <Button type={types.link} href="https://on.cypress.io/">
        Documentation
      </Button>

      <Button type={types.link} href="https://on.cypress.io/changelog">
        Changelog
      </Button>

      <Button type={types.link} href="https://www.cypressstatus.com/">
        Status site
      </Button>

      <Button type={types.link} href="https://on.cypress.io/contributing">
        Contribute
      </Button>

      <Button type={types.link} href="https://learn.cypress.io/">
        Learn Cypress
      </Button>
    </GridList>
  );
}

DevelopersList.propTypes = {
  type: PropTypes.string,
};

export default DevelopersList;