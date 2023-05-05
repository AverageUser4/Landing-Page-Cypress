import React from 'react';
import PropTypes from 'prop-types';
import css from './TwitterCard.module.css';

import { ReactComponent as TwitterSVG } from './assets/twitter.svg';

function TwitterCard({ avatarSrc, username, profileTag, content, postHref, color, isBig }) {
  return (
    <article className={`
      ${css['container']}
      ${css[`container--${color}`]}
      ${isBig && css['container--big']}
    `}>
      <div className={css['top']}>
        <div className={css['top__left']}>
          <img className={css['avatar']} src={avatarSrc}/>
          <div className={css['profile-info']}>
            <h4 className="head head--b head--tiny">{username}</h4>
            <a className="para" href={`https://twitter.com/${profileTag}`}>@{profileTag}</a>
          </div>
        </div>
        <a className={css['twitter-icon']} href={postHref}>
          <TwitterSVG/>
        </a>
      </div>
      <p className="para para--b para--weight-300 para--text-align-left para--small">
        {content}
      </p>
    </article>
  );
}

TwitterCard.propTypes = {
  avatarSrc: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profileTag: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  postHref: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['indigo', 'orange', 'teal']).isRequired,
  isBig: PropTypes.bool,
};

export default TwitterCard;