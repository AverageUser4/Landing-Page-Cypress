import React from 'react';
import css from './StayInTheLoop.module.css';

import Button from '../Button/Button';

import { ReactComponent as FullArrowSVG } from '../../assets/icons/full-arrow.svg';

function StayInTheLoop() {
  return (
    <div className={css['container']}>
      <h4 className="head head--d head--color-a head--bit-bold">Stay in the loop</h4>
      <p className="para para--c">Sign up to our newsletter for monthly updates on product releases, news, and articles direct to your inbox.</p>
      <Button
        href="https://www.cypress.io/subscribe"
        type="d"
      >
        Subscribe to our newsletter
        <span className={css['arrow']}>
          <FullArrowSVG/>
        </span>
      </Button>
    </div>
  );
}

export default StayInTheLoop;