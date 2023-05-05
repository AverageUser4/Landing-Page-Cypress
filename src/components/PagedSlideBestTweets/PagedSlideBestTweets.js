import React from 'react';

import PagedSlide from '../PagedSlide/PagedSlide';
import TwitterCard from '../TwitterCard/TwitterCard';

import guySrc from './assets/guy.webp';

function PagedSlideBestTweets() {
  return (
    <PagedSlide>
      <TwitterCard
        avatarSrc={guySrc}
        username="Hakim El Hattab"
        profileTag="hakimel"
        content="Cypress makes me feel about 10x as confident in my work. Just look at those tests go 🥰"
        postHref="https://twitter.com/hakimel/status/1583369424845041664"
        color="teal"
      />
      <TwitterCard
        avatarSrc={guySrc}
        username="Hakim El Hattab"
        profileTag="hakimel"
        content="Cypress makes me feel about 10x as confident in my work. Just look at those tests go 🥰"
        postHref="https://twitter.com/hakimel/status/1583369424845041664"
        color="indigo"
        isBig={true}
      />
      <TwitterCard
        avatarSrc={guySrc}
        username="Hakim El Hattab"
        profileTag="hakimel"
        content="Cypress makes me feel about 10x as confident in my work. Just look at those tests go 🥰"
        postHref="https://twitter.com/hakimel/status/1583369424845041664"
        color="orange"
      />
    </PagedSlide>
  );
}

export default PagedSlideBestTweets;