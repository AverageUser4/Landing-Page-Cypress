import React, { useEffect, useRef, useState } from "react";
import css from './ProgressItem.module.css';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

import { ReactComponent as FullArrowSVG } from '../../assets/icons/full-arrow.svg';
import { useScrollContext } from "../../context/Scroll";

function ProgressItem({ heading, text, href, src }) {
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
    <div className={css['container']} ref={containerRef}>
      <div 
        className={`${css['bar']} ${isActive && css['bar--active']}`}
      >
        <div className={css['bar__circle']}/>
      </div>
      
      <article className={css['content']}>
        <h3 className="head head--c">{heading}</h3>
        <p className="para para--a">{text}</p>
        {href && <Button type="link link-b" href="https://www.cypress.io/app">Learn more <FullArrowSVG/></Button>}
        {src && <img className={css['image']} src={src}/>}
      </article>
    </div>
  );
}

ProgressItem.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  href: PropTypes.string,
  src: PropTypes.string,
};

export default ProgressItem;