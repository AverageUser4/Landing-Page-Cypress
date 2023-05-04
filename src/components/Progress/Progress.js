import React, { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';
import css from './Progress.module.css';

import avatarSrc from './assets/avatar.png';
import { useScrollContext } from "../../context/Scroll";

function Progress({ children }) {
  const { scrollY } = useScrollContext();
  const containerRef = useRef();
  const [isAvatarReached, setIsAvatarReached] = useState(false);

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

  }, [scrollY]);

  return (
    <div 
      className={css['container']}
      ref={containerRef}
    >
      {children}
      <img 
        className={`
          ${css['avatar']}
          ${isAvatarReached && css['avatar--fixed']}
        `}
        src={avatarSrc}
      />
    </div>
  );
}

Progress.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Progress;