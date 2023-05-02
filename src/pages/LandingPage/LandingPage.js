import React from 'react';
import css from './LandingPage.module.css';

import Header from '../../components/Header/Header';
import TestAutomateAccelerate from '../../components/TestAutomateAccelerate/TestAutomateAccelerate';
import WriteRunDebug from '../../components/WriteRunDebug/WriteRunDebug';
import Footer from '../../components/Footer/Footer';

import { ReactComponent as WaveSVG } from '../../assets/images/wave.svg';

function LandingPage() {
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

      <Footer/>
    </div>
  );
}

export default LandingPage;