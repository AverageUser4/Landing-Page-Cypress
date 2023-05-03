import React from "react";
import PropTypes from 'prop-types';
import css from './GridList.module.css';

function GridList({ children, columnsCount = 2, isHorizontal, style = {} }) {
  let listItems = children;

  if(Array.isArray(children[1])) {
    console.log(children)
  }

  if(Array.isArray(children)) {
    listItems = children.map((element, index) => (
      <li
        key={index}
      >
        {element}
      </li>
    ));
  }

  return (
    <ul
      className={`
        ${css['list']}
        ${isHorizontal && css['list--horizontal']}
      `}
      style={{
        gridTemplateColumns: `repeat(${columnsCount}, auto)`,
        ...style,
      }}
    >
      {listItems}
    </ul>
  );
}

GridList.propTypes = {
  children: PropTypes.node.isRequired,
  columnsCount: PropTypes.number,
  isHorizontal: PropTypes.bool,
  style: PropTypes.object,
};

export default GridList;