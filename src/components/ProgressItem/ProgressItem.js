import React, { useEffect, useRef, useState } from "react";
import css from './ProgressItem.module.css';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

import { ReactComponent as FullArrowSVG } from '../../assets/icons/full-arrow.svg';
import { ReactComponent as LinesSVG } from './assets/lines.svg';
import { useScrollContext } from "../../context/Scroll";
import { useViewportContext } from "../../context/Viewport";

function ProgressItem({ heading, text, href, src, iconsSrcArray, type = 'normal', children, isDesktopView }) {
  const { viewportWidth } = useViewportContext();
  const [isActive, setIsActive] = useState(false);
  const [isAvatarWithin, setIsAvatarWithin] = useState(false);
  const [solidBarHeight, setSolidBarHeight] = useState(0);
  const containerRef = useRef();
  const { scrollY } = useScrollContext();

  useEffect(() => {
    if(!containerRef.current) {
      return;
    }

    const containerY = containerRef.current.getBoundingClientRect().y;

    if(containerY <= 350 && containerY > 15) {
      setIsAvatarWithin(true);
    } else {
      setIsAvatarWithin(false);
    }

    if(containerY <= 350) {
      setIsActive(true);
      setSolidBarHeight(330 - containerY);
    } else {
      setIsActive(false);
      setSolidBarHeight(0);
    }
  }, [scrollY, viewportWidth]);

  return (
    <div 
      className={`
        ${css['container']}
        ${type !== 'normal' && css[`container--${type}`]}
        ${isActive && css['container--active']}
        ${isDesktopView && css['container--desktop']}
      `} 
      ref={containerRef}
    >
      {
        isDesktopView &&
          <>
            {
              typeof src === 'string' &&
                <img 
                  className={`
                    ${css['image']}
                    ${!isAvatarWithin && !(type === 'first' && !isActive) && css['image--hidden']}
                    ${(isAvatarWithin || isActive) && css['image--fixed']}
                  `} 
                  src={src}
                /> 
            }
            {(isAvatarWithin || isActive || type === 'break') && <div/>}
          </>
      }
      
      <div 
        className={`${css['bar']}`}
      >
        <div className={css['circle']}/>
        <div 
          className={css['solid-bar']}
          style={
            isDesktopView ? { height: solidBarHeight, transition: 'none' } : {}
          }
        />
        {type === 'break' && <div className={css['fog']}/>}
        {
          type === 'special' && 
            <div className={css['line-container']}>
              <LinesSVG 
                className={`
                  ${css['line']}
                `}
              />
              <div className={css['circle-container']}>
                <div className={css['circle']}/>
              </div>
            </div>
        }
      </div>
      
      <div className={css['content-container']}>
        {
          children ?
            children
          :
            <article className={css['content']}>
              {
                iconsSrcArray && 
                  <div className={css['icon-container']}>
                    {iconsSrcArray.map(src => <img key={src} className={css['icon']} src={src}/>)}
                  </div>
              }
              <h3 className={`head head--c ${type === 'special' && 'head--color-b'}`}>{heading}</h3>
              <p className="para para--a">{text}</p>
              {href && <Button type="link link-b" href={href}>Learn more <FullArrowSVG/></Button>}
              {!isDesktopView && type !== 'special' && <img className={css['image']} src={src}/>}
            </article>
        }
      </div>
    </div>
  );
}

ProgressItem.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
  href: PropTypes.string,
  src: PropTypes.string,
  iconsSrcArray: PropTypes.arrayOf(PropTypes.string),
  type: PropTypes.oneOf(['normal', 'special', 'break', 'first', 'last']),
  children: PropTypes.node,
  isDesktopView: PropTypes.bool.isRequired,
};

export default ProgressItem;