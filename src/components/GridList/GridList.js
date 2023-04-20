import React from "react";
import PropTypes from 'prop-types';
import css from './GridList.module.css';

function GridList({ children, columnsCount = 2 }) {
  const listItems = children.map((element, index) => (
    <li
      key={index}
    >
      {element}
    </li>
  ));

  return (
    <ul
      className={`
        ${css['list']}
      `}
      style={{
        gridTemplateColumns: `repeat(${columnsCount}, auto)`,
      }}
    >
      {listItems}
    </ul>
  );
}

GridList.propTypes = {
  children: PropTypes.node.isRequired,
  columnsCount: PropTypes.number,
};

export default GridList;