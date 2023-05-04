import React from 'react';
import css from './BigLines.module.css';

function BigLines() {
  return (
    <div className={css['container']}>
      <div className={css['text']}>
        <h2 className="head head--b head--medium">Loved by <span className="grad-text grad-text--b">OSS</span>, trusted by <span className="grad-text grad-text--a">Enterprise</span></h2>
        <p className="para para--b para--big para--weight-300">Cypress is proud to support developers all around the world by making it easier to build and test modern applications.</p>
      </div>
    </div>
  );
}

export default BigLines;