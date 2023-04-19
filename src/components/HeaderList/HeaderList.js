import React, { useEffect, useState } from 'react';
import css from './HeaderList.module.css';
import MenuButton from '../MenuButton/MenuButton';

function HeaderList() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    function onResize() {
      setIsMobileView(!matchMedia('(min-width: 640px)').matches);
    }

    onResize();

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className={css['container']}>

      {
        isMobileView ?
          <MenuButton
            isOpen={isMenuOpen}
            setIsOpen={setIsMenuOpen}
          />
        :
          <ul>
            <li>Product</li>
            <li>Docs</li>
            <li>Community</li>
            <li>Company</li>
            <li>Pricing</li>
          </ul>
      }

    </div>
  );
}

export default HeaderList;