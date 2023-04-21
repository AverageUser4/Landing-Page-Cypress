import React, { useState } from 'react';
import css from './HeaderMenu.module.css';
import MenuToggleButton from '../MenuToggleButton/MenuToggleButton';
import Button from '../Button/Button';
import { useWebpageStateContext } from '../../context/WebpageState';
import HeaderSubmenu from '../HeaderSubmenu/HeaderSubmenu';

function HeaderMenu() {
  const { viewportWidth } = useWebpageStateContext();
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentlyActiveSubmenu, setCurrentlyActiveSubmenu] = useState('');
  const isMobileView = viewportWidth < 640;

  return (
    <div className={css['container']}>

      {
        (isMenuOpen || !isMobileView) &&
          <nav className={`
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

          </nav>
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