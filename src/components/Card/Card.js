import React from "react";
import PropTypes from 'prop-types';
import css from './Card.module.css';

function Card({ Icon, heading, text, button }) {
  return (
    <div className={css['container']}>
      <Icon/>
      <h4 className="head head--a">{heading}</h4>
      <p className="para para--centered">{text}</p>
      {button}
    </div>
  );
}

Card.propTypes = {
  Icon: PropTypes.object.isRequired,
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  button: PropTypes.node.isRequired,
};

export default Card;