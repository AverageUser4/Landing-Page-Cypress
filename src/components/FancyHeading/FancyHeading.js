import React from 'react';
import PropTypes from 'prop-types';
import css from './FancyHeading.module.css';

import { ReactComponent as FullArrowSVG } from './assets/full-arrow.svg';

function FancyHeading({ Icon, heading, text, href }) {
  const contents = (
    <>
      <div className={css['icon-container']}>
        <Icon/>
      </div>

      <div>
        <h3 className={css['heading']}>
          {heading}
          {href && <FullArrowSVG className={css['arrow']}/>}
        </h3>
        <p className={css['paragraph']}>{text}</p>
      </div>
    </>
  );

  if(href) {
    return (
      <a 
        className={css['container']}
        href={href}
      >
        {contents}
      </a>
    );
  }
  
  return (
    <div
      className={css['container']}
    >
      {contents}
    </div>
  );
}

FancyHeading.propTypes = {
  heading: PropTypes.string.isRequired,
  Icon: PropTypes.object,
  text: PropTypes.string,
  href: PropTypes.string,
};

export default FancyHeading;