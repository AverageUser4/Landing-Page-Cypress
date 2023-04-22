import React from 'react';
import PropTypes from 'prop-types';
import css from './HeaderSubmenu.module.css';

import Button from '../Button/Button';
import HeaderSubmenuProduct from '../HeaderSubmenuProduct/HeaderSubmenuProduct';
import HeaderSubmenuDocs from '../HeaderSubmenuDocs/HeaderSubmenuDocs';
import HeaderSubmenuCommunity from '../HeaderSubmenuCommunity/HeaderSubmenuCommunity';
import HeaderSubmenuCompany from '../HeaderSubmenuCompany/HeaderSubmenuCompany';

import useAppearanceTransition from '../../hooks/useAppearanceTransition';

function HeaderSubmenu({ isMobileView, currentlyActiveSubmenu, setCurrentlyActiveSubmenu }) {
  const { 
    transitionedElementRef, isReady, isRendered
  } = useAppearanceTransition({ isOpen: currentlyActiveSubmenu ? true : false });

  if(!isRendered) {
    return;
  }

  let content;

  switch(currentlyActiveSubmenu) {
    case '':
      break;

    case 'product':
      content = <HeaderSubmenuProduct isMobileView={isMobileView}/>
      break;

    case 'docs':
      content = <HeaderSubmenuDocs isMobileView={isMobileView}/>
      break;

    case 'community':
      content = <HeaderSubmenuCommunity isMobileView={isMobileView}/>
      break;

    case 'company':
      content = <HeaderSubmenuCompany isMobileView={isMobileView}/>
      break;

    default:
      console.error('Unrecognized submenu provided:', currentlyActiveSubmenu);
  }

  return (
    <div 
      className={`
        ${css['container']}
        ${!isMobileView ? css['container--desktop'] : ''}
        ${isReady ? css['container--ready'] : ''}
      `}
      ref={transitionedElementRef}
    >
      {
        isMobileView &&
          <Button
            type="menu-item menu-item-reversed"
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