import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import css from './HeaderSubmenu.module.css';

import Button from '../Button/Button';
import HeaderSubmenuProduct from '../HeaderSubmenuProduct/HeaderSubmenuProduct';
import HeaderSubmenuDocs from '../HeaderSubmenuDocs/HeaderSubmenuDocs';
import HeaderSubmenuCommunity from '../HeaderSubmenuCommunity/HeaderSubmenuCommunity';
import HeaderSubmenuCompany from '../HeaderSubmenuCompany/HeaderSubmenuCompany';

import useAppearanceTransition from '../../hooks/useAppearanceTransition';
import useFocusTrap from '../../hooks/useFocusTrap';
import useOutsideClick from '../../hooks/useOutsideClick';
import { useViewportContext } from '../../context/Viewport';

const ALIGNMENT_WIDTH = 1060;

function HeaderSubmenu({ isMobileView, currentlyActiveSubmenu, setCurrentlyActiveSubmenu, onPointerEnter, onPointerLeave, menuButtonsMapRef }) {  
  const { viewportWidth } = useViewportContext();
  
  const { 
    transitionedElementRef: containerRef, isReady, isRendered
  } = useAppearanceTransition({ isOpen: currentlyActiveSubmenu ? true : false });

  useFocusTrap({ 
    isOpen: currentlyActiveSubmenu,
    containerRef,
    toggleButton: !isMobileView && menuButtonsMapRef.current?.get(currentlyActiveSubmenu),
  });

  useOutsideClick({
    containerRef,
    outsideElementsThatDontTrigger: [menuButtonsMapRef.current?.get(currentlyActiveSubmenu)],
    isInvokeCallbackOnEscapeKey: true,
    callback: () => {
      setCurrentlyActiveSubmenu('');
    },
    isIgnore: isMobileView,
  });

  const [buttonCenters, setButtonCenters] = useState();
  const lastActiveSubmenuRef = useRef(currentlyActiveSubmenu);

  useEffect(() => {
    if(viewportWidth < ALIGNMENT_WIDTH) {
      return;
    }

    function getCenter(element) {
      const { left, width } = element.getBoundingClientRect();
      return Math.round(left + (width / 2));
    }

    const newButtonCenters = new Map();
    for(const value of ['product', 'docs', 'community', 'company']) {
      newButtonCenters.set(value, getCenter(menuButtonsMapRef.current.get(value)));
    }
    
    setButtonCenters(newButtonCenters);
  }, [viewportWidth, menuButtonsMapRef]);

  if(currentlyActiveSubmenu) {
    lastActiveSubmenuRef.current = currentlyActiveSubmenu;
  }

  if(!isRendered) {
    return;
  }

  const usedSubmenu = currentlyActiveSubmenu || lastActiveSubmenuRef.current;
  let content;

  switch(usedSubmenu) {
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
      console.error('Unrecognized submenu provided:', usedSubmenu);
  }

  return (
    <div 
      className={`
        ${css['container']}
        ${!isMobileView ? css['container--desktop'] : ''}
        ${isReady ? css['container--ready'] : ''}
      `}
      ref={containerRef}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      style={
        ((viewportWidth >= ALIGNMENT_WIDTH) && buttonCenters) ?
          { 
            left: buttonCenters.get(usedSubmenu),
            transform: 'translateX(-50%)',
          } 
        : {}
      }
    >
      {
        isMobileView &&
          <Button
            type="menu-item menu-item-reversed"
            hasArrow={true}
            onClick={() => setCurrentlyActiveSubmenu('')}
          >
            {usedSubmenu}
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
  onPointerEnter: PropTypes.func.isRequired,
  onPointerLeave: PropTypes.func.isRequired,
  menuButtonsMapRef: PropTypes.object.isRequired,
};

export default HeaderSubmenu;