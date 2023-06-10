import React from 'react';

import PagedSlide from '../PagedSlide/PagedSlide';
import TwitterCard from '../TwitterCard/TwitterCard';
import { useViewportContext } from '../../context/Viewport';

import guySrc from './assets/guy.webp';

function PagedSlideBestTweets() {
  const { viewportWidth } = useViewportContext();
  
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
      {
        viewportWidth >= 600 &&
          <TwitterCard
            avatarSrc={guySrc}
            username="Hakim El Hattab"
            profileTag="hakimel"
            content="Cypress makes me feel about 10x as confident in my work. Just look at those tests go 🥰"
            postHref="https://twitter.com/hakimel/status/1583369424845041664"
            color="indigo"
            isBig={true}
          />
      }
      {
        viewportWidth >= 1000 &&
          <TwitterCard
            avatarSrc={guySrc}
            username="Hakim El Hattab"
            profileTag="hakimel"
            content="Cypress makes me feel about 10x as confident in my work. Just look at those tests go 🥰"
            postHref="https://twitter.com/hakimel/status/1583369424845041664"
            color="orange"
          />
      }
    </PagedSlide>
  );
}

export default PagedSlideBestTweets;