import React from 'react';
import PropTypes from 'prop-types';
import css from './HeaderSubmenu.module.css';

import Button from '../Button/Button';
import HeaderSubmenuProduct from '../HeaderSubmenuProduct/HeaderSubmenuProduct';

function HeaderSubmenu({ isMobileView, currentlyActiveSubmenu, setCurrentlyActiveSubmenu }) {
  if(!currentlyActiveSubmenu) {
    return;
  }

  let content;

  switch(currentlyActiveSubmenu) {
    case '':
      break;

    case 'product':
      content = <HeaderSubmenuProduct isMobileView={isMobileView}/>
      break;

    default:
      console.error('Unrecognized submenu provided:', currentlyActiveSubmenu);
  }

  return (
    <div className={css['container']}>
      {
        isMobileView &&
          <Button
            type="menu-item-reversed"
            hasArrow={true}
            onClick={() => setCurrentlyActiveSubmenu('')}
          >
            {currentlyActiveSubmenu}
          </Button>
      }

      {content}
    </div>
  );
}

HeaderSubmenu.propTypes = {
  isMobileView: PropTypes.bool.isRequired,
  currentlyActiveSubmenu: PropTypes.oneOf([
    '', 'product', 'docs', 'community', 'company', 'pricing',
  ]).isRequired,
  setCurrentlyActiveSubmenu: PropTypes.func.isRequired,
};

export default HeaderSubmenu;