import React, { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';
import css from './Progress.module.css';

import avatarSrc from './assets/avatar.png';
import { useScrollContext } from "../../context/Scroll";
import { useViewportContext } from "../../context/Viewport";

function Progress({ render }) {
  const { scrollY } = useScrollContext();
  const { viewportWidth } = useViewportContext();
  const [isAvatarReached, setIsAvatarReached] = useState(false);
  const containerRef = useRef();
  const avatarRef = useRef();
  const isDesktopView = viewportWidth >= 1000;

  useEffect(() => {
    if(!containerRef.current) {
      return;
    }

    const containerY = containerRef.current.getBoundingClientRect().y;

    if(containerY <= 288) {
      setIsAvatarReached(true);
    } else {
      setIsAvatarReached(false);
    }

  }, [scrollY, viewportWidth]);

  return (
    <div 
      className={css['container']}
      ref={containerRef}
    >
      {render({ isDesktopView })}
      {
        isDesktopView &&
          <img 
            className={`
              ${css['avatar']}
              ${isAvatarReached && css['avatar--fixed']}
            `}
            src={avatarSrc}
            ref={avatarRef}
          />
      }
    </div>
  );
}

Progress.propTypes = {
  render: PropTypes.func.isRequired,
};

export default Progress;