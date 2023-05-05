import React, { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';
import css from './Progress.module.css';

import ProgressEnd from "../ProgressEnd/ProgressEnd";

import { useScrollContext } from "../../context/Scroll";
import { useViewportContext } from "../../context/Viewport";

import avatarSrc from './assets/avatar.png';

function Progress({ render, endContent }) {
  const { scrollY } = useScrollContext();
  const { viewportWidth } = useViewportContext();
  const [isAvatarReached, setIsAvatarReached] = useState(false);
  const [isEndReached, setIsEndReached] = useState(false);
  const [isAvatarWithinBreak, setIsAvatarWithinBreak] = useState(false);
  const containerRef = useRef();
  const avatarRef = useRef();
  const isDesktopView = viewportWidth >= 1000;

  useEffect(() => {
    if(!containerRef.current) {
      return;
    }

    const { y, height } = containerRef.current.getBoundingClientRect(); 

    if(y <= -height + 370) {
      setIsEndReached(true);
    } else {
      setIsEndReached(false);
    }

    if(y <= 288) {
      setIsAvatarReached(true);
    } else {
      setIsAvatarReached(false);
    }

  }, [scrollY, viewportWidth]);

  return (
    <div>
      <div 
        className={`${css['items-container']} max-width`}
        ref={containerRef}
      >
        {render({ isDesktopView, setIsAvatarWithinBreak })}
        {
          isDesktopView &&
            <img 
              className={`
                ${css['avatar']}
                ${isAvatarReached && css['avatar--fixed']}
                ${isEndReached && css['avatar--at-end']}
                ${isAvatarWithinBreak && css['avatar--hidden']}
              `}
              src={avatarSrc}
              ref={avatarRef}
            />
        }
      </div>

      <ProgressEnd
        content={endContent}
        isEndReached={isEndReached}
        isDesktopView={isDesktopView}
      />
    </div>
  );
}

Progress.propTypes = {
  render: PropTypes.func.isRequired,
  endContent: PropTypes.node.isRequired,
};

export default Progress;