import React from 'react';
import css from './WriteRunDebug.module.css';

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
    <div className={css['container']}>
      <div className="max-width">
        <div className={css['top']}>
          <LaptopSVG style={{ color: 'rgb(90, 95, 122)', display: 'block', margin: 'auto' }}/>
          <p className="para para--b para--medium">Introducing the Cypress App</p>
          <h2 className="head head--b head--medium">Write, run, and debug <span className="grad-text grad-text--a">like a pro</span></h2>
        </div>

        <div style={{ padding: 'clamp(32px, 5vw, 64px) 0' }}>
          <ProgressItem
            heading={'Test modern apps directly in the browser'}
            text={'Watch your end-to-end and component tests run in real-time as you develop your applications. Cypress’s simple, yet powerful API runs as fast as your browser can render content.'}
            href={'https://www.cypress.io/app'}
            src={testSrc}
          />
          <ProgressItem
            heading={'Write your first passing test in minutes'}
            text={'Installing Cypress and writing your first passing test is a breeze. There are no servers, drivers, or other dependencies to install or configure.'}
            href={'https://www.cypress.io/app#delightful_experience'}
            src={writeSrc}
          />
          <ProgressItem
            heading={'Debug failures directly in the browser'}
            text={'Because Cypress runs directly in the browser, you can debug failed tests using the in-browser developer tools you already know and love.'}
            href={'https://www.cypress.io/app#visual_debugging'}
            src={debugSrc}
          />
          <ProgressItem
            heading={'Eliminate flaky tests with ease'}
            text={'Cypress deterministically interacts with your application the same way as your users so you can discover intermittent bugs before your users do.'}
            href={'https://www.cypress.io/app#flake_resistance'}
            src={eliminateSrc}
          />
        </div>
      </div>
    </div>
  );
}

export default WriteRunDebug;