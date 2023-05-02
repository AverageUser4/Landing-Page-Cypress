import React from 'react';
import css from './TestAutomateAccelerate.module.css';

import Button from '../Button/Button';
import InstallButton from '../InstallButton/InstallButton';
import Flip from '../Flip/Flip';

import { ReactComponent as BookSmallSVG } from '../../assets/icons/book-small.svg';
import codeSrc from './assets/code.jpg';
import videoSrc from './assets/video.jpg';
import PartnersSlide from '../PartnersSlide/PartnersSlide';

function TestAutomateAccelerate() {
  return (
    <>
      <div className={css['container']}>
        <div className="max-width">
          <div className={css['top']}>
            <h1 className="head head--b">Test. Automate. <span className="grad-text">Accelerate.</span></h1>
            <p className="para para--b">With Cypress, you can easily create tests for your modern web applications, debug them visually, and automatically run them in your continuous integration builds.</p>

            <div className={css['buttons']}>
              <InstallButton kind="npm"/>
              <Button
                href="https://on.cypress.io/"
                type="e"
              >
                <BookSmallSVG/>
                Documentation
              </Button>
            </div>
          </div>

          <Flip
            first={<img src={codeSrc} style={{ borderRadius: 4 }}/>}
            second={<img src={videoSrc} style={{ borderRadius: 4 }}/>}
          />

          <PartnersSlide/>
        </div>
      </div>
    </>
  );
}

export default TestAutomateAccelerate;