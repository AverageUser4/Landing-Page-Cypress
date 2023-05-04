import React from 'react';
import css from './BigLines.module.css';

import BigLinesSVG from '../BigLinesSVG/BigLinesSVG';

function BigLines() {
  return (
    <div className={css['container']}>
      <BigLinesSVG/>
      <div className={css['heading']}>
        <h2 className="head head--b head--medium">Loved by <span className="grad-text grad-text--b">OSS</span>, trusted by <span className="grad-text grad-text--a">Enterprise</span></h2>
        <p className="para para--b para--big para--weight-300">Cypress is proud to support developers all around the world by making it easier to build and test modern applications.</p>
      </div>
    </div>
  );
}

export default BigLines;