import React from 'react';
import css from './Page.module.css';

import Header from '../Header/Header';
import TestAutomateAccelerate from '../TestAutomateAccelerate/TestAutomateAccelerate';

import { ReactComponent as WaveSVG } from '../../assets/images/wave.svg';
import WriteRunDebug from '../WriteRunDebug/WriteRunDebug';

function Page() {
  return (
    <div className={css['container']}>
      <Header isBackgroundTransparentWhenOnTop={true}/>
      <main>
        <TestAutomateAccelerate/>

        <div style={{ color: 'rgb(240,252,248)', backgroundColor: 'white' }}>
          <WaveSVG width="100%" height="100%"/>
        </div>

        <WriteRunDebug/>
      </main>
    </div>
  );
}

export default Page;