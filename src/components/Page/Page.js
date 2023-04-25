import React from 'react';
import css from './Page.module.css';

import Header from '../Header/Header';
import TestAutomateAccelerate from '../TestAutomateAccelerate/TestAutomateAccelerate';

function Page() {
  return (
    <div className={css['container']}>
      <Header isBackgroundTransparentWhenOnTop={true}/>
      <main>
        <TestAutomateAccelerate/>
      </main>
    </div>
  );
}

export default Page;