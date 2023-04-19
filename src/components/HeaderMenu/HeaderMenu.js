import React, { useState } from 'react';
import css from './HeaderMenu.module.css';
import MenuToggleButton from '../MenuToggleButton/MenuToggleButton';
import MenuItem from '../MenuItem/MenuItem';
import { useViewportContext } from '../../context/ViewportContext';

function HeaderMenu() {
  const { viewportWidth } = useViewportContext();
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobileView = viewportWidth < 640;

  return (
    <div className={css['container']}>

      {
        (isMenuOpen || !isMobileView) &&
          <div className={`
            ${css['menu']}
            ${!isMobileView ? css['menu--desktop'] : ''}
          `}>
            <ul 
              className={`
                ${css['list']}
                ${!isMobileView ? css['list--desktop'] : ''}
              `}
            >
              <li>
                <MenuItem
                  isMobileView={isMobileView}
                  text={'Product'}
                />
              </li>

              <li>
                <MenuItem
                  isMobileView={isMobileView}
                  text={'Docs'}
                />
              </li>

              <li>
                <MenuItem
                  isMobileView={isMobileView}
                  text={'Community'}
                />
              </li>

              <li>
                <MenuItem
                  isMobileView={isMobileView}
                  text={'Company'}
                />
              </li>

              <li>
                <MenuItem
                  isMobileView={isMobileView}
                  text={'Pricing'}
                  href="https://www.cypress.io/pricing?v=1"
                />
              </li>
            </ul>

            <div className={`
              ${css['buttons-container']}
              ${!isMobileView ? css['buttons-container--desktop'] : ''}
            `}>
              <a 
                className={`
                  ${isMobileView ? 'button' : ''}
                `}
                href="https://cloud.cypress.io/login"
              >
                Log in
              </a>
              {
                isMobileView &&
                  <a 
                    className={`
                      ${isMobileView ? 'button button--type-0' : ''}
                    `}
                    href="https://cloud.cypress.io/signup"
                  >
                    Sign up
                  </a>
              }
            </div>

          </div>
      }

      {
        isMobileView &&
          <MenuToggleButton
            isOpen={isMenuOpen}
            setIsOpen={setIsMenuOpen}
          />
      }

    </div>
  );
}

export default HeaderMenu;