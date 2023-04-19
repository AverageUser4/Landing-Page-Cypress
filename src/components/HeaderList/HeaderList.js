import React from 'react';
import css from './HeaderList.module.css';

function HeaderList() {
  return (
    <div className={css['container']}>

      <ul>
        <li>Product</li>
        <li>Docs</li>
        <li>Community</li>
        <li>Company</li>
        <li>Pricing</li>
      </ul>

    </div>
  );
}

export default HeaderList;