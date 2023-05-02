import React from "react";
import css from './ProgressItem.module.css';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

import { ReactComponent as FullArrowSVG } from '../../assets/icons/full-arrow.svg';

function ProgressItem({ heading, text, href, src }) {
  return (
    <article className={css['container']}>
      <h3 className="head head--c">{heading}</h3>
      <p className="para para--a">{text}</p>
      {href && <Button type="link link-b" href="https://www.cypress.io/app">Learn more <FullArrowSVG/></Button>}
      {src && <img className={css['image']} src={src}/>}
    </article>
  );
}

ProgressItem.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  href: PropTypes.string,
  src: PropTypes.string,
};

export default ProgressItem;