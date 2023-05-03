import React from 'react';
import PropTypes from 'prop-types';

import GridList from '../GridList/GridList';
import Button from '../Button/Button';
import { useViewportContext } from '../../context/Viewport';
import getListData from '../../misc/ListData';

function LinksList({ isFull, type = 'a', linksData, heading, isHorizontal }) {
  const { isMobileView } = useViewportContext();
  const { types, classNames } = getListData({ type, isMobileView });

  const linkElements = linksData.map(d => (
    (d.isShowOnlyWhenFull && !isFull) ?
      null
    :
      <Button 
        key={d.href}
        type={types.link}
        href={d.href}
      >
        {d.content}
      </Button>
  )).filter(element => element);

  return (
    <GridList columnsCount={1} isHorizontal={isHorizontal}>
      {[
        <h4 key="heading" className={classNames.heading}>{heading}</h4>,
        ...linkElements
      ]}
    </GridList>
  );
}

LinksList.propTypes = {
  isFull: PropTypes.bool,
  type: PropTypes.string,
  linksData: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    isShowOnlyWhenFull: PropTypes.bool,
  }).isRequired).isRequired,
  heading: PropTypes.string.isRequired,
  isHorizontal: PropTypes.bool,
};

export default LinksList;