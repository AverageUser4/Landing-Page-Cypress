import React, { useEffect, useRef, useState } from "react";
import css from './ProgressItem.module.css';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

import { ReactComponent as FullArrowSVG } from '../../assets/icons/full-arrow.svg';
import { useScrollContext } from "../../context/Scroll";
import { useViewportContext } from "../../context/Viewport";

function ProgressItem({ heading, text, href, src, iconsSrcArray, type = 'normal', children, isDesktopView, setIsAvatarWithinBreak }) {
  const { viewportWidth } = useViewportContext();
  const [isActive, setIsActive] = useState(false);
  const [isAvatarWithin, setIsAvatarWithin] = useState(false);
  const [solidBarHeight, setSolidBarHeight] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const containerRef = useRef();
  const { scrollY } = useScrollContext();

  if(type === 'special') {
    console.log(offsetY)
  }

  useEffect(() => {
    if(!containerRef.current) {
      return;
    }

    const containerY = containerRef.current.getBoundingClientRect().y;

    if(containerY <= 350 && containerY > 15) {
      setIsAvatarWithin(true);
      type === 'break' && setIsAvatarWithinBreak(true);
      setOffsetY(350 - containerY);
    } else {
      setIsAvatarWithin(false);
      type === 'break' && setIsAvatarWithinBreak(false);
      setOffsetY(0);
    }

    if(containerY <= 350) {
      setIsActive(true);
      setSolidBarHeight(330 - containerY);
    } else {
      setIsActive(false);
      setSolidBarHeight(0);
    }
  }, [scrollY, viewportWidth, type, setIsAvatarWithinBreak]);

  return (
    <div 
      className={`
        ${css['container']}
        ${type !== 'normal' && css[`container--${type}`]}
        ${isActive && css['container--active']}
        ${isDesktopView && css['container--desktop']}
        ${isAvatarWithin && css['container--within']}
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
            {<div/>}
          </>
      }
      
      <div 
        className={`${css['bar']}`}
      >
        <div className={`${css['circle']} ${isActive && css['circle--active']}`}/>
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
              <svg className={css['line']} width="43" height="420" viewBox="0 0 43 420" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 1.5 0 C 1.5 63 42 57.24 42 128 M 42 130 L 42 293 C 42 363 1.5 358 1.5 420" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeDasharray="4 4"></path>
                <path d="M 1.5 0 C 1.5 63 42 57.24 42 128" stroke="rgb(73, 86, 227)" strokeWidth="2" strokeLinejoin="round" className="super-stroke" strokeDasharray={`${(!isAvatarWithin && isActive) ? 1000 : offsetY} 1000`}></path>
              </svg>
              <div className={css['circle-container']}>
                <div className={`${css['circle']} ${((isActive && !isDesktopView) || offsetY >= 130 || (!isAvatarWithin && isActive)) && css['circle--active']}`}/>
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
  setIsAvatarWithinBreak: PropTypes.func,
};

export default ProgressItem;