import React from 'react';
import css from './WriteRunDebug.module.css';

import Button from '../Button/Button';
import InstallButton from '../InstallButton/InstallButton';
import PartnersSlide from '../PartnersSlide/PartnersSlide';

import { ReactComponent as BookSmallSVG } from '../../assets/icons/book-small.svg';
import { ReactComponent as LaptopSVG } from './assets/laptop.svg';


function WriteRunDebug() {
  return (
    <>
      <div className={css['container']}>
        <div className="max-width">
          <div className={css['top']}>
            <LaptopSVG style={{ color: 'rgb(90, 95, 122)', display: 'block', margin: 'auto' }}/>
            <p className="para para--b para--b--0">Introducing the Cypress App</p>
            <h2 className="head head--b head--b--0">Write, run, and debug <span className="grad-text grad-text--a">like a pro</span></h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default WriteRunDebug;