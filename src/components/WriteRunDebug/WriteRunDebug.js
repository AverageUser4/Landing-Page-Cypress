import React from 'react';
import css from './WriteRunDebug.module.css';

import Progress from '../Progress/Progress';
import ProgressItem from '../ProgressItem/ProgressItem';

import { ReactComponent as LaptopSVG } from './assets/laptop.svg';
import debugSrc from './assets/debug.png';
import eliminateSrc from './assets/eliminate.png';
import gainSrc from './assets/gain.png';
import integrateSrc from './assets/integrate.png';
import optimizeSrc from './assets/optimize.png';
import reviewSrc from './assets/review.png';
import testSrc from './assets/test.png';
import writeSrc from './assets/write.png';

function WriteRunDebug() {
  return (
    <>
      <div className={css['container']}>
        <div className="max-width">
          <div className={css['top']}>
            <LaptopSVG style={{ color: 'rgb(90, 95, 122)', display: 'block', margin: 'auto' }}/>
            <p className="para para--b para--medium">Introducing the Cypress App</p>
            <h2 className="head head--b head--medium">Write, run, and debug <span className="grad-text grad-text--a">like a pro</span></h2>
          </div>

          <Progress>
            <ProgressItem
              heading={'Test modern apps directly in the browser'}
              text={'Watch your end-to-end and component tests run in real-time as you develop your applications. Cypress’s simple, yet powerful API runs as fast as your browser can render content.'}
              href={'https://www.cypress.io/app'}
              src={testSrc}
            />
          </Progress>
        </div>
      </div>
    </>
  );
}

export default WriteRunDebug;