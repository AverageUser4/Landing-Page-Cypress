import React from 'react';
import PropTypes from 'prop-types';

import GridList from '../GridList/GridList';
import Button from '../Button/Button';
import getListData from '../../misc/ListData';
import { useViewportContext } from '../../context/Viewport';

function CommunityList({ type = 'a' }) {
  const { isMobileView } = useViewportContext();
  const { types, classNames } = getListData({ type, isMobileView });

  return (
    <GridList columnsCount={1}>
      <h4 className={classNames.heading}>Community</h4>

    
      <Button type={types.link} href="https://www.cypress.io/blog">
        Blog
      </Button>

      <Button type={types.link} href="https://www.cypress.io/ambassadors">
        Ambassadors
      </Button>

      <Button type={types.link} href="https://www.cypress.io/events">
        Events
      </Button>

      <Button type={types.link} href="https://www.cypress.io/customer-stories">
        Customer stories
      </Button>
    </GridList>
  );
}

CommunityList.propTypes = {
  type: PropTypes.string,
};

export default CommunityList;