import React, { useEffect, useRef, useState } from "react";
import css from './ProgressItem.module.css';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

import { ReactComponent as FullArrowSVG } from '../../assets/icons/full-arrow.svg';
import { ReactComponent as LinesSVG } from './assets/lines.svg';
import { useScrollContext } from "../../context/Scroll";

function ProgressItem({ heading, text, href, src, type = 'normal', children }) {
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef();
  const { scrollY } = useScrollContext();

  useEffect(() => {
    if(!containerRef.current) {
      return;
    }

    if(containerRef.current.getBoundingClientRect().y <= 350) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [scrollY]);

  return (
    <div 
      className={`
        ${css['container']}
        ${type !== 'normal' && css[`container--${type}`]}
        ${isActive && css['container--active']}
      `} 
      ref={containerRef}
    >
      <div 
        className={`${css['bar']}`}
      >
        <div className={css['circle']}/>
        {type === 'break' && <div className={css['fog']}/>}
      </div>

      {
        type === 'special' && 
          <div className={css['line-container']}>
            <LinesSVG 
              className={`
                ${css['line']}
                ${isActive && 'super-stroke-container--active'}
              `}
            />
            <div className={css['circle']}/>
          </div>
      }
      
      {
        children ?
          children
        :
          <article className={css['content']}>
            {
              Array.isArray(src) && 
                <div className={css['icon-container']}>
                  {src.map(src => <img key={src} className={css['icon']} src={src}/>)}
                </div>
            }
            <h3 className={`head head--c ${type === 'special' && 'head--color-b'}`}>{heading}</h3>
            <p className="para para--a">{text}</p>
            {href && <Button type="link link-b" href={href}>Learn more <FullArrowSVG/></Button>}
            {typeof src === 'string' && <img className={css['image']} src={src}/>}
          </article>
      }
    </div>
  );
}

ProgressItem.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
  href: PropTypes.string,
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  type: PropTypes.oneOf(['normal', 'special', 'break']),
  children: PropTypes.node,
};

export default ProgressItem;