import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import css from './HeaderMenu.module.css';

import Button from '../Button/Button';
import HeaderSubmenu from '../HeaderSubmenu/HeaderSubmenu';

import { useViewportContext } from '../../context/Viewport';
import useAppearanceTransition from '../../hooks/useAppearanceTransition';

const HeaderMenu = memo(function HeaderMenu({ isOpen, isMobileView }) {
  const { viewportWidth } = useViewportContext();

  const [currentlyActiveSubmenu, setCurrentlyActiveSubmenu] = useState('');

  const { 
    transitionedElementRef, isReady, isRendered
  } = useAppearanceTransition({ isOpen });

  if(isMobileView && !isRendered) {
    return;
  }

  return (
    <nav
      className={`
        ${css['menu']}
        ${!isMobileView ? css['menu--desktop'] : ''}
        ${isReady ? css['menu--ready'] : ''}
      `}
      ref={transitionedElementRef}
    >
      <ul 
        className={`
          ${css['list']}
          ${!isMobileView ? css['list--desktop'] : ''}
        `}
      >
        <li>
          <Button
            onClick={() => setCurrentlyActiveSubmenu('product')}
            hasArrow={isMobileView}
            type={`menu-item ${!isMobileView ? 'menu-item-a' : ''}`}
          >
            Product
          </Button>
        </li>

        <li>
          <Button
            onClick={() => setCurrentlyActiveSubmenu('docs')}
            hasArrow={isMobileView}
            type={`menu-item ${!isMobileView ? 'menu-item-a' : ''}`}
          >
            Docs
          </Button>
        </li>

        <li>
          <Button
            onClick={() => setCurrentlyActiveSubmenu('community')}
            hasArrow={isMobileView}
            type={`menu-item ${!isMobileView ? 'menu-item-a' : ''}`}
          >
            Community
          </Button>
        </li>

        <li>
          <Button
            onClick={() => setCurrentlyActiveSubmenu('company')}
            hasArrow={isMobileView}
            type={`menu-item ${!isMobileView ? 'menu-item-a' : ''}`}
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
              <Button
                hasArrow={true}
                type="round"
              >
                Install
              </Button>
          }
      </div>

      <HeaderSubmenu
        isMobileView={isMobileView}
        currentlyActiveSubmenu={currentlyActiveSubmenu}
        setCurrentlyActiveSubmenu={setCurrentlyActiveSubmenu}
      />

      {isMobileView && <div className={css['transition-bar']}/>}

    </nav>
  );
});

HeaderMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isMobileView: PropTypes.bool.isRequired,
};

export default HeaderMenu;