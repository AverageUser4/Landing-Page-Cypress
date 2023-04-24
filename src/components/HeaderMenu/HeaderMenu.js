import React, { useState, memo, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import css from './HeaderMenu.module.css';

import Button from '../Button/Button';
import HeaderSubmenu from '../HeaderSubmenu/HeaderSubmenu';

import { useViewportContext } from '../../context/Viewport';
import useAppearanceTransition from '../../hooks/useAppearanceTransition';
import useFocusTrap from '../../hooks/useFocusTrap';
import useKeyDown from '../../hooks/useKeyDown';
import InstallButton from '../InstallButton/InstallButton';

const HeaderMenu = memo(function HeaderMenu({ isOpen, isMobileView, setIsOpen, toggleButtonRef }) {
  const { viewportWidth } = useViewportContext();

  const [currentlyActiveSubmenu, setCurrentlyActiveSubmenu] = useState('');
  const menuButtonsMapRef = useRef(new Map());
  const changeTimeoutRef = useRef();

  const { 
    transitionedElementRef: containerRef, isReady, isRendered
  } = useAppearanceTransition({ isOpen });

  useFocusTrap({ 
    isOpen,
    containerRef,
    toggleButton: toggleButtonRef.current,
    isIgnore: !isMobileView,
  });

  useKeyDown({
    callback: (event) => event.key === 'Escape' && setIsOpen(false),
    isIgnore: !isMobileView,
  });

  useEffect(() => {
    if(!isRendered) {
      setCurrentlyActiveSubmenu('');
    }
  }, [isRendered]);

  if(isMobileView && !isRendered) {
    return;
  }

  function doSetCurrentlyActiveSubmenu(newValue, isForced) {
    clearTimeout(changeTimeoutRef.current);
    
    if(!isForced && currentlyActiveSubmenu === newValue) {
      setCurrentlyActiveSubmenu('');
    } else if(newValue) {
      setCurrentlyActiveSubmenu(newValue);
    } else {
      changeTimeoutRef.current = setTimeout(() => {
        setCurrentlyActiveSubmenu('');
      }, 300);
    }
  }

  function prepareRef(element, key) {
    if(!element) {
      menuButtonsMapRef.current = new Map();
    } else {
      menuButtonsMapRef.current.set(key, element);
    }
  }

  return (
    <nav
      className={`
        ${css['menu']}
        ${!isMobileView ? css['menu--desktop'] : ''}
        ${isReady ? css['menu--ready'] : ''}
      `}
      ref={containerRef}
    >
      <ul 
        className={`
          ${css['list']}
          ${!isMobileView ? css['list--desktop'] : ''}
        `}
      >
        <li>
          <Button
            onClick={() => doSetCurrentlyActiveSubmenu('product')}
            onPointerEnter={() => !isMobileView && doSetCurrentlyActiveSubmenu('product')}
            onPointerLeave={() => !isMobileView && doSetCurrentlyActiveSubmenu('')}
            hasArrow={isMobileView}
            type={`menu-item ${!isMobileView ? 'menu-item-a' : ''}`}
            ref={(element) => prepareRef(element, 'product')}
          > 
            Product
          </Button>
        </li>

        <li>
          <Button
            onClick={() => doSetCurrentlyActiveSubmenu('docs')}
            onPointerEnter={() => !isMobileView && doSetCurrentlyActiveSubmenu('docs')}
            onPointerLeave={() => !isMobileView && doSetCurrentlyActiveSubmenu('')}
            hasArrow={isMobileView}
            type={`menu-item ${!isMobileView ? 'menu-item-a' : ''}`}
            ref={(element) => prepareRef(element, 'docs')}
          >
            Docs
          </Button>
        </li>

        <li>
          <Button
            onClick={() => doSetCurrentlyActiveSubmenu('community')}
            onPointerEnter={() => !isMobileView && doSetCurrentlyActiveSubmenu('community')}
            onPointerLeave={() => !isMobileView && doSetCurrentlyActiveSubmenu('')}
            hasArrow={isMobileView}
            type={`menu-item ${!isMobileView ? 'menu-item-a' : ''}`}
            ref={(element) => prepareRef(element, 'community')}
          >
            Community
          </Button>
        </li>

        <li>
          <Button
            onClick={() => doSetCurrentlyActiveSubmenu('company')}
            onPointerEnter={() => !isMobileView && doSetCurrentlyActiveSubmenu('company')}
            onPointerLeave={() => !isMobileView && doSetCurrentlyActiveSubmenu('')}
            hasArrow={isMobileView}
            type={`menu-item ${!isMobileView ? 'menu-item-a' : ''}`}
            ref={(element) => prepareRef(element, 'company')}
          >
            Company
          </Button>
        </li>

        <li>
          <Button
            type={`menu-item ${!isMobileView ? 'menu-item-a' : ''}`}
            href="https://www.cypress.io/pricing?v=1"
          >
            Pricing
          </Button>
        </li>
      </ul>

      <div className={`
        ${css['buttons-container']}
        ${!isMobileView ? css['buttons-container--desktop'] : ''}
      `}>
          <Button
            href="https://cloud.cypress.io/login"
            type={isMobileView ? '' : 'menu-item'}
          >
            Log in
          </Button>

          {
            isMobileView &&
              <Button
                href="https://cloud.cypress.io/signup"
                type="a"
              >
                Sign up
              </Button>
          }

          {
            viewportWidth >= 1000 &&
              <InstallButton/>
          }
      </div>

      <HeaderSubmenu
        isMobileView={isMobileView}
        currentlyActiveSubmenu={currentlyActiveSubmenu}
        setCurrentlyActiveSubmenu={setCurrentlyActiveSubmenu}
        isHeaderMenuOpen={isOpen}
        onPointerEnter={() => !isMobileView && doSetCurrentlyActiveSubmenu(currentlyActiveSubmenu, true)}
        onPointerLeave={() => !isMobileView && doSetCurrentlyActiveSubmenu('')}
        menuButtonsMapRef={menuButtonsMapRef}
      />

      {isMobileView && <div className={css['transition-bar']}/>}
    </nav>
  );
});

HeaderMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  isMobileView: PropTypes.bool.isRequired,
  toggleButtonRef: PropTypes.object.isRequired,
};

export default HeaderMenu;