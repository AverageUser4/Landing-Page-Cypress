import React from 'react';
import PropTypes from 'prop-types';

import GridList from '../GridList/GridList';
import Button from '../Button/Button';

import getData from '../../misc/HeaderSubmenuElementsData';

import { ReactComponent as DiscordSVG } from './assets/discord.svg';
import { ReactComponent as FacebookSVG } from './assets/facebook.svg';
import { ReactComponent as GithubSVG } from './assets/github.svg';
import { ReactComponent as LinkedInSVG } from './assets/linked-in.svg';
import { ReactComponent as TwitterSVG } from './assets/twitter.svg';
import { ReactComponent as YoutubeSVG } from './assets/youtube.svg';

function SocialsList({ columnsCount = 1, isMobileView, type = 'a' }) {
  const { types, classNames } = getData(isMobileView);

  return (
    <GridList columnsCount={columnsCount} isHorizontal={type === 'b'}>
      <Button className="icon-container" type={type === 'a' ? types.linkBold : 'link'} href="https://github.com/cypress-io/cypress">
        <GithubSVG className={type === 'a' ? classNames.svg : ''}/>
        {type === 'a' && 'GitHub'}
      </Button>

      <Button className="icon-container" type={type === 'a' ? types.linkBold : 'link'} href="https://www.youtube.com/c/Cypressio">
        <YoutubeSVG className={type === 'a' ? classNames.svg : ''}/>
        {type === 'a' && 'YouTube'}
      </Button>

      <Button className="icon-container" type={type === 'a' ? types.linkBold : 'link'} href="https://www.linkedin.com/company/cypress.io">
        <LinkedInSVG className={type === 'a' ? classNames.svg : ''}/>
        {type === 'a' && 'LinkedIn'}
      </Button>

      <Button className="icon-container" type={type === 'a' ? types.linkBold : 'link'} href="https://twitter.com/Cypress_io">
        <TwitterSVG className={type === 'a' ? classNames.svg : ''}/>
        {type === 'a' && 'Twitter'}
      </Button>

      <Button className="icon-container" type={type === 'a' ? types.linkBold : 'link'} href="https://facebook.com/cypressio">
        <FacebookSVG className={type === 'a' ? classNames.svg : ''}/>
        {type === 'a' && 'Facebook'}
      </Button>

      <Button className="icon-container" type={type === 'a' ? types.linkBold : 'link'} href="https://on.cypress.io/chat">
        <DiscordSVG className={type === 'a' ? classNames.svg : ''}/>
        {type === 'a' && 'Discord'}
      </Button>
    </GridList>
  );
}

SocialsList.propTypes = {
  columnsCount: PropTypes.number,
  isMobileView: PropTypes.bool.isRequired,
  type: PropTypes.string,
};

export default SocialsList;