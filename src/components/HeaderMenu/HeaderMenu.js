import React, { useState } from 'react';
import css from './HeaderMenu.module.css';
import MenuToggleButton from '../MenuToggleButton/MenuToggleButton';
import Button from '../Button/Button';
import { useViewportContext } from '../../context/ViewportContext';

function HeaderMenu() {
  const { viewportWidth } = useViewportContext();
  
  console.log(viewportWidth)

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
                <Button
                  hasArrow={isMobileView}
                  type="menu-item"
                >
                  Product
                </Button>
              </li>

              <li>
                <Button
                  hasArrow={isMobileView}
                  type="menu-item"
                >
                  Docs
                </Button>
              </li>

              <li>
                <Button
                  hasArrow={isMobileView}
                  type="menu-item"
                >
                  Community
                </Button>
              </li>

              <li>
                <Button
                  hasArrow={isMobileView}
                  type="menu-item"
                >
                  Company
                </Button>
              </li>

              <li>
                <Button
                  type="menu-item"
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
                      type={'round'}
                    >
                      Install
                    </Button>
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